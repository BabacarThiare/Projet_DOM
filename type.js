// Récupérer les éléments du DOM
const panier = document.getElementById("panier");
const articles = panier.getElementsByClassName("article");
const totalElement = document.getElementById("total");

// Fonction pour mettre à jour le prix total
function updateTotal() {
    let total = 0;
    for (const article of articles) {
        const quantite = parseInt(article.querySelector(".quantite").textContent);
        const prixUnitaire = 10; // Remplacer par le prix réel de l'article
        total += quantite * prixUnitaire;
    }
    totalElement.textContent = total;
}

// Ajoute des gestionnaires d'événements pour chaque article
for (const article of articles) {
    const decrementBtn = article.querySelector(".decrement");
    const incrementBtn = article.querySelector(".increment");
    const removeBtn = article.querySelector(".remove");
    const likeBtn = article.querySelector(".like");
    const quantiteElement = article.querySelector(".quantite");

    decrementBtn.addEventListener("click", () => {
        let quantite = parseInt(quantiteElement.textContent);
        if (quantite > 1) {
            quantite--;
            quantiteElement.textContent = quantite;
            updateTotal();
        }
    });

    incrementBtn.addEventListener("click", () => {
        let quantite = parseInt(quantiteElement.textContent);
        quantite++;
        quantiteElement.textContent = quantite;
        updateTotal();
    });

    removeBtn.addEventListener("click", () => {
        panier.removeChild(article);
        updateTotal();
    });

    likeBtn.addEventListener("click", () => {
      
    });
}
