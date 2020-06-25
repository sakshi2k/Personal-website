function retheme() {
    var element = document.body;
    var navLinks = document.getElementsByClassName("nav-link");
    // var navLinks = document.getElementsByClassName("");
    
    element.classList.toggle("dark-mode");
    navLinks.classList.toggle("darkModeLightProps");
    
    // var navLinks = document.querySelectorAll(".nav-link");
    // var navLinks = document.querySelectorAll("li");
  }
