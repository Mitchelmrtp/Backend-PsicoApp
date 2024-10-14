import app from './app.js';
import sequelize from './src/config/database.js';
import { createServer } from 'http';
import { Server } from 'socket.io';

async function main() {
    try {
        const init = process.argv[2];
        if (init)
            await sequelize.sync({ force: true });
        else
            await sequelize.sync({ force: false });

        const server = createServer(app);
        const io = new Server(server, {
            cors: {
                origin: "*", // Configura los orígenes permitidos
                methods: ["GET", "POST"]
            }
        });

        // Manejar la conexión de los sockets
        io.on("connection", (socket) => {
            console.log("Usuario conectado:", socket.id);

            // Recibir el evento para unirse a una sala de chat
            socket.on('join_room', ({ roomId, userId }) => {
                socket.join(roomId);
                console.log(`Usuario ${userId} se unió a la sala ${roomId}`);
            });

            // Manejar la recepción de mensajes
            socket.on("send_message", ({ roomId, message, senderId }) => {
                console.log(`Mensaje de ${senderId} en sala ${roomId}: ${message}`);
                io.to(roomId).emit("receive_message", { message, senderId });
            });

            // Desconectar al usuario
            socket.on("disconnect", () => {
                console.log("Usuario desconectado:", socket.id);
            });
        });

        server.listen(3001, () => {
            console.log('Servidor escuchando en el puerto 3001');
        });
    } catch (err) {
        console.error('Error de conexión:', err);
    }
}

main();
