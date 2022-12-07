// HOME EFECTS

let planet_stars = document.getElementById('planetStars');
let human = document.getElementById('human');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    planet_stars.style.top = value * 1.05 + 'px';
    human.style.top = value * 0 + 'px';

})

// NAVIGATION BAR EFECTS | RESPONSIVE

let sideMenu = document.getElementById("sideMenu");

function openmenu(){
    sideMenu.style.right = "0";
}

function closemenu(){
    sideMenu.style.right = "-200px";
}

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


// SKILLS EFECTS

function skillsEfects(){
    let skills = document.getElementById("sectionSkills");
    let skillsBar = window.innerHeight - skills.getBoundingClientRect().top;
    if(skillsBar >= 300){
        let skill = document.getElementsByClassName("progressBar");
        skill[0].classList.add("html");
        skill[1].classList.add("css");
        skill[2].classList.add("sass");
        skill[3].classList.add("bootstrap");
        skill[4].classList.add("javascript");
        skill[5].classList.add("react");
    }
}

window.onscroll = function(){
    skillsEfects();
}

// SMOOTH SCROLL

let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

// SERVICES MODAL SECTION (INCOMPLETE)

const openModal = document.querySelector('.openModal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modalClose')


openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modalShow')
})


closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modalShow')
})

// CONTACT FORM 

    const btn = document.getElementById('button');
    const msgConfirm = document.getElementById("msgConfirm");

    document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = ' Sending... ';

    const serviceID = 'default_service';
    const templateID = 'template_51an4h7';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            msgConfirm.innerHTML = "Message sent succesfully"
            setTimeout(function(){
                msgConfirm.innerHTML = ""
            },5000)
            form.reset()
        }, (err) => {
            btn.value = 'Send Message';
            alert(JSON.stringify(err));
            });
    });

  // SCROLL UP EFECTS

    const scrollUp = () => {
        const scrollUp = document.getElementById('scrollUp')
        this.scrollY >= 1500 ? scrollUp.classList.add('showScroll')
                            : scrollUp.classList.remove('showScroll')
    }
    
    window.addEventListener('scroll', scrollUp);

    // SCROLL REVEAL EFECTS

    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 250,
    });

    sr.reveal(`.userImg`, {origin: 'left'})
    sr.reveal(`.userInfo`, {origin: 'right'})
    sr.reveal(`.colAbout1`, {origin: 'left'})
    sr.reveal(`.colAbout2`, {origin: 'right'})
    sr.reveal(`#sectionSkills`)
    sr.reveal(`.tittleServices`, {delay:150})
    sr.reveal(`.containerServices`, {origin: 'left'})
    sr.reveal(`.sectionWorks`, {interval:100})
    sr.reveal(`.tittleContact`, {delay:150})
    sr.reveal(`.imgContact`, {origin: 'left'})
    sr.reveal(`.contactForm`, {origin: 'right'})
