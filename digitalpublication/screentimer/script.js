const video = document.getElementById('myVideo');

// Make sure there's no delay when the video ends by restarting immediately
video.addEventListener('ended', () => {
    video.currentTime = 0;
    video.play();
});

document.addEventListener('DOMContentLoaded', () => {
    const videoWrapper = document.querySelector('.video-wrapper');
    const toggleButton = document.getElementById('toggle-button');

    toggleButton.addEventListener('click', () => {
        videoWrapper.classList.toggle('hidden');
    });
});


function triggerBlurEffect() {
    // Clear any previous animation by removing the class
    document.body.style.animation = 'none';
    
    // Force a reflow to reset the animation
    void document.body.offsetWidth;

    // Add the class back to restart the animation
    document.body.style.animation = 'gradualBlur 50s forwards';
}

// Detect mouse movement on the whole document
document.addEventListener('mousemove', function() {
    triggerBlurEffect(); // Restart blur effect when mouse moves
});

// Initially start the blur effect on page load
triggerBlurEffect();

$(document).ready(function(){
    var countS = 20;
    $("#session").html(countS);
    var countB = 5;
    $("#break").html(countB);
    var pos = "pomodoro";
    var countLama;
    var posLama;
    var count;
    var alarmSound = new Audio('alarm.mp3'); // Add your audio file here
    alarmSound.volume = 1.0; // Set to full volume
    
    // $("#stats").html(pos);

    $('#start').on('click', function() {
        alarmSound.play(); // Play the sound once to "unlock" it for autoplay
        alarmSound.pause(); // Pause it immediately
        alarmSound.currentTime = 0; // Reset the playback time
        // Continue with timer logic
        clock.start();
    });
    
    var clock = $(".timer").FlipClock(0, {
      countdown: true,
      clockFace: 'MinuteCounter',
      autoStart: false,
      callbacks: {
        interval: function(){
          if (clock.getTime() == 0){
            if (pos == "session"){
              alarmSound.play(); // Play sound when session ends
              clock.setTime(countB*60);
              clock.start();
              pos = "break";
              $("#stats").html(pos);
            } else if (pos == "break"){
              alarmSound.play(); // Play sound when break ends
              clock.setTime(countS*60);
              clock.start();
              pos = "session";
              $("#stats").html(pos);
            }
          }        
        }
      }
    });
    
    // SESSION
    $("#sessInc").on("click", function(){
      if ($("#session").html() > 0){
        countS = parseInt($("#session").html());
        countS+=1;
        $("#session").html(countS);
      }
    });
    
    $("#sessDec").on("click", function(){
      if ($("#session").html() > 1){
        countS = parseInt($("#session").html());
        countS-=1;
        $("#session").html(countS);
      }
    });
    
    // BREAK
    $("#breakInc").on("click", function(){
      if ($("#break").html() > 0){
        countB = parseInt($("#break").html());
        countB+=1;
        $("#break").html(countB);
      }    
    });
    
    $("#breakDec").on("click", function(){
      if ($("#break").html() > 1){
        countB = parseInt($("#break").html());
        countB-=1;
        $("#break").html(countB);
      }
    });
    
    // Start Timer
    $("#start").on("click", function(){
      if (count != countS || clock.getTime()==0){
        clock.setTime(countS*60);
        pos="session";
        $("#stats").html(pos);
      } else {
        pos = posLama;
        $("#stats").html(pos);
      }
      count = countS;    
      clock.start();    
    });
    
    // Stop Timer
    $("#stop").on("click", function(){
      clock.stop();
      countLama = clock.getTime();
      posLama = $("#stats").html();
    });
    
    // Clear Timer
    $("#clear").on("click", function(){
      clock.stop();
      pos = "pomodoro";
      $("#stats").html(pos);
      clock.setTime(0);
    });
});
