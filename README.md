# Run local:

 "node server/index.js"

# deploy online:

  "npm run deploy"

# Change name:

1. click on the box with the text "Bob"
2. delete Bob
3. write your name in the box

# How to write a messege

1. click on the big box in the buttom
2. write your messenge
3. press enter or click on the box with the text "send"

#Concept Names

    Cabac

## Qs:

- what is the primitive data types in JavaScript? What primitive datatypes do we use in the chat application?
- what is a function and what do you use it for? Do we use any in the chat application? Should we use more?
- what is the JavaScript standard library? What do we use from it?
- what is `jQuery`? What do we use `jQuery` for in the chat application?
- can we remove the need for `jQuery` by using the standard DOM library?

## As:

- a  primitive data type is all except objects define values, we use strings and numbers i cant find any of the other in the code
- a function is all things that makes the computer do something, yes we does, that depents on what we need to do
- the standart library is all the build in fuctions
- `jQuery` is a library
```javascript
$('#bruger').val(bruger);
$('form').submit(function(){
  socket.emit('chat message',{message: $('#m').val(), bruger: $('#bruger').val()});
  $('#m').val('');
```
- yes but it takes way longer time to use the standard library and you need write more
