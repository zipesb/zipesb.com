function delayText(visibility, target, delay) {
    setTimeout(function(){
        document.getElementById(target).style.visibility = visibility;
    },delay)
}