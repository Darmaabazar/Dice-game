var activePlayer;
var scores;
var currentScore;
var isNewGame;

// dice image search query
var diceDom = document.querySelector(".dice");

// game reset
function initGame() {
    isNewGame = true;

    // idewhtei toglogchiig hadgalah huwisagch, 0 or 1
    activePlayer = 0;  

    // тоглогчдын цуглуулсан оноог хадгалах хувьсагч
    scores = [0, 0];

    // тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
    currentScore = 0;

    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    document.getElementById("name-0").textContent = "PLAYER 1";
    document.getElementById("name-1").textContent = "PLAYER 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.add("active");

    diceDom.style.display = "none";
}

initGame();

// roll-dice event listener
document.querySelector(".btn-roll").addEventListener("click", function() {
    if(isNewGame) {
        var diceNumber = Math.floor(Math.random() * 6) + 1;

        diceDom.style.display = "block";

        diceDom.src = "dice-" + diceNumber + ".png";

        if(diceNumber !== 1) {
            currentScore += diceNumber;

            document.getElementById("current-" + activePlayer).textContent = currentScore;
        } else {
            switchToNextPlayer();
        }
    } else {
        alert("Game Over!");
    }
    
});

// hold button event listener
document.querySelector(".btn-hold").addEventListener("click", function() {
    if(isNewGame) {
        scores[activePlayer] += currentScore;

        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    
        
        
        if (scores[activePlayer] >= 100) {
            isNewGame = false;
            document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
        } else {
            switchToNextPlayer();
        }
    } else {
        alert("Game Over!");
    }

});

// new game buttun event listener
document.querySelector(".btn-new").addEventListener("click", initGame);

// тоглогчийн ээлжиийг солих функц
function switchToNextPlayer() {
    diceDom.style.display = "none";

    currentScore = 0;

    document.getElementById("current-" + activePlayer).textContent = 0;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}