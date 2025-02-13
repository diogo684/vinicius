const guessInput = document.getElementById('guess');
const guessButton = document.getElementById('guess-btn');
const message = document.getElementById('message');

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        message.innerText = `Parabéns! Você adivinhou o número ${randomNumber} em ${attempts} tentativas.`;
        guessButton.disabled = true;
    } else if (userGuess < randomNumber) {
        message.innerText = "Muito baixo! Tente novamente.";
    } else if (userGuess > randomNumber) {
        message.innerText = "Muito alto! Tente novamente.";
    }
});
