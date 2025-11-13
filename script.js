console.log("Le script est chargé !");
// 1. CIBLER
const titre = document.querySelector('#titre-principal');

// On vérifie s'il existe (pour ne pas créer d'erreur sur les autres pages)
if (titre) {
  // 2. ÉCOUTER
  titre.addEventListener('click', () => {
    // 3. MANIPULER
    console.log("J'ai cliqué sur le titre !");
    titre.textContent = "Titre cliqué !";
  });
}