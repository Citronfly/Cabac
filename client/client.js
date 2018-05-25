$(function () {
var socket = io();
var INITIAL_USERNAME = "Bob";
var INPUT_SELECTOR = "#m";
var USER_SELECTOR = '#user';
$(USER_SELECTOR).val(INITIAL_USERNAME);
$('form').submit(function(){
  var message = $(INPUT_SELECTOR).val();
  if(message == "ratm"){
    message = '<a href="https://www.youtube.com/watch?v=wauzrPn0cfg">ratm</a>';
  }
  if(message == ":)"){
    message = "😃";
  }
  if(message == "<3"){
    message = "❤️";
  }
  if(message == "100%"){
    message = "💯";
  }
  if(message == "</3"){
    message = "💔";
  }
  if(message == "XD"){
    message = "😝";
  }
  if(message == ";)"){
    message = "😉";
  }
  if(message == "T_T"){
    message = "😭";
  }
  if(message == ":#"){
    message = "🤬";
  }
  if(message == ":P"){
    message = "😛";
  }
  if(message == ";P"){
    message = "😜";
  }
  if(message == "(:"){
    message = "🙃";
  }
  if(message == "$P"){
    message = "🤑";
  }

  socket.emit('chat message',{message: message, user: $(USER_SELECTOR).val()});
  $(INPUT_SELECTOR).val('');
  return false;


});
socket.on('chat message', function(msg){
  var avatar = '<img src="https://api.adorable.io/avatars/15/' + msg.user + '.png" class = "avatar">';
 $('#messages').append($('<li>').html(avatar+ ' ' + msg.user + ' ' + 'says' + ':' + ' ' + msg.message));
});
});
