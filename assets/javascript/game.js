var spaceWords = [            
    "mercury",
    "venus",            
    "earth", 
    "mars",             
    "jupiter",
    "saturn", 
    "uranus", 
    "neptune"
];

var directionsText = document.getElementById("directions-text");
var randomSpaceWordText = document.getElementById("randomSpaceWord-text");
var answerArrayText = document.getElementById("answerArray-text");
var userLettersGuessedtext = document.getElementById("userGuess-text");
var userWinOrLossText = document.getElementById("winOrLoss-text");

var randomSpaceWord = spaceWords[Math.floor(Math.random() * spaceWords.length)];

console.log(randomSpaceWord);

directionsText.textContent = "Try to guess the planet name!";
userLettersGuessedtext.textContent = "Letters guessed: "

var answerArray = [];
for (var i = 0; i < randomSpaceWord.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = randomSpaceWord.length;


answerArrayText.textContent = answerArray.join(" ");

function reloadPage() {
    location.reload();
}

document.onkeyup = function(event) {
    var userGuesstext = event.key;
    userLettersGuessedtext.textContent += (userGuesstext + " ");
    for (var j = 0; j < randomSpaceWord.length; j++) {
        if (randomSpaceWord[j] === userGuesstext) {
            answerArray[j] = userGuesstext;
            remainingLetters--;
            answerArrayText.textContent = answerArray.join(" ");
        }    
    }

    if (remainingLetters === 0) {
        userWinOrLossText.textContent = "You Win!!! Press Reset to play again."
    }

};