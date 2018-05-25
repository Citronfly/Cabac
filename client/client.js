$(function () {
var socket = io();
var INITIAL_USERNAME = "Bob";
var INPUT_SELECTOR = "#m";
var USER_SELECTOR = '#user';
$(USER_SELECTOR).val(INITIAL_USERNAME);
$('form').submit(function(){
  socket.emit('chat message',{message: $(INPUT_SELECTOR).val(), user: $(USER_SELECTOR).val()});
  $(INPUT_SELECTOR).val('');
  return false;
  if(INPUT_SELECTOR == "ratm"){
INPUT_SELECTOR = "link";
  }
});
socket.on('chat message', function(msg){
  var avatar = '<img src="https://api.adorable.io/avatars/15/' + msg.user + '.png" class = "avatar">';
 $('#messages').append($('<li>').html(avatar+ ' ' + msg.user + ' ' + 'says' + ':' + ' ' + msg.message));
});
});
