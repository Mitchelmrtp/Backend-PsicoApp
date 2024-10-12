const { Server } = require('socket.io');
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Simulación de base de datos (puedes usar tu conexión real)
let chats = [];

io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado');

    // Recibir mensajes del cliente
    socket.on('chat', ({ paciente_id, psicologo_id, mensaje }) => {
        // Guardar el mensaje en la base de datos (por ejemplo, en la tabla Chats)
        const nuevoMensaje = {
            paciente_id,
            psicologo_id,
            mensaje,
            fecha: new Date(),
        };
        chats.push(nuevoMensaje); // En una implementación real, aquí harías una consulta a la BD

        // Emitir el mensaje a los psicólogos y pacientes involucrados
        io.emit('chat', nuevoMensaje);
    });

    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
    });
});

server.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
