/**
 * Created by ABPxDFW on 5/29/2017.
 */

var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
   // Generate all new colors
   colors = generateRandomColors(6);
   // Pick a new random colors from array
   pickedColor = pickColor();

   // Change colorDisplay to match picked Color
   colorDisplay.textContent = pickedColor;

   // Change colors of squares.
   for(var i = 0; i < squares.length; i++) {
       squares[i].style.background = colors[i];
   }
   h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor;

for(var i=0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners to squares
    squares[i].addEventListener("click", function() {
        // Grab color of clicked squares
        var clickedColor = this.style.backgroundColor;

        // Compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    // loop through all squares
    for(var i = 0; i < squares.length; i++) {
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // Make an array
    var arr = [];

    // Add num random colors to array
    for(var i = 0; i < num; i ++) {
        arr.push(randomColor());
    }

    // Return that array
    return arr;
}

function randomColor() {
    // Pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256);

    // pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);

    // pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}