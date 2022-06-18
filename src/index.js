import { Server as websocketServer } from 'socket.io'
import http from 'http'
import app from './app'
import sockets from './sockets'
import { connecDB } from './db'


require('dotenv').config()

const PORT = process.env.API_PORT;


connecDB();
const server = http.createServer(app)
const httpServer = server.listen(PORT)
console.log(`Server is runing on port: ${PORT} 
Site is available on http://localhost:${PORT}`);

const io = new websocketServer(httpServer);
sockets(io);


