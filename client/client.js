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


  function replaceWithEmoji(input,output){
    message = message.replace(input, output);
  }

replaceWithEmoji("$P", "🤑");
replaceWithEmoji("(:", "🙃");
replaceWithEmoji(";P", "😜");
replaceWithEmoji(":P", "😛");
replaceWithEmoji(":#", "🤬");
replaceWithEmoji("T_T", "😭");
replaceWithEmoji(";)", "😉");
replaceWithEmoji("XD", "😝");
replaceWithEmoji("</3", "💔");
replaceWithEmoji("100%", "💯");
replaceWithEmoji("<3", "❤️");
replaceWithEmoji(":)", "😃");
replaceWithEmoji("ratm", '<a href="https://www.youtube.com/watch?v=wauzrPn0cfg">ratm</a>');

  socket.emit('chat message',{message: message, user: $(USER_SELECTOR).val()});
  $(INPUT_SELECTOR).val('');
  return false;


});
socket.on('chat message', function(msg){
  var avatar = '<img src="https://api.adorable.io/avatars/15/' + msg.user + '.png" class = "avatar">';
 $('#messages').append($('<li>').html(avatar+ ' ' + msg.user + ' ' + 'says' + ':' + ' ' + msg.message));
});
});
