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

document.addEventListener('DOMContentLoaded', () => {
    containerCard = document.querySelector('.container-card');
    imgCard = document.querySelector('#img-card');
    containerResponse = document.querySelector('.response-status');
    iconResponse = document.querySelector('.response-status i');
    secondColor = getComputedStyle(document.documentElement).getPropertyValue('--second-color');
    redColor = getComputedStyle(document.documentElement).getPropertyValue('--red-color');

    afficherCard();
});

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

function verificationCard(userAnswer) {

    let sameCard = currentCard === previousCard;

    if(userAnswer === sameCard ) {
        // console.log('Bonne réponse !');

        //Icon Font Awesome = V
        iconResponse.className = '';
        iconResponse.className = 'fas fa-check';

       //Affichage de l'icon + color + animation
        containerResponse.style.display = 'flex';
        containerResponse.style.backgroundColor = secondColor;
        containerResponse.classList.add('animate-response');

        //Attendre que l'animation se finisse
        containerResponse.addEventListener('animationend', () => {
            containerResponse.style.display = 'none';
            containerResponse.classList.remove('animate-response');
        }, {once: true});
    } else {
        // console.log('Mauvaise réponse.');

        //Icon Font Awesome = X
        iconResponse.className = '';
        iconResponse.className = 'fa-solid fa-xmark';

        //Affichage de l'icon + color + animation
        containerResponse.style.display = 'flex';
        containerResponse.style.backgroundColor = redColor;
        containerResponse.classList.add('animate-response');

        //Attendre que l'animation se finisse
        containerResponse.addEventListener('animationend', () => {
            containerResponse.style.display = 'none';
            containerResponse.classList.remove('animate-response');
        }, {once: true});
    }

    //Animation des card
    containerCard.classList.remove('animate-pass');
    void containerCard.offsetWidth;
    containerCard.classList.add('animate-pass');

    //Attendre que l'animation se finisse
    containerCard.addEventListener('animationend', () => {
        afficherCard();
    }, {once: true});
};

//CONFIGURATION DES TOUCHES
document.addEventListener('keypress', (event) => {
    if(event.key === 'v' || event.key === 'V') {
        verificationCard(true);
    } else if(event.key === 'x' || event.key === 'X') {
        verificationCard(false);
    }
});

//Config des touches pour aller plus vite

//Système de score.
