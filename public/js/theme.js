function retheme() {
    var element = document.body;
    var navLinks = document.getElementsByClassName("nav-link");
    var navBar = document.getElementsByClassName("navbar");
    var faLink = document.getElementsByClassName("fa");
    var scrollToTop = document.querySelector(".scrollToTop");
    
    element.classList.toggle("dark-mode");

    for (i=0; i < navLinks.length; i++) {
      navLinks[i].classList.toggle("darkModeLightProps");
    }

    for (i=0; i < faLink.length; i++) {
      faLink[i].classList.toggle("darkModeLightProps")
    }

    navBar[0].classList.toggle("navbar-dark");

    scrollToTop.classList.toggle("darkModeScrollToTop");    
  }
