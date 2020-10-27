let audioArr = [
    new Audio("sounds/Kick.wav"), 
    new Audio("sounds/Hat-Closed.wav"), 
    new Audio("sounds/Snare-Center.wav"),
    new Audio("sounds/Snare-Rim.wav")
];

function activate(sound) {
    if (!audioArr[sound]) {
        alert("No sound assigned");
    } else {
    audioArr[sound].play();
    }
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