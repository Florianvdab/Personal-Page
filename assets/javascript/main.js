window.addEventListener("DOMContentLoaded", init)
function init() {
    for (let i = 0; i < document.querySelectorAll("li,a").length; i++) {
        console.log('working...')
        document.querySelectorAll("li,a")[i].addEventListener("click", activate)
    }
    function activate() {
        document.getElementsByClassName("is-active")[0].className = "";
        this.className = "is-active";
    }

    // document.getElementById("home").addEventListener("click",)
}

function home(){

}

function socialmedia(){
    
}