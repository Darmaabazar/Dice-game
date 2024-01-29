// idewhtei toglogchiig hadgalah huwisagch, 0 or 1
var activePlayer = 0;  

// тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var currentScore = 0;

// шооны утгыг хадгалах хувьсагч
var diceNumber = Math.floor(Math.random() * 6) + 1;

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

// document.querySelector(".dice").style.display = "none"; 
// document.querySelector(".player-name").innerHTML = "<em>player</em>"; 