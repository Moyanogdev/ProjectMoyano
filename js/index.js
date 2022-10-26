// HOME EFECTS

let planet_stars = document.getElementById('planetStars');
let human = document.getElementById('human');
let header = document.querySelector('header');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    planet_stars.style.top = value * 1.05 + 'px';
    human.style.top = value * 0 + 'px';
    header.style.top = value * 0.8 + 'px';

})

// ABOUT SECTION EFECTS

let contentLinks = document.getElementsByClassName("contentLinks");
let contContents = document.getElementsByClassName("contContents");

function openCont(contname){
    for(contentLink of contentLinks){
        contentLink.classList.remove("active-link");
    }
    for(contContent of contContents){
        contContent.classList.remove("active-cont");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(contname).classList.add("active-cont");
}