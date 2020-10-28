const audioArr = [
    new Audio("sounds/Kick.wav"), 
    new Audio("sounds/Hat-Closed.wav"), 
    new Audio("sounds/Snare-Center.wav"),
    new Audio("sounds/Snare-Rim.wav")
];

// Activate pad sound

function activate(sound) {
    audioArr[sound].play();
}

function pause(sound) {
    audioArr[sound].pause();
    audioArr[sound].currentTime = 0;
}

const padOne = document.getElementById("pad1");
const padTwo = document.getElementById("pad2");
const padThree = document.getElementById("pad3");
const padFour = document.getElementById("pad4");

const padArr = [padOne, padTwo, padThree, padFour];

let padSelection = 0;
let sound = 0;
let keyPressed = 0

// Executes on each pad with mouse

for (var i = 0; i < padArr.length; i++) {
    (function(index) {
        padArr[index].addEventListener("mousedown", function() {
            padSelection = index;
            console.log('Pad ' + padSelection + ' was clicked');
            let sound = padSelection;
            activate(sound);
          })
        // Pause audio with mouse 
          padArr[index].addEventListener("mouseup", function() {
           padSelection = index;
           let sound = padSelection;
           pause(sound);
         })

    })(i);
}

// Use keyboard to activate pad sound

document.onkeydown = function(e) {

    let keyResult = e.key;
    let padSelection = keyResult;
    
    if (keyResult == 1) {
        activate(0);
        document.getElementById("pad1").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult == 2) {
        activate(1);
        document.getElementById("pad2").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult == 3) {
        activate(2);
        document.getElementById("pad3").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult== 4) {
        activate(3);
        document.getElementById("pad4").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    }
  };

  document.onkeyup = function(e) {

    let keyResult = e.key;

    if (keyResult == 1) {
        pause(0);
        document.getElementById("pad1").style.backgroundColor = "black";
    } else if (keyResult == 2) {
        pause(1);
        document.getElementById("pad2").style.backgroundColor = "black";
    } else if (keyResult == 3) {
        pause(2);
        document.getElementById("pad3").style.backgroundColor = "black";
    } else if (keyResult== 4) {
        pause(3);
        document.getElementById("pad4").style.backgroundColor = "black";
    }
  };