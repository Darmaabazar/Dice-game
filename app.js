// idewhtei toglogchiig hadgalah huwisagch, 0 or 1
var activePlayer = 0;  

// тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var currentScore = 0;

// шооны утгыг хадгалах хувьсагч

// document.querySelector("#score-0").textContent = 0;
// document.querySelector("#score-1").textContent = 0;
// document.querySelector("#current-0").textContent = 0;
// document.querySelector("#current-1").textContent = 0;

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

// document.querySelector(".player-name").innerHTML = "<em>player</em>"; 

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// roll-dice event listener
document.querySelector(".btn-roll").addEventListener("click", function() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";

    diceDom.src = "dice-" + diceNumber + ".png";

    if(diceNumber !== 1) {
        currentScore += diceNumber;

        document.getElementById("current-" + activePlayer).textContent = currentScore;
    } else {
        diceDom.style.display = "none";

        currentScore = 0;

        document.getElementById("current-" + activePlayer).textContent = 0;

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");


    }
})