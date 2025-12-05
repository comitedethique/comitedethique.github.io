// Affichage section
function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// Typing Effect
const typingText = `Objet : URGENT - Demande de Renseignements et Accès à l'Interrogatoire
Incident au Quartier Administratif et Entrave au Mandat du Comité d'Éthique
À l'attention de : [Nom du Responsable du Département Judiciaire]
De la part de : [Votre Nom], [Votre Fonction au sein du Comité d'Éthique]

Message complet ici...
(…insère tout ton texte initial complet…)`;

let index = 0;
function startTyping() {
    const elem = document.getElementById('typing-text');
    elem.innerHTML = '';
    index = 0;
    const interval = setInterval(() => {
        elem.innerHTML += typingText[index++];
        if (index >= typingText.length) clearInterval(interval);
    }, 20);
}

// Démarrage par défaut
showSection('cassette');
