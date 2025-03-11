//APP
//VARIABLES
const cards = ["card1", "card2", "card3"];
const pathImg = '../asset/img/';
let imgPreload = {};

let previousCard = null;
let currentCard = null;

let score = 0;
let perfect = 0;
let gameActive = true;

let second, redColor;
let sectionGame, containerCard, containerResponse, iconResponse, containerResult, containerTimer, containerScore;

//PREPARATION OF THE DOM AND VARIABLES
document.addEventListener('DOMContentLoaded', () => {
    sectionGame = document.querySelector('.section-game');
    containerCard = document.querySelector('.container-card');
    containerResponse = document.querySelector('.response-status');
    iconResponse = document.querySelector('.response-status i');
    containerResult = document.querySelector('.result p');
    containerTimer = document.querySelector('.timer p');
    containerScore = document.querySelector('.score p span');
    secondColor = getComputedStyle(document.documentElement).getPropertyValue('--second-color');
    redColor = getComputedStyle(document.documentElement).getPropertyValue('--red-color');

    preloadImg();
});

//PRELOAD IMAGES
function preloadImg() {
    cards.forEach(card => {
        let img = new Image();
        img.src = `${pathImg}${card}.jpg`;
        imgPreload[card] = img;
    });
}

//RANDOM CARD DRAW
function drawCard() {
    return cards[Math.floor(Math.random() * cards.length)];
}

//DISPLAY CARD WITH A TRANSITION
function displayCard(card) {
    containerCard.style.opacity = 0;
    setTimeout(() => {
        containerCard.innerHTML = '';
        //.cloneNode() copy the image in cache → performance gain.
        containerCard.appendChild(imgPreload[card].cloneNode());
        containerCard.style.opacity = 1;
    }, 300);
}

//UPDATE SCORE
function updateScore(isCorrect) {
    if (isCorrect) {
        perfect++;
        score += 10;
        if (perfect >= 5) {
            score += 20;
        } 
    } else {
        perfect = 0;
        score = Math.max(0, score - 10);
    }
    containerScore.innerText = `${score}`;
}

//DISPLAY RESPONSE ICON STATUS
function displayIcon(isCorrect) {
    if (isCorrect) {
        iconResponse.className = 'fas fa-check';
        iconResponse.style.color = secondColor;
        iconResponse.style.display = 'flex';
    } else {
        iconResponse.className = 'fa-solid fa-xmark';
        iconResponse.style.color = redColor;
        iconResponse.style.display = 'flex';
    }

    setTimeout(() => {
        iconResponse.className = '';
        iconResponse.style.display = 'none';
    }, 500);
}

//PLAYER ANSWER | MODIFICATION OF THE SCORE
function response(isSame) { 
    if(!gameActive) return;

    let isCorrect = (isSame && currentCard === previousCard) || (!isSame && currentCard !== previousCard);
    updateScore(isCorrect);
    displayIcon(isCorrect);

    nextTurn();
}



//NEXT TURN → REDEFINITON OF CARDS | DRAW | DISPLAY
function nextTurn() {
    previousCard = currentCard;
    currentCard = drawCard();
    displayCard(currentCard);
}

//TIMER FUNCTION
function timer() {
    timeLeft = 20;
    containerTimer.innerText = `${timeLeft} s`;
    
    timer = setInterval(() => {
        timeLeft--;
        containerTimer.innerText = `${timeLeft}s`;
        
        if(timeLeft <= 0) {
            clearInterval(timer);
            gameActive = false;
            containerResult.innerText = `Timeout ! Final Score : ${score}`;
            sectionGame.style.display = 'none';
        }
    }, 1000);
}

//INITIALIZATION OF THE GAME
function startGame() {
    score = 0;
    perfect = 0;
    
    containerScore.innerText = '0';
    sectionGame.style.display = 'flex';
    containerResult.innerText = '';

    gameActive = true;

    previousCard = drawCard();
    displayCard(previousCard);
    
    setTimeout(() => {
        currentCard = drawCard();
        displayCard(currentCard);
        timer();
    }, 1500);
}

//KEYBOARD INPUT
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === "v") {
        response(true);
    } else if (event.key.toLowerCase() === "x") {
        response(false);
    }
});