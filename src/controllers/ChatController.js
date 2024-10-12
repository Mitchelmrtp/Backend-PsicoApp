import ChatService from '../services/ChatService.js';

export const handleSocketConnection = (socket, io) => {
  console.log(`Usuario conectado: ${socket.id}`);

  // Evento para unirse a una sala
  socket.on('join_room', (data) => {
    const { room, user } = data;
    socket.join(room);
    console.log(`${user} se ha unido a la sala: ${room}`);
  });

  // Evento para enviar mensajes
  socket.on('send_message', async (data) => {
    const { room, message, user } = data;

    // Guardar mensaje en la base de datos (si es necesario)
    await ChatService.saveMessage({ room, message, user });

    // Emitir el mensaje a todos en la sala
    io.to(room).emit('receive_message', { user, message });
  });

  // Evento de desconexión
  socket.on('disconnect', () => {
    console.log(`Usuario desconectado: ${socket.id}`);
  });
};
