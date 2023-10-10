const questions = [
{
    question: "What are the two reactants of respiration?",
    answers: ["Glucose and oxygen", "Glucose and water", "Oxygen and water",
    "Oxygen and carbon dioxide"],
    correctAnswer: "Glucose and oxygen"
},
{
    question: "What is the chemical element for the symbol W?",
    answers: ["Osmium", "Radon", "Tungsten", "Nitrogen"],
    correctAnswer: "Tungsten"
},
{
    question: "Which gas makes up the third largest component of the earths atmosphere?",
    answers: ["Carbon dioxide", "Argon", "Oxygen", "Helium"],
    correctAnswer: "Argon"
},
{
    question: "How many types of blood groups are there?",
    answers: ["4", "6", "8", "10"],
    correctAnswer: "8"
},
{
    question: "Which is the longest nerve in the human body?",
    answers: ["Optic nerve", "Ulnar nerve", "Vagus nerve", "Sciatic nerve"],
    correctAnswer: "Sciatic nerve"
},
{
    question: "The asteroid belt is located between which two planets?",
    answers: ["Jupiter and Mars", "Jupiter and Saturn", "Mercury and Venus", "Saturn and Uranus"],
    correctAnswer: "Jupiter and Mars"
},
{
    question: "In the acronym LASER, what does the letter R stand for?",
    answers: ["Reflection", "Radiation", "Resistance", "Relative"],
    correctAnswer: "Radiation"
},
{
    question: "What is the lightest metal in the periodic table?",
    answers: ["Silver", "Aluminium", "Iron", "Lithium"],
    correctAnswer: "Lithium"
},
{
    question: "Which is the tallest active volcano in the world?",
    answers: ["Mount Fuji", "Mount Kilimanjaro", "Mauna Loa", "Mount Bromo"],
    correctAnswer: "Mauna Loa"
},
{
    question: "Which moon is known for its tiger stripe shaped fissures?",
    answers: ["Io", "Enceladus", "Europa", "Deimos"],
    correctAnswer: "Enceladus"
}
];

let questionTitle = document.getElementById("question-title");
let answerButton = document.getElementById("question-section");
let btnContainer = document.getElementById("btn-container");
let nextQuestionBtn = document.getElementById("next-btn");
let finishBtn = document.getElementById("finish-btn");
let choiceOne = document.getElementById("choice-one");
let choiceTwo = document.getElementById("choice-two");
let choiceThree = document.getElementById("choice-three");
let choiceFour = document.getElementById("choice-four");

let choices = [choiceOne, choiceTwo, choiceThree, choiceFour];

let questionNumber = 0;
let score = 0;

// Event listener which starts the quiz once the DOM has finished loading
document.addEventListener("DOMContentLoaded", startQuiz);

function startQuiz() {
    questionNumber = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    clearPrevious();
    finishBtn.style.display = "none";
    nextQuestionBtn.style.display = "none";
    let currentQuestion = questions[questionNumber];
    let currentQuestionNumber = questionNumber + 1;
    questionTitle.innerHTML = `${currentQuestionNumber}. ${currentQuestion.question}`;
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        choices[i].textContent = currentQuestion.answers[i];
    }

    for (let i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", addEventListenerToAnswerButtons);
    }
}

function addEventListenerToAnswerButtons(clickEvent) {
    let selectedOption = clickEvent.target.textContent;
    selectAnswer(selectedOption);
}

function selectAnswer(selectedOption) {
    let currentQuestion = questions[questionNumber];
    if (selectedOption === currentQuestion.correctAnswer) {
        score = score + 1;
        for (let i = 0; i < choices.length; i++) {
            choices[i].classList.add("disabled");
            if (choices[i].textContent === selectedOption) {
                choices[i].classList.add("correctAnswerColour");
            } else {
                choices[i].classList.add("greyOut");
            }
        }
    } else if (selectedOption !== currentQuestion.correctAnswer) {
        for (let i = 0; i < choices.length; i++) {
            choices[i].classList.add("disabled");
            if (choices[i].textContent === selectedOption) {
                choices[i].classList.add("wrongAnswerColour");
            } else {
                choices[i].classList.add("greyOut");
            } 
            
            if (choices[i].textContent === currentQuestion.correctAnswer) {
                choices[i].classList.remove("greyOut");
                choices[i].classList.add("correctAnswerColour");
            }

        }
    }
    nextQuestionBtn.style.display = "block";
}

function nextQuestion() {
    questionNumber++;
    if (questionNumber < questions.length) {
        showQuestion();
    }
}

nextQuestionBtn.addEventListener("click", () => {
    if (questionNumber < questions.length) {
        nextQuestion();
    } else {
        nextQuestionBtn.style.display = "none";
        finishBtn.style.display = "block";
        let finalScore = score.toString();
        localStorage.setItem("finalScore", finalScore);
        console.log("nextquestion event listener" + score);
    }
});

startQuiz();

function clearPrevious() {
    for (let i = 0; i < choices.length; i++) {
        choices[i].classList.remove("disabled");
        choices[i].classList.remove("wrongAnswerColour");
        choices[i].classList.remove("correctAnswerColour");
        choices[i].classList.remove("greyOut");
    }
}