import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ChatMessage = sequelize.define('ChatMessage', {
  room: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
});

export default ChatMessage;
