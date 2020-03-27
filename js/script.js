$( document ).ready(function() {
  function typeEffect(element, speed) {
    var text = element.innerHTML;
    element.innerHTML = "";
    
    var i = 0;
    var timer = setInterval(function() {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }
  
  
  // application
  var speed = 75;
  var h1 = document.querySelector('h1');
  
  // type affect to header
  typeEffect(h1, speed);
  console.log( "ready!" );
});



