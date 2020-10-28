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
    if (e.which == 81) {
        activate(0);
    } else if (e.which == 87) {
        activate(1);w
    } else if (e.which == 69) {
        activate(2);
    } else if (e.which == 82) {
        activate(3);q
    }
  };

  document.onkeyup = function(e) {
    if (e.which == 81) {
        pause(0);
    } else if (e.which == 87) {
        pause(1);w
    } else if (e.which == 69) {
        pause(2);
    } else if (e.which == 82) {
        pause(3);q
    }
  };