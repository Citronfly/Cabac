var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);

app.get('/', function(req, res){
  var filePath = path.join(__dirname, "../client/index.html");
  res.sendFile(filePath);
});

app.get('/client.js', function(req, res){
  var filePath = path.join(__dirname, "../client/client.js");
  res.sendFile(filePath);
});

app.get('/client.css', function(req, res){
  var filePath = path.join(__dirname, "../client/client.css");
  res.sendFile(filePath);
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log(msg);
  });
  socket.on('disconnect', function(){
  console.log('user disconnected');
});
});

io.emit('some event', { for: 'everyone' });

http.listen(3000, function(){
  console.log('listening on *:3000');
});
