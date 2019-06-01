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
    document.getElementById("projects").addEventListener("click", project);
    document.getElementById("resume").addEventListener("click", resume);
}

function home() {
    document.getElementById("main").innerHTML = '<p class="title is-size-2">Florian Vandenabeele</p >' +
        '<p class="subtitle is-size-4">Student Software & System Engineer @ Howest Bruges</p>' +
        "<img src='assets/img/self.jpg'></img>"
}

function socialmedia() {
    document.getElementById("main").innerHTML = '<p class="title is-size-2">Social Media</p >' +
        "<p class='subtitle is-size-4'>Feel free to contact me! I'm interested in anything IT - Game related.</p>" +
        '<div><a href="https://www.facebook.com/florian.vandenabeele.35" target="_blank"><svg class="facebook"></svg></a>' +
        '<a href="https://github.com/Florianvdab" target="_blank"><svg class="github"></svg></a>' +
        '<a href="https://www.instagram.com/florian.vdab/" target="_blank"><svg class="instagram"></svg></a>' +
        '<a href="https://steamcommunity.com/id/WifixOfficial/" target="_blank"><svg class="steam"></svg></a>' +
        '</div>';

}


function resume() {
    document.getElementById("main").innerHTML = '<p class="title is-size-2">Resume</p >' +
        '<p class="title is-size-4">Education</p >' +
        '<p class="subtitle is-size-5"><span class="has-text-weight-bold">Software & Systems Engineer </span> | Howest Bruges | 2017 - Present</p>' +
        '<p class="subtitle is-size-5"><span class="has-text-weight-bold">Informaticabeheer </span> | Burgerschool Roeselare | 2009 - 2017</p>' +
        '</br>' +
        '<p class="title is-size-4">Work Experience</p>' +
        '<p class="subtitle is-size-5"><span class="has-text-weight-bold">IT Partner - 2 Week internship </span> | Moorslede | 2016</p>';
}


function project() {
    document.getElementById("main").innerHTML = "<p class='title is-size-2'>Projects</p >" +
        "<p class='subtitle is-size-4'>These are some of the projects I've worked on.</p>" +
        "<p class='subtitle is-size-5 is-italic'>To be added.</p>";
}
