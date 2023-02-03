function delayText(visibility, target, delay) {
    setTimeout(function(){
        console.log(document.getElementById(target).style.visibility)
        document.getElementById(target).style.visibility = visibility;
    },delay)
}