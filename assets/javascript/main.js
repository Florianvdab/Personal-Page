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
        "<img src='assets/img/self2019.jpg'></img>"
}

function socialmedia() {
    document.getElementById("main").innerHTML = '<p class="title is-size-2">Social Media</p >' +
        "<p class='subtitle is-size-4'>Feel free to contact me! I'm interested in anything IT - Game related.</p>" +
        '<div><a href="https://www.facebook.com/florian.vandenabeele.35" target="_blank"><svg class="facebook"></svg></a>' +
        '<a href="https://www.linkedin.com/in/florian-vandenabeele-943275197/" target="_blank"><svg class="linkedin"></svg></a>'+
        '<a href="mailto:florian.vdab@outlook.com" target="_blank"><svg class="mail"></svg></a>'+
        '<a href="https://github.com/Florianvdab" target="_blank"><svg class="github"></svg></a>' +
        '<a href="https://www.instagram.com/florian.vdab/" target="_blank"><svg class="instagram"></svg></a>' +
        '<a href="https://steamcommunity.com/id/WifixOfficial/" target="_blank"><svg class="steam"></svg></a>' +
        '</div>';

}

//mailto:someone@example.com


function resume() {
    document.getElementById("main").innerHTML = '<p class="title is-size-2">Resume</p >' +
        '<p class="title is-size-4">Education</p >' +
        '<p class="subtitle is-size-5"><span class="has-text-weight-bold">Software & Systems Engineer </span> | Howest Bruges | 2017 - Present</p>' +
        '<p class="subtitle is-size-5"><span class="has-text-weight-bold">Informaticabeheer </span> | Burgerschool Roeselare | 2009 - 2017</p>' +
        '</br>' +
        '<p class="title is-size-4">Work Experience</p>' +
        '<p class="subtitle is-size-5"><span class="has-text-weight-bold">IAT-Aquatic Nature - 6 Week student employment </span> | Roeselare | 2019</p>'+
        '<p class="subtitle is-size-5"><span class="has-text-weight-bold">IT Partner - 2 Week internship </span> | Moorslede | 2016</p>';
}


function project() {
    document.getElementById("main").innerHTML = "<p class='title is-size-2'>Projects</p >" +
        '<a target="_blank" href="https://ict-week-group6.herokuapp.com/" class="subtitle is-size-5"><span class="has-text-weight-bold">Wild Animals Tracking: An IoT Solution </span> | EPHEC | 2019</a>' +
        "<p class='subtitle is-size-5'>An IoT solution to track wild animals with an IoT Device over the LoRaWAN network.</p>" +
        "</br>" +
        '<a target="_blank" href="http://fvdab.azurewebsites.net/" class="subtitle is-size-5"><span class="has-text-weight-bold">Website about my love for music </span>| Burgerschool Roeselare | 2017</a>' +
        "<p class='subtitle is-size-5'>This website was made for a school assignment. It's made via Bootstrap, the HTML, CSS & JS Framework.</p>" +
        "</br>" +
        '<a target="_blank" href="http://aquatic-nature.be/" class="subtitle is-size-5"><span class="has-text-weight-bold">Aquatic-Nature </span>| 2019</a>' +
        "<p class='subtitle is-size-5'>CMS - WordPress with WooCommerce, Yoast SEO  and self-made Javascript/Jquery.</p>" +
        "</br>" +
        '<a target="_blank" href="http://www.regiseyeonnature.com/" class="subtitle is-size-5"><span class="has-text-weight-bold"> Regiseyeonnature </span>| 2019</a>' +
        "<p class='subtitle is-size-5'>This blog was created for Reginald Popelier, founder of IAT and asked me to create his website after my deployment at IAT.</p>"
        ;

}
