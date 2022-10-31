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
    sideMenu.style.right = "-180px";
}

// USER SECTION EFECTS

let userContent = document.getElementById("userContent");

function openContent(){
    userContent.classList.remove("hideInfo");
}

function closeContent(){
    userContent.classList.add("hideInfo");
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

// SMOOTH SCROLL

let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

// CONTACT FORM 

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwSrrMHBw45Ncb10N8p_-EMczKfAghzxY6tzebTz4MxFa9ZkmSp1mNU3h4sw4HqXKWKEg/exec'
  const form = document.forms['submit-to-google-sheet']
  const msgConfirm = document.getElementById("msgConfirm")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msgConfirm.innerHTML = "Message sent succesfully"
        setTimeout(function(){
            msgConfirm.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

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


    sr.reveal(`.colAbout1`, {origin: 'left'})
    sr.reveal(`.colAbout2`, {origin: 'right'})
    sr.reveal(`.tittleServices`, {delay:150})
    sr.reveal(`.containerServices`, {origin: 'left'})
    sr.reveal(`.sectionWorks`, {interval:100})
    sr.reveal(`.tittleContact`, {delay:150})
    sr.reveal(`.imgContact`, {origin: 'left'})
    sr.reveal(`.contactForm`, {origin: 'right'})
