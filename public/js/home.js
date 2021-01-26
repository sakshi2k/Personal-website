var demo = document.getElementById('demo');

        var typewriter = new Typewriter(demo, {
          loop: true
        });

        typewriter
          .pauseFor(250)
          .typeString('I am a ')
          .typeString('Full Stack Web Developer')
          .pauseFor(800)
          .deleteChars(23)
          .typeString('reelancer')
          .pauseFor(1000)
          .deleteChars(10)
          .typeString('Machine Learning Enthusiast')
          .pauseFor(1000)
          .deleteChars(27)
          .typeString('UI/UX Developer')
          // .typeString('Graphics Designer')
          .pauseFor(1000)
          .deleteChars(15)
          .start();

        retheme();
        // Animation on scrolling.
        window.onscroll = function () { myFunction() };

        var navbar = document.getElementById("navbar-header");
        var scrollToTop = document.querySelector(".scrollToTop");

        function myFunction() {
          if (window.pageYOffset > 1) {
            if ($(this).scrollTop() > 1) {
              navbar.classList.add("sticky");
              scrollToTop.classList.remove("fadeIn");
              scrollToTop.classList.add("fadeOut");
            }
          } else {
            navbar.classList.remove("sticky");
            scrollToTop.classList.remove("fadeOut");
            scrollToTop.classList.add("fadeIn");
          }

          $('.scrollToTop').click(function () {
            $("html, body").animate({ scrollTop: (0) }, 1000, 'easeInOutQuad')
          });
        }
