/**
 * Get the final score from local storage and store it in the finalScore variable
 * get the HTML element with the id of score-text and set its inner HTML as finalScore
 */
let finalScore = localStorage.getItem("finalScore");
let scoreText = document.getElementById("score-text");
scoreText.innerHTML = ("You scored: " + finalScore + " out of 10");