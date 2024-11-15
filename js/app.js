//APP
//VARIABLES UTILES
let cards = ["card1", "card2", "card3"];
let imgCard;
let containerCard;

let containerResponse;
let iconResponse;

let secondColor;
let redColor;

let pathImg = './asset/img/';
let currentCard;
let previousCard;

let containerScore;
let score = 0;

//PRÉPARATION DU DOM ET DES VARIABLES UTILES
document.addEventListener('DOMContentLoaded', () => {
    containerCard = document.querySelector('.container-card');
    imgCard = document.querySelector('#img-card');
    containerResponse = document.querySelector('.response-status');
    iconResponse = document.querySelector('.response-status i');
    containerScore = document.querySelector('.score p');
    secondColor = getComputedStyle(document.documentElement).getPropertyValue('--second-color');
    redColor = getComputedStyle(document.documentElement).getPropertyValue('--red-color');

    afficherCard();
});

//AFFICHER LES CARDS
function afficherCard() {
    let numberRandom = Math.floor(Math.random() * 3);

    containerCard.style.opacity = '0';

    previousCard = currentCard;

    currentCard = cards[numberRandom];

    imgCard.src = pathImg + currentCard + '.jpg';

    imgCard.onload = () => {
        containerCard.style.opacity = '1';
    }

    // console.log('Previous Card : ' + previousCard);
    // console.log('Current Card : ' + currentCard);
}

//VÉRIFICATION DE LA RÉPONSE DU USER
function verificationCard(userAnswer) {
    let sameCard = currentCard === previousCard;

    if(userAnswer === sameCard) {
        displayIconResponse(true);
        scoreCount(true);
    } else {
        displayIconResponse(false);
        scoreCount(false);
    }

    animatedCard();
}

//Affichage de l'icon du status de la réponse
function displayIconResponse(boolean) {
    if(boolean === true) {
        iconResponse.className = 'fas fa-check';
        containerResponse.style.display = 'flex';
        containerResponse.style.backgroundColor = secondColor;
    } else if(boolean === false) {
        iconResponse.className = 'fa-solid fa-xmark';
        containerResponse.style.display = 'flex';
        containerResponse.style.backgroundColor = redColor;
    }

    containerResponse.classList.add('animate-response');

    containerResponse.addEventListener('animationend', () => {
        containerResponse.style.display = 'none';
        containerResponse.classList.remove('animate-response');
    }, {once: true});
}

//Animation des cards
function animatedCard() {
    containerCard.classList.remove('animate-pass');
    void containerCard.offsetWidth;
    containerCard.classList.add('animate-pass');

    containerCard.addEventListener('animationend', () => {
        afficherCard();
    }, {once: true});
}

//SYSTÈME DE POINTS
function scoreCount(boolean) {
    if(boolean === true) {
        score += 10;
        
        displayScore(score);
    } else if(boolean === false) {
        score += 0;

        displayScore(score);
    }
}

function displayScore(score) {
    containerScore.innerHTML = '';
    containerScore.innerHTML = score + ' pts';
}

//CONFIGURATION DES TOUCHES
document.addEventListener('keypress', (event) => {
    if(event.key === 'v' || event.key === 'V') {
        verificationCard(true);
    } else if(event.key === 'x' || event.key === 'X') {
        verificationCard(false);
    }
});

//Créer des mod classique / hard, pour diminuer le score lors d'une mauvaise réponse.
//Créer également des bonus de points lors d'un enchaînement de 10 bonnes réponses.