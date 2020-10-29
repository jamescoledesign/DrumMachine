let audio1 = new Audio("sounds/Crash.wav"); 
let audio2 = new Audio("sounds/Djembe-Center.wav");
let audio3 = new Audio("sounds/Djembe-Rim.wav");  
let audio4 = new Audio("sounds/Floor-Tom.wav"); 
let audio5 = new Audio("sounds/Hat-Closed.wav");
let audio6 = new Audio("sounds/Hat-Open.wav");
let audio7 = new Audio("sounds/Hat-Pedal.wav");
let audio8 = new Audio("sounds/Kick.wav");
let audio9 = new Audio("sounds/Ride-Bell.wav");
let audio10 = new Audio("sounds/Ride.wav");
let audio11 = new Audio("sounds/Snare-Center.wav");
let audio12 = new Audio("sounds/Snare-Edge.wav");
let audio13 = new Audio("sounds/Snare-Rim.wav");
let audio14 = new Audio("sounds/Tam-A.wav");
let audio15 = new Audio("sounds/Tam-B.wav"); 
let audio16 = new Audio("sounds/Tom.wav");

let audioArr = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9, audio10, audio11, audio12, audio13, audio14, audio15, audio16];

const padOne = document.getElementById("pad1");
const padTwo = document.getElementById("pad2");
const padThree = document.getElementById("pad3");
const padFour = document.getElementById("pad4");
const padFive = document.getElementById("pad5");
const padSix = document.getElementById("pad6");
const padSeven = document.getElementById("pad7");
const padEight = document.getElementById("pad8");
const padNine = document.getElementById("pad9");
const padTen = document.getElementById("pad10");
const padEleven = document.getElementById("pad11");
const padTwelve = document.getElementById("pad12");
const padThirteen = document.getElementById("pad13");
const padFourteen = document.getElementById("pad14");
const padFifteen = document.getElementById("pad15");
const padSixteen = document.getElementById("pad16");

const padArr = [padOne, padTwo, padThree, padFour, padFive, padSix, padSeven, padEight, padNine, padTen, padEleven, padTwelve, padThirteen, padFourteen, padFifteen, padSixteen];

let padSelection = 0;
let sound = 0;
let keyPressed = 0

// Activate pad sound

function activate(sound) {
    audioArr[sound].play();
}

function pause(sound) {
    audioArr[sound].pause();
    audioArr[sound].currentTime = 0;
}

// Executes on each pad with mouse

/*for (var i = 0; i < padArr.length; i++) {
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
        // Play audio on mobile 
         padArr[index].addEventListener("touchstart", function() {
            padSelection = index;
            console.log('Pad ' + padSelection + ' was clicked');
            let sound = padSelection;
            activate(sound);
          })
        // Pause audio on mobile
          padArr[index].addEventListener("touchend", function() {
           padSelection = index;
           let sound = padSelection;
           pause(sound);
         })

    })(i);
}*/

// Use keyboard to activate pad sound / change to black

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
    } else if (keyResult== "q" ) {
        activate(4);
        document.getElementById("pad5").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult== "w" ) {
        activate(5);
        document.getElementById("pad6").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult== "e" ) {
        activate(6);
        document.getElementById("pad7").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult== "r" ) {
        activate(7);
        document.getElementById("pad8").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult== "a" ) {
        activate(8);
        document.getElementById("pad9").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult== "s" ) {
        activate(9);
        document.getElementById("pad10").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult== "d" ) {
        activate(10);
        document.getElementById("pad11").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult== "f" ) {
        activate(11);
        document.getElementById("pad12").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult== "z" ) {
        activate(12);
        document.getElementById("pad13").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult== "x" ) {
        activate(13);
        document.getElementById("pad14").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult== "c" ) {
        activate(14);
        document.getElementById("pad15").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    } else if (keyResult== "v" ) {
        activate(15);
        document.getElementById("pad16").style.backgroundColor = "red";
        console.log('Pad ' + padSelection + ' was typed');
    }
    
  };

  // Use keyboard to pause pad sound / change to black

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
    } else if (keyResult== "q") {
        pause(4);
        document.getElementById("pad5").style.backgroundColor = "black";
    } else if (keyResult== "w") {
        pause(5);
        document.getElementById("pad6").style.backgroundColor = "black";
    } else if (keyResult== "e") {
        pause(6);
        document.getElementById("pad7").style.backgroundColor = "black";
    } else if (keyResult== "r") {
        pause(7);
        document.getElementById("pad8").style.backgroundColor = "black";
    } else if (keyResult== "a") {
        pause(8);
        document.getElementById("pad9").style.backgroundColor = "black";
    } else if (keyResult== "s") {
        pause(9);
        document.getElementById("pad10").style.backgroundColor = "black";
    } else if (keyResult== "d") {
        pause(10);
        document.getElementById("pad11").style.backgroundColor = "black";
    } else if (keyResult== "f") {
        pause(11);
        document.getElementById("pad12").style.backgroundColor = "black";
    } else if (keyResult== "z") {
        pause(12);
        document.getElementById("pad13").style.backgroundColor = "black";
    } else if (keyResult== "x") {
        pause(13);
        document.getElementById("pad14").style.backgroundColor = "black";
    } else if (keyResult== "c") {
        pause(14);
        document.getElementById("pad15").style.backgroundColor = "black";
    } else if (keyResult== "v") {
        pause(15);
        document.getElementById("pad16").style.backgroundColor = "black";
    }
  };