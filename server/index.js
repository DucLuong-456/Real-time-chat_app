const express = require('express')
const app = express()
const cors = require('cors')
const {Server} = require('socket.io')
const http = require('http')

app.use(cors())
const server =http.createServer(app)
const io = new Server(server,{
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET","POST"],
    },

});

io.on("connection", (socket)=>{
    console.log(socket.id);

    socket.on("disconnect", ()=>{
        console.log("User Disconnnect "+socket.id)
    });
})

app.use('/', (req,res)=>{
    res.send("test")
})

const PORT =3001
server.listen(PORT,()=>{
    console.log("App listening on port: "+PORT)
} )