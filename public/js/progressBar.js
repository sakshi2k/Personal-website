// $('#btn').click(
function animateBars() {

    var timerId, percent;
  
    // reset progress bar
    percent = 0;
    $('#btn').attr('disabled', true);
    $('#progress').css('width', '10px').addClass('progress-bar-animated active');
    $('#progress').html('<span class="spinner-border spinner-border-sm ml-auto"></span>');
  
        timerId = setInterval(function() {
    
        // increment progress bar
        percent += 1;
        $('#progress').css('width', percent + '%');
    
        //   if (percent >= 100) {
        //     clearInterval(timerId);
        //     $('#btn').attr('disabled', false);
        //     $('#progress').removeClass('progress-bar-animated active').html('Complete');
        //   }
        }, 10);
  };

  animateBars();










// var $alert = $('.alert');
// var $progressBar = $('.progress');

// var progress = 0;      // initial value of your progress bar
// var timeout = 10;      // number of milliseconds between each frame
// var increment = .5;    // increment for each frame
// var maxprogress = 110; // when to leave stop running the animation

// function animate() {
//     setTimeout(function () {
//         progress += increment;
//         if(progress < maxprogress) {
//             $progressBar.attr('value', progress);
//             animate();
//         } else {
//             $progressBar.css('display', 'none');
//             $alert.css('display', 'block');
//         }
//     }, timeout);
// };
// animate();
