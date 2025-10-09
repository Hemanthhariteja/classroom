import './config/env.js';
import express from 'express';
import http from 'http';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import classRoutes from './routes/classRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import { initSignalling } from './realtime/signalling.js';
import { errorResponse, okResponse } from './utils/responseHelpers.js';
import { storage } from './services/storageAdapter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);

// Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Healthcheck
app.get('/health', (req, res) => res.json(okResponse({ message: 'healthy' })));

// Serve local storage files (only when STORAGE_DRIVER=local)
// GET /storage/:key where key can contain slashes, use query ?key=... or path param
app.get('/storage/*', async (req, res) => {
  try {
    const keyFromPath = req.params[0]; // everything after /storage/
    const key = keyFromPath || req.query.key;
    if (!key) return res.status(400).json(errorResponse('missing_storage_key'));
    
    // Set proper Content-Type based on file extension
    const ext = path.extname(key).toLowerCase();
    const contentTypes = {
      '.ogg': 'audio/ogg',
      '.mp3': 'audio/mpeg',
      '.wav': 'audio/wav',
      '.m4a': 'audio/mp4',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.pdf': 'application/pdf',
      '.txt': 'text/plain'
    };
    
    if (contentTypes[ext]) {
      res.setHeader('Content-Type', contentTypes[ext]);
    }
    
    if (process.env.STORAGE_DRIVER === 's3') {
      const url = storage.getPublicUrl(key);
      if (!url) return res.status(404).json(errorResponse('not_found'));
      // Redirect to cloud public URL
      return res.redirect(url);
    } else {
      const stream = await storage.getReadStream(key);
      if (!stream) return res.status(404).json(errorResponse('not_found'));
      stream.on('error', () => res.status(404).end());
      stream.pipe(res);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(errorResponse('storage_read_error'));
  }
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api', classRoutes);
app.use('/api', quizRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json(errorResponse('not_found'));
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json(errorResponse('server_error'));
});

// Start
const PORT = process.env.PORT || 3000;
await connectDB();

// Init WebSocket signalling on the same HTTP server
initSignalling(server);

server.listen(PORT, () => {
  console.log(`HTTP server listening on http://localhost:${PORT}`);
  console.log(`WebSocket signalling at ws://localhost:${PORT}/ws`);
  console.log(`Server running on ${process.env.PORT || 3000}`);
  // Debug: list routes
  const routes = [];
  const walk = (stack, base = '') => stack.forEach(layer => {
    if (layer.route) {
      const path = base + layer.route.path;
      Object.keys(layer.route.methods).forEach(m => routes.push(`${m.toUpperCase()} ${path}`));
    } else if (layer.name === 'router' && layer.handle.stack) {
      walk(layer.handle.stack, base + (layer.regexp?.fast_slash ? '' : (layer.regexp.source.includes('^\\/')
        ? layer.regexp.source.replace('^\\','/').replace('\\/?(?=\\/|$)','') : '')));
    }
  });
  if (app._router && app._router.stack) walk(app._router.stack);
  console.log('Routes:\n' + routes.sort().join('\n'));
});