let audioArr = [
    new Audio("sounds/Kick.wav"), 
    new Audio("sounds/Hat-Closed.wav"), 
    new Audio("sounds/Snare-Center.wav"),
    new Audio("sounds/Snare-Rim.wav")
];

// Use mouse to activate pad sound

function activate(sound) {
    audioArr[sound].play();
}

function pause(sound) {
    audioArr[sound].pause();
    audioArr[sound].currentTime = 0;
}

// Use keyboard to activate pad sound

document.onkeydown = function(e) {
    if (e.which == 49) {
        activate(0);
    } else if (e.which == 50) {
        activate(1);
    } else if (e.which == 51) {
        activate(2);
    } else if (e.which == 52) {
        activate(3);
    }
  };

  document.onkeyup = function(e) {
    if (e.which == 49) {
        pause(0);
    } else if (e.which == 50) {
        pause(1);
    } else if (e.which == 51) {
        pause(2);
    } else if (e.which == 52) {
        pause(3);
    }
  };