function retheme() {
    var element = document.body;
    var navLinks = document.getElementsByClassName("nav-link");
    var navbarIconToggler = document.getElementsByClassName("navbar-toggler")[0];
    
    element.classList.toggle("dark-mode");

    for (i=0; i < navLinks.length; i++) {
      navLinks[i].classList.toggle("darkModeLightProps");
      if(getComputedStyle(navLinks[i]).color === "rgba(0, 0, 0, 0.5)") {
        navLinks[i].style.color = "white";
        navbarIconToggler.style.backgroundColor = "rgb(255, 255, 255,0.6)";
      }
      else {
        navLinks[i].style.color = "rgba(0, 0, 0, 0.5)";
        navbarIconToggler.style.backgroundColor = "rgb(255, 255, 255)";
      }
    }
  }
