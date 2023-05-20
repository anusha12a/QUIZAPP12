var currentQuestion = 0;
var score = 0;

var quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Mercury", "Jupiter"],
        correctAnswer: 0
    },
    {
        question: "What is the largest ocean in the world?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3
    }
];

function loadQuestion() {
    var questionElement = document.getElementById("question");
    var choicesElement = document.getElementById("choices");

    var question = quizData[currentQuestion].question;
    var choices = quizData[currentQuestion].choices;

    questionElement.innerHTML = question;

    choicesElement.innerHTML = "";
    for (var i = 0; i < choices.length; i++) {
        choicesElement.innerHTML += "<input type='radio' name='choice' value='" + i + "'>" + choices[i] + "<br>";
    }
}

function checkAnswer() {
    var choices = document.getElementsByName("choice");
    var selectedChoice;

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            selectedChoice = choices[i].value;
            choices[i].checked = false;
            break;
        }
    }

    if (selectedChoice == quizData[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        var scoreElement = document.getElementById("score");
        scoreElement.innerHTML = "Quiz completed! Your score is " + score + "/" + quizData.length;
        currentQuestion = 0;
        score = 0;
    }
}

loadQuestion();
