const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
 
let cards = shuffle(colors.concat(colors)); // Concatenate the array with itself to create pairs
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

// This function is responsible for generating the cards dynamically and adding them to the game container.
function generateCards() {
    // Loop through each color in the shuffled cards array.
    for (const color of cards) {
        // Create a new div element for each card.
        const card = document.createElement('div');
        
        // Add the 'card' class to the div for styling purposes.
        card.classList.add('card');
        
        // Store the color as a data attribute on the card for later reference.
        card.dataset.color = color;
        
        // Set the initial text content of the card to '?' to hide the color.
        card.textContent = '?';
        
        // Append the card to the game container in the DOM.
        gameContainer.appendChild(card);
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive).
        // j(5) = Math.floor(0.76 * (3 + 1));
        const j = Math.floor(Math.random() * (i + 1));
        // Swap the elements at indices i and j in the array.(i = 5, j = 3)
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleCardClick(event) {
     const card = event.target;
/*
The code ensures that the function only processes valid cards:
 - If the element is not a card (!card.classList.contains('card')), it exits. OR
 - If the card has already been matched (card.classList.contains('matched')), it exits.
*/
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if (selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
    } else {
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() {
    let timeLeft = 30;
    startbtn.disabled = true;
    score = 0; // Reset score to zero
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors.concat(colors));
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over!');
            startbtn.disabled = false;
        }
    }, 1000);
}

startbtn.addEventListener('click', startGame);