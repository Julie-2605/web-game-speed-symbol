//STYLISATION
//MOUVEMENT CARD
document.addEventListener('DOMContentLoaded', (event) => {
    const card = document.querySelector('.container-card');


    card.addEventListener('mousemove', (event) => {
        const cardRect = card.getBoundingClientRect();
        const cardWidth = cardRect.width;
        const cardHeight = cardRect.height;

        const centerX = cardRect.left + cardWidth / 2;
        const centerY = cardRect.top + cardHeight / 2;

        const mouseX = event.clientX - centerX;
        const mouseY = event.clientY - centerY;

        const rotateX = (mouseY / cardHeight) * 15;
        const rotateY = (mouseX / cardWidth) * -15;

        card.style.transform = `rotate3d(${rotateY}, ${rotateX}, 0, 15deg)`;
    });

    card.addEventListener('mouseleave', () => {
        // Réinitialise la transformation quand la souris quitte l'élément
        card.style.transform = `rotate3d(0, 0, 0, 0)`;
    });
});