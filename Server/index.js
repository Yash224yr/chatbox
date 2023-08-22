// const express = require("express");
// const app = express();
// const http = require("http");
// const cors = require("cors");
// const { Server } = require("socket.io");
// app.use(cors());

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"],
//   },
// });

// io.on("connection", (socket) => {
//   console.log(`User Connected: ${socket.id}`);

//   socket.on("join_room", (data) => {
//     socket.join(data);
//     console.log(`User with ID: ${socket.id} joined room: ${data}`);
//   });

//   socket.on("send_message", (data) => {
//     console.log("vinay" , data)
//     socket.to(data.room).emit("receive_message", data);
//   });

//   socket.on("disconnect", () => {
//     console.log("User Disconnected", socket.id);
//   });
// });

// server.listen(3001, () => {
//   console.log("SERVER RUNNING");
// });










const express = require("express")
const app = express()
const http = require("http")
const cors = require("cors")
const {Server} = require("socket.io")
app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors : {
        origin: "http://localhost:3000",
        methods:["GET" , "POST"]
    },
})


io.on("connection" , (socket)=>{
    console.log("User Connected" ,socket.id)

    socket.on("join_room" , (data)=>{
        console.log("find data " , data)
        socket.join(data);
        console.log(`user with ID: ${socket.id} join the room :${data}`)
    })

    socket.on("send_message" , (data)=>{
        console.log(data,"vinay ")
        socket.to(data.room).emit("receive_message",data)
    })

    socket.on("disconnect" ,()=>{
        console.log("User DIsconnected" , socket.id )
    })
})



server.listen(3001,()=>{
    console.log("SERVER IS RUNNING")
})











// const createServer = require("http");
// const { Server } = require("socket.io");
// const { v4: uuidv4 } = require("uuid");

// const httpServer = createServer();
// const io = new Server(httpServer, {
//   cors: {
//     origin: "http://localhost:3006",
//     methods: ["GET", "POST"]
//   }
// });

// io.use((socket, next) => {
//   const username = socket.handshake.auth.username;
//   if (!username) {
//     return next(new Error("Invalid username"));
//   }

//   socket.username = username;
//   socket.userId = uuidv4();
//   next();
// });

// io.on("connection", (socket) => {
//   socket.emit("session", { userId: socket.userId, username: socket.username });
// });

// httpServer.listen(process.env.PORT || 4000, () => {
//   console.log("Listening on port ...");
// });


