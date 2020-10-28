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

    let keyResult = e.key;
    
    if (keyResult == 1) {
        activate(0);
    } else if (keyResult == 2) {
        activate(1);
    } else if (keyResult == 3) {
        activate(2);
    } else if (keyResult== 4) {
        activate(3);
    }
  };

  document.onkeyup = function(e) {

    let keyResult = e.key;

    if (keyResult == 1) {
        pause(0);
    } else if (keyResult == 2) {
        pause(1);
    } else if (keyResult == 3) {
        pause(2);
    } else if (keyResult== 4) {
        pause(3);
    }
  };