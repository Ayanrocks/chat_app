const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);    });
});


PORT = process.env.PORT | 3000
http.listen(PORT, () => {
    console.log('Server Starterd');
});