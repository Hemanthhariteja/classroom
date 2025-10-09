import multer from 'multer';
import path from 'path';
import ClassModel from '../models/Class.js';
import Discussion from '../models/Discussion.js';
import User from '../models/User.js';
import { okResponse, errorResponse } from '../utils/responseHelpers.js';
import { isObjectId } from '../utils/validators.js';
import { storage } from '../services/storageAdapter.js';
import { compressAudio, convertPdfToJpegs } from '../services/mediaService.js';

// Multer memory storage for handling uploads before pushing to storage adapter
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 30 * 1024 * 1024 } });

export const uploads = {
  slides: upload.array('slides', 50),
  slideAudio: upload.single('audio')
};

export const createClass = async (req, res) => {
  const { title, scheduledAt } = req.body || {};
  const teacherId = req.user?.id;
  if (!title || !scheduledAt) return res.status(400).json(errorResponse('missing_fields'));
  const cls = await ClassModel.create({
    title,
    scheduledAt: new Date(scheduledAt),
    teacher: teacherId
  });
  return res.json(okResponse({ class: { id: String(cls._id), title: cls.title } }));
};

export const uploadSlides = async (req, res) => {
  const { id } = req.params;
  if (!isObjectId(id)) return res.status(400).json(errorResponse('invalid_class_id'));
  const cls = await ClassModel.findById(id);
  if (!cls) return res.status(404).json(errorResponse('class_not_found'));
  if (String(cls.teacher) !== req.user.id) return res.status(403).json(errorResponse('forbidden'));

  const uploadedMeta = [];

  // If a PDF is uploaded under 'slides' (single), attempt conversion; else treat each file as slide image
  if (!req.files || req.files.length === 0) {
    return res.status(400).json(errorResponse('no_files'));
  }

  for (const file of req.files) {
    const ext = path.extname(file.originalname || '').toLowerCase();
    if (file.mimetype === 'application/pdf' || ext === '.pdf') {
      // convert PDF to images
      const tmpPath = path.join(process.cwd(), `.${Date.now()}_${file.originalname}`);
      await (await import('fs/promises')).writeFile(tmpPath, file.buffer);
      let images = [];
      try {
        images = await convertPdfToJpegs(tmpPath);
      } catch (e) {
        console.warn('PDF to JPEG conversion failed, storing PDF as-is', e.message);
      }
      await (await import('fs/promises')).unlink(tmpPath).catch(() => {});
      if (images.length > 0) {
        let page = 1;
        for (const img of images) {
          const key = `slides/${id}/slide-${String(page).padStart(3, '0')}.jpg`;
          const stored = await storage.putObject({ key, body: img.buffer, contentType: img.mime });
          uploadedMeta.push({ filename: stored.key, mime: img.mime, pageCount: 1 });
          page++;
        }
        continue;
      } else {
        // Store original PDF
        const key = `slides/${id}/${file.originalname}`;
        const stored = await storage.putObject({ key, body: file.buffer, contentType: file.mimetype });
        uploadedMeta.push({ filename: stored.key, mime: file.mimetype, pageCount: 0 });
        continue;
      }
    } else {
      // Store image slide directly
      const base = path.basename(file.originalname || `slide-${Date.now()}.jpg`);
      const key = `slides/${id}/${base}`;
      const stored = await storage.putObject({ key, body: file.buffer, contentType: file.mimetype });
      uploadedMeta.push({ filename: stored.key, mime: file.mimetype, pageCount: 1 });
    }
  }

  cls.slides = (cls.slides || []).concat(uploadedMeta);
  await cls.save();

  return res.json(okResponse({
    slides: uploadedMeta.map((m, idx) => ({ id: idx, key: m.filename }))
  }));
};

export const uploadSlideAudio = async (req, res) => {
  const { id } = req.params;
  const { slideIndex } = req.body || {};
  if (!isObjectId(id)) return res.status(400).json(errorResponse('invalid_class_id'));
  if (slideIndex === undefined) return res.status(400).json(errorResponse('missing_slide_index'));
  const cls = await ClassModel.findById(id);
  if (!cls) return res.status(404).json(errorResponse('class_not_found'));
  if (String(cls.teacher) !== req.user.id) return res.status(403).json(errorResponse('forbidden'));
  if (!req.file) return res.status(400).json(errorResponse('no_audio_file'));

  try {
    // Skip compression for now - store audio file directly
    const key = `audio/${id}/slide-${slideIndex}-${Date.now()}.ogg`;
    const stored = await storage.putObject({ 
      key, 
      body: req.file.buffer, 
      contentType: req.file.mimetype 
    });

    // Update class slideAudio
    const entry = { slideIndex: Number(slideIndex), audioFile: stored.key };
    const foundIdx = (cls.slideAudio || []).findIndex(a => a.slideIndex === Number(slideIndex));
    if (foundIdx >= 0) cls.slideAudio[foundIdx] = entry;
    else cls.slideAudio = [...(cls.slideAudio || []), entry];
    await cls.save();

    return res.json(okResponse({ audio: entry }));
  } catch (e) {
    console.error('Audio upload failed:', e);
    return res.status(500).json(errorResponse('audio_processing_failed'));
  }
};

export const getClass = async (req, res) => {
  const { id } = req.params;
  if (!isObjectId(id)) return res.status(400).json(errorResponse('invalid_class_id'));
  const cls = await ClassModel.findById(id).populate('teacher', 'phone role name').lean();
  if (!cls) return res.status(404).json(errorResponse('class_not_found'));
  return res.json(okResponse({
    class: {
      id: String(cls._id),
      title: cls.title,
      scheduledAt: cls.scheduledAt,
      teacher: cls.teacher ? { id: String(cls.teacher._id), phone: cls.teacher.phone, role: cls.teacher.role, name: cls.teacher.name } : null,
      slides: cls.slides || [],
      slideAudio: cls.slideAudio || [],
      live: !!cls.live
    }
  }));
};

// Discussion endpoints (as per acceptance)
export const postDiscussion = async (req, res) => {
  const { classId } = req.params;
  const { text } = req.body || {};
  if (!isObjectId(classId)) return res.status(400).json(errorResponse('invalid_class_id'));
  if (!text) return res.status(400).json(errorResponse('missing_text'));
  const cls = await ClassModel.findById(classId);
  if (!cls) return res.status(404).json(errorResponse('class_not_found'));
  const msg = await Discussion.create({
    classId,
    user: req.user?.id,
    text,
    createdAt: new Date()
  });
  return res.json(okResponse({
    message: { id: String(msg._id), user: String(msg.user), text: msg.text, createdAt: msg.createdAt }
  }));
};

export const listDiscussion = async (req, res) => {
  const { classId } = req.params;
  const page = Math.max(1, parseInt(req.query.page || '1', 10));
  const limit = Math.min(100, Math.max(1, parseInt(req.query.limit || '20', 10)));
  if (!isObjectId(classId)) return res.status(400).json(errorResponse('invalid_class_id'));
  const msgs = await Discussion.find({ classId }).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean();
  return res.json(okResponse({
    messages: msgs.map(m => ({ id: String(m._id), user: String(m.user), text: m.text, createdAt: m.createdAt, resolved: !!m.resolved })),
    page,
    limit
  }));
};

// Live broadcast endpoints
export const startLiveBroadcast = async (req, res) => {
  const { id } = req.params;
  if (!isObjectId(id)) return res.status(400).json(errorResponse('invalid_class_id'));
  
  const cls = await ClassModel.findById(id);
  if (!cls) return res.status(404).json(errorResponse('class_not_found'));
  
  // Set live status to true
  cls.live = true;
  await cls.save();
  
  return res.json(okResponse({ 
    message: 'Live broadcast started',
    classId: String(cls._id),
    live: true
  }));
};

export const stopLiveBroadcast = async (req, res) => {
  const { id } = req.params;
  if (!isObjectId(id)) return res.status(400).json(errorResponse('invalid_class_id'));
  
  const cls = await ClassModel.findById(id);
  if (!cls) return res.status(404).json(errorResponse('class_not_found'));
  
  // Set live status to false
  cls.live = false;
  await cls.save();
  
  return res.json(okResponse({ 
    message: 'Live broadcast stopped',
    classId: String(cls._id),
    live: false
  }));
};