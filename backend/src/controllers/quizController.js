import Quiz from '../models/Quiz.js';
import { okResponse, errorResponse } from '../utils/responseHelpers.js';
import { isObjectId } from '../utils/validators.js';

export const createQuiz = async (req, res) => {
  const { classId, question, choices, answers, allowOffline } = req.body || {};
  if (!isObjectId(classId) || !question || !Array.isArray(choices) || !Array.isArray(answers)) {
    return res.status(400).json(errorResponse('invalid_request'));
  }
  const quiz = await Quiz.create({
    classId,
    question,
    choices,
    answers,
    allowOffline: allowOffline !== undefined ? !!allowOffline : true,
    createdAt: new Date()
  });
  return res.json(okResponse({
    quiz: {
      id: String(quiz._id),
      classId: String(quiz.classId),
      question: quiz.question,
      choices: quiz.choices,
      answers: quiz.answers,
      allowOffline: quiz.allowOffline,
      createdAt: quiz.createdAt
    }
  }));
};

export const listByClass = async (req, res) => {
  const { classId } = req.params;
  if (!isObjectId(classId)) return res.status(400).json(errorResponse('invalid_class_id'));
  const quizzes = await Quiz.find({ classId }).sort({ createdAt: -1 }).lean();
  return res.json(okResponse({
    quizzes: quizzes.map(q => ({
      id: String(q._id),
      classId: String(q.classId),
      question: q.question,
      choices: q.choices,
      answers: q.answers,
      allowOffline: q.allowOffline,
      createdAt: q.createdAt
    }))
  }));
};

export const submitQuiz = async (req, res) => {
  const { id } = req.params;
  const { answers, attemptMeta } = req.body || {};
  if (!isObjectId(id) || !Array.isArray(answers)) return res.status(400).json(errorResponse('invalid_request'));
  const quiz = await Quiz.findById(id);
  if (!quiz) return res.status(404).json(errorResponse('quiz_not_found'));
  const response = {
    userId: req.user?.id || null,
    answers,
    attemptMeta,
    createdAt: new Date()
  };
  quiz.responses = quiz.responses || [];
  quiz.responses.push(response);
  await quiz.save();
  return res.json(okResponse({ submission: { quizId: String(quiz._id), ...response, userId: String(response.userId || '') } }));
};