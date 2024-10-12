import ChatMessage from '../models/chatMessage.js';

class ChatService {
  async saveMessage(data) {
    const { room, message, user } = data;
    await ChatMessage.create({ room, message, user });
  }
}

export default new ChatService();
