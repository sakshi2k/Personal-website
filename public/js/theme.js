function retheme() {
    var element = document.body;
    var faIcons = document.getElementsByClassName("fa");
    var navLinks = document.getElementsByClassName("nav-link");
    var navbarIconToggler = document.getElementsByClassName("navbar-toggler")[0];
    
    element.classList.toggle("dark-mode");

    for (var i=0; i < navLinks.length; i++) {
      navLinks[i].classList.toggle("darkModeLightProps");
      if(getComputedStyle(navLinks[i]).color === "rgba(0, 0, 0, 0.5)") {
        navLinks[i].style.color = "white";
        navbarIconToggler.style.backgroundColor = "rgb(13, 140, 160)";
      }
      else {
        navLinks[i].style.color = "rgba(0, 0, 0, 0.5)";
        navbarIconToggler.style.backgroundColor = "rgb(255, 255, 255)";
      }
    }

    for (var i=11; i < faIcons.length; i++) {
      if(faIcons[i].style.color !== "white"){
        faIcons[i].style.color = "white";
      }
      else
      faIcons[i].style.color ="rgb(0, 0, 0)";
  }
}
