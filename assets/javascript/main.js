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

    document.getElementById("home").addEventListener("click", home);
    document.getElementById("socialmedia").addEventListener("click", socialmedia);
    document.getElementById("contact").addEventListener("click", contact);
    document.getElementById("resume").addEventListener("click", resume);
}

function home() {
    document.getElementById("main").innerHTML = '<p class="title is-size-2">Florian Vandenabeele</p >' +
        '<p class="subtitle is-size-4">Student Software & System Engineer @ Howest Brugge</p>'
}

function socialmedia() {
    document.getElementById("main").innerHTML = '<p class="title is-size-2">Social Media</p >' +
        '<p class="subtitle is-size-4">Feel free to contact me!</p>'+
        '<div><a href="https://www.facebook.com/florian.vandenabeele.35" target="_blank"><svg class="facebook"></svg></a>' +
        '<a href="https://github.com/Florianvdab" target="_blank"><svg class="github"></svg></a>' +
        '<a href="https://www.instagram.com/florian.vdab/" target="_blank"><svg class="instagram"></svg></a>' +
        '<a href="https://steamcommunity.com/id/WifixOfficial/" target="_blank"><svg class="steam"></svg></a>'+
        '</div>'

}

function contact() {
}

function resume() {
}