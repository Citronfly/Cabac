$(function () {
var socket = io();
var bruger = "Bob";
//Math.random();
$('#bruger').val(bruger);
$('form').submit(function(){
  socket.emit('chat message',{message: $('#m').val(), bruger: $('#bruger').val()});
  $('#m').val('');
  return false;
});
socket.on('chat message', function(msg){
  var avatar = '<img src="https://api.adorable.io/avatars/15/' + msg.bruger + '.png" style="width: 15px; height: 15px; border-radius: 50%;">';
 $('#messages').append($('<li>').html(avatar+ ' ' + msg.bruger + ' ' + 'says' + ':' + ' ' + msg.message));
});
});
