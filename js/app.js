//APP
//VARIABLES UTILES
let cards = ["card1", "card2", "card3"];
let imgCard;
let containerCard;
let pathImg = './asset/img/';
let currentCard;
let previousCard;

document.addEventListener('DOMContentLoaded', () => {
    containerCard = document.querySelector('.container-card');
    imgCard = document.querySelector('#img-card');

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
        console.log('Bonne réponse !');
    } else {
        console.log('Mauvaise réponse.');
    }

    containerCard.classList.remove('animate-pass');
    void containerCard.offsetWidth;
    containerCard.classList.add('animate-pass');

    containerCard.addEventListener('animationend', () => {
        afficherCard();
    }, {once: true});
};

//Jeux de carte

//Afficher la carte Random

//Première carte afficher pendant 2s

//Event boutton Oui / Non if ==
//Config des touches pour aller plus vite
//Si la carte afficher correspond à la précédente.
//Donc un return précédente carte en mémoire.
//Système de score.
