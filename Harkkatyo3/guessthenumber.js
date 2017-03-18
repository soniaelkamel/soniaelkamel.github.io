window.onload = function() {


function getRandomInteger(min,max) {
    return Math.floor((Math.random() * max) + min );
} 

var guessNumber = getRandomInteger(1,10);

function compareNumbers(first, second) {
    if(first === second) {
        return true;
    }
    else {
        return false;
    }
}

document.getElementById("button").addEventListener("click", guessTheNumber);


function guessTheNumber() {
    var inputNumber = Number(document.getElementById("number").value);
    console.log(guessNumber);
    console.log(Number.isInteger(inputNumber));
    if(Number.isInteger(inputNumber) && inputNumber>= 1 && inputNumber <= 10) {
        if (compareNumbers(guessNumber, inputNumber)) {
            alert("osuit oikeaan");
            guessNumber = getRandomInteger(1,10);
        }
        else {
            alert("väärin meni");
        }
    }
    
    else {
        alert("vääränlainen numero");
    }
}};

