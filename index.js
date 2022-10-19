
let planet_stars = document.getElementById('planetStars');
let human = document.getElementById('human');
let header = document.querySelector('header');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    planet_stars.style.top = value * 1.05 + 'px';
    human.style.top = value * 0 + 'px';
    header.style.top = value * 0.8 + 'px';

})