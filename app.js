const app = require('express')();
const http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('User connected')
})


PORT = process.env.PORT | 3000
app.listen(PORT, () => {
    console.log('Server Starterd');
})