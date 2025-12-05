// Étapes du site
function nextStep(id) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
    if(id === 'typing') startTyping();
}

// Typing Effect
const typingText = `Objet : URGENT - Demande de Renseignements et Accès à l'Interrogatoire - Incident au Quartier Administratif et Entrave au Mandat du Comité d'Éthique (Réf. Alerte Éthique #69335cd939c7595cdd5770e0)

À l'attention de : [Nom du Responsable du Département Judiciaire ou du département en général, ex: Chef du Département Judiciaire]

De la part de : [Votre Nom/Prénom], [Votre Fonction au sein du Comité d'Éthique, ex: Inspecteur Éthique], pour le Comité d'Éthique

Date : [05/12/2025]

Monsieur/Madame [Nom du Responsable],

Je vous contacte en référence à l'incident survenu ce jour, 05/12/2025, aux alentours de 20h00, au Quartier Administratif, impliquant un individu ayant taser plusieurs membres du personnel et du Comité d'Éthique. Cet individu a été appréhendé en flagrant délit et menotté par des membres du Comité d'Éthique. Une Alerte Éthique (Réf. 69335cd939c7595cdd5770e0) a été ouverte concernant cette situation.

Il nous a été rapporté qu'un membre de votre département est intervenu pour prendre en charge l'individu appréhendé et a ensuite refusé catégoriquement aux membres du Comité d'Éthique l'accès à son interrogatoire, invoquant une prétendue "obstruction à une intervention judiciaire".

Nous tenons à vous rappeler avec la plus grande fermeté les dispositions du Code Éthique de la Fondation SCP qui régissent de telles situations :

Primauté et Pouvoirs d'Intervention du Comité d'Éthique : Conformément à la Division I - Mandat du Comité, Article I - Pouvoirs d'Intervention, le Comité d'Éthique "peut convoquer, interroger, exiger tout document ou rapport, et pénétrer dans toute zone, y compris classifiée". De plus, le mandat du CE couvre "tous les domaines : scientifiques, médicaux, tactiques ou administratifs."
Obligation de Coopération : La Division II - Codex Général, Article I - Autorisation du CE stipule clairement que "Tout département, service ou membre du personnel (...) est tenu de coopérer avec les représentants du Comité. Le refus de collaboration, la désobéissance, la falsification d’informations ou la dissimulation de preuves constitue une infraction grave."
Validité des Procédures : Enfin, l'Article II - Autorité d'Application énonce qu'"Aucune procédure disciplinaire ne peut être considérée comme valide sans une consultation préalable et formelle du Comité d’Éthique. Toute procédure engagée sans cette consultation est automatiquement frappée de nullité."

En vertu de ces articles, le Comité d'Éthique exige un accès complet et immédiat à toutes les informations relatives à l'interrogatoire de l'individu appréhendé, y compris le compte-rendu intégral, les enregistrements (audio/vidéo si disponibles), ainsi que l'identité du membre de votre département ayant mené cet interrogatoire et refusé l'accès au CE.

Nous attendons ces renseignements exacts sous [délai, ex: 24 heures], soit avant le [Date et Heure].

Nous tenons à souligner que le refus délibéré d'obtempérer à cette demande sera considéré comme une nouvelle entrave grave au mandat du Comité d'Éthique et fera l'objet de mesures disciplinaires immédiates et strictes, conformément aux dispositions du Code Éthique.

Le Comité d'Éthique est chargé de veiller à l'application intégrale du Code et n'hésitera pas à utiliser toutes les prérogatives qui lui sont conférées pour garantir le respect de l'éthique au sein de la Fondation.

Dans l'attente de votre coopération immédiate,

Cordialement,

[Votre Nom/Prénom] [Votre Fonction au sein du Comité d'Éthique] « Gloire à la Fondation, Gloire à l’Éthique »`;

let i = 0;
function startTyping() {
    const elem = document.getElementById('typing-text');
    elem.innerHTML = '';
    i = 0;
    const interval = setInterval(() => {
        elem.innerHTML += typingText[i++];
        if (i >= typingText.length) clearInterval(interval);
    }, 10);
}

// Affichage final après SCiPNET
function showFinalMessage() {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById('final').style.display = 'block';
    document.getElementById('full-message').textContent = typingText;
}

// Initial
nextStep('cassette');
