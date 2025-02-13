const questions = [
    {
        question: "Qual é a capital do Brasil?",
        answers: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        correct: 2
    },
    {
        question: "Quantos estados o Brasil possui?",
        answers: ["26", "27", "28", "30"],
        correct: 1
    },
    {
        question: "Quem descobriu o Brasil?",
        answers: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Dom Pedro I"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const answerButton = document.createElement('button');
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);
        answersElement.appendChild(answerButton);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correct) {
        score++;
    }

    document.getElementById('nextButton').style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById('nextButton').style.display = "none";
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
    document.getElementById('nextButton').style.display = "none";
}

window.onload = loadQuestion;
