const express = require ('express');
const socketio = require ('socket.io');
const http = require ('http');

const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app);
const io = socketio(server); //back-end socketio has many methods

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));