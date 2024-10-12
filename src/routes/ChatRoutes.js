import express from 'express';
import { getChatHistory } from '../controllers/ChatController.js';

const router = express.Router();

// Ruta para obtener el historial del chat
router.get('/:room', getChatHistory);

export default router;
