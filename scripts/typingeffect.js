var i = 0;
var speed = 100;

function typingEffect(text, target) {
    if (i < text.length) {
    document.getElementById(target).innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, speed, text, target);
    }
}