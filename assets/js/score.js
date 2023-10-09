let finalScore = localStorage.getItem("finalScore");
let scoreText = document.getElementById("score-text");
scoreText.innerHTML = ("You scored: " + finalScore + " out of 10");
