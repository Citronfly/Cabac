$(function () {
var socket = io();
var INITIAL_USERNAME = "Bob";
$('#user').val(INITIAL_USERNAME);
$('form').submit(function(){
  socket.emit('chat message',{message: $('#m').val(), user: $('#user').val()});
  $('#m').val('');
  return false;
});
socket.on('chat message', function(msg){
  var avatar = '<img src="https://api.adorable.io/avatars/15/' + msg.user + '.png" class = "avatar">';
 $('#messages').append($('<li>').html(avatar+ ' ' + msg.user + ' ' + 'says' + ':' + ' ' + msg.message));
});
});
