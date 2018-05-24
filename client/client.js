$(function () {
var socket = io();
var INITIAL_USERNAME = "Bob";
var AVATAR_SIZE = 15;
$('#user').val(user);
$('form').submit(function(){
  socket.emit('chat message',{message: $('#m').val(), user: $('#user').val()});
  $('#m').val('');
  return false;
});
socket.on('chat message', function(msg){
  var avatar = '<img src="https://api.adorable.io/avatars/15/' + msg.user + '.png" style="width: AVATAR_SIZEpx; height: AVATAR_SIZEpx; border-radius: 50%;">';
 $('#messages').append($('<li>').html(avatar+ ' ' + msg.user + ' ' + 'says' + ':' + ' ' + msg.message));
});
});
