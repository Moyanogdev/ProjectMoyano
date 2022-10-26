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
let contContent = document.getElementsByClassName("contContents");

function openCont(contname){
    for(contentLinks of contentLinks){
        contentLinks.classList.remove("active-link");
    }
    for(contContents of contContents){
        contContents.classList.remove("active-cont");
    }
    event.currentTarget.classList.add("active-link");
}