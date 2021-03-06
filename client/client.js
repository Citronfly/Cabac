$(function () {
var socket = io();
var INITIAL_USERNAME = "Bob";
var INPUT_SELECTOR = "#m";
var USER_SELECTOR = '#user';
$(USER_SELECTOR).val(INITIAL_USERNAME);
$('form').submit(function(){
  var message = escapeHtml($(INPUT_SELECTOR).val());

  function escapeHtml(unsafe) {
      return unsafe
           .replace(/&/g, "&amp;")
           .replace(/</g, "&lt;")
           .replace(/>/g, "&gt;")
           .replace(/"/g, "&quot;")
           .replace(/'/g, "&#039;");
   }


  function replaceMessage(search, replacement){
    message = message.split(search).join(replacement);
  }

  replaceMessage("$P", "🤑");
  replaceMessage("(:", "🙃");
  replaceMessage(";P", "😜");
  replaceMessage(":P", "😛");
  replaceMessage(":#", "🤬");
  replaceMessage("T_T", "😭");
  replaceMessage(";)", "😉");
  replaceMessage("XD", "😝");
  replaceMessage("</3", "💔");
  replaceMessage("100%", "💯");
  replaceMessage("&lt;3", "❤️");
  replaceMessage(":)", "😃");
  replaceMessage("ratm", '<a href="https://www.youtube.com/watch?v=wauzrPn0cfg">ratm</a>');
  replaceMessage("Ratm", '<a href="https://www.youtube.com/watch?v=wauzrPn0cfg">Ratm</a>');
  replaceMessage("RATM", '<a href="https://www.youtube.com/watch?v=wauzrPn0cfg">RATM</a>');

  $('html').animate(
        {
          scrollTop: $(document).height(),
        },
        1500
      )


  socket.emit('chat message',{message: message, user: $(USER_SELECTOR).val()});
  $(INPUT_SELECTOR).val('');
  return false;


});
socket.on('chat message', function(msg){
  var avatar = '<img src="https://api.adorable.io/avatars/15/' + msg.user + '.png" class = "avatar">';
 $('#messages').append($('<li>').html(avatar+ ' ' + msg.user + ' ' + 'says' + ':' + ' ' + msg.message));
});
});
