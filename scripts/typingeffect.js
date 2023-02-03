var i = 0;
var dirCommand = document.getElementById("dirCommand");
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typingeffect").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}