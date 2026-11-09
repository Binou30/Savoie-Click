const burger = document.querySelector('.burger-savoie-click');
const panneau = document.querySelector('.panneau-boxes');
const fond = document.querySelector('.fond-panneau');

const conteneurJeu = document.getElementById("conteneur-jeu");
const boutonPleinEcran = document.getElementById("plein-ecran");

boutonPleinEcran.addEventListener("click", async () => {
    try {
        if (!document.fullscreenElement) {
            await conteneurJeu.requestFullscreen();
        } else {
            await document.exitFullscreen();
        }
    } catch (erreur) {
        console.error("Erreur plein écran :", erreur);
        alert("Erreur : " + erreur.message);
    }
});

function toggleMenu() {
    burger.classList.toggle('ouvert');
    panneau.classList.toggle('ouvert');
    fond.classList.toggle('ouvert');
}

burger.addEventListener('click', toggleMenu);
fond.addEventListener('click', toggleMenu);