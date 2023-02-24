import { Server } from "socket.io";
import { createServer } from "http";

const http = createServer();
const io = new Server(http);

const stream = (req, res) => {
    http.listen(3001)
    io.on("connection", (socket) => {
        console.log(`User Connected :${ socket.id}`);

        console.log(JSON.stringify(socket.rooms))
        socket.on('join', (roomName) => {
            console.log('JOIN: '+roomName)
            socket.join(roomName);
            socket.emit('created')
        });
    });

    http.close();
}

export default stream;
