function retheme() {
  var element = document.body;
  var faIcons = document.getElementsByClassName("fa");
  var navLinks = document.getElementsByClassName("nav-link");
  var cardTitles = document.getElementsByClassName("card-title");
  var navbarIconToggler = document.getElementsByClassName("navbar-toggler")[0];

  element.classList.toggle("dark-mode");

  // Chaning navbar links coloring theme
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.toggle("darkModeLightProps");
    if (getComputedStyle(navLinks[i]).color === "rgba(0, 0, 0, 0.5)") {
      navLinks[i].style.color = "white";
      navbarIconToggler.style.backgroundColor = "rgb(13, 140, 160)";
    }
    else {
      navLinks[i].style.color = "rgba(0, 0, 0, 0.5)";
      navbarIconToggler.style.backgroundColor = "rgb(255, 255, 255)";
    }
  }

  // Chaning cardTitles (of achievments) coloring theme
  for (let i = 0; i < cardTitles.length; i++) {
    navLinks[i].classList.toggle("darkModeLightProps");
    if (getComputedStyle(navLinks[i]).color === "rgba(0, 0, 0, 0.5)") {
      cardTitles[i].style.color = "grey";
    }
    else {
      cardTitles[i].style.color = "rgb(20, 91, 94)";
    }
  }

  for (let i = 12; i < faIcons.length; i++) {
    if (faIcons[i].style.color !== "white") {
      faIcons[i].style.color = "white";
    }
    else
      faIcons[i].style.color = "rgb(0, 0, 0)";
  }
}



// Omlet toggle
if (location.pathname === '/') {
  var select = function (s) {
    return document.querySelector(s);
  },
    selectAll = function (s) {
      return document.querySelectorAll(s);
    },
    animationWindow = select('#animationWindow'),
    animData = {
      wrapper: animationWindow,
      animType: 'svg',
      loop: false,
      prerender: false,
      autoplay: false,
      path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/egg_flip.json'
    }, anim;

  anim = bodymovin.loadAnimation(animData);
  anim.addEventListener('DOMLoaded', onDOMLoaded);
  anim.setSpeed(15);

  function onDOMLoaded(e) {

    animationWindow.onclick = function (e) {
      if (anim.currentFrame > 0) {
        anim.playSegments([anim.currentFrame, 0], true);
        TweenMax.to('.eggGroup', 1, {
          x: 0,
          ease: Elastic.easeOut.config(0.9, 0.38)
        })
      } else {
        TweenMax.to('.eggGroup', 1.4, {
          x: 73,
          ease: Elastic.easeOut.config(0.9, 0.38)
        })
        anim.playSegments([anim.currentFrame, 300], true)
      }
      retheme();
    }
  }
}
