import { getProducts } from "./apiService.js";
import { renderProducts, Modalclose } from "./uiComponent.js";

const searchInput = document.getElementById("input");
const meddelande = document.getElementById("meddelande");

let allProducts = [];

// Initierar appen
async function init() {
    try {
        meddelande.textContent = "Laddar produkter...";
        allProducts = await getProducts();
        meddelande.textContent = "";
        renderProducts(allProducts);
    } catch (err) {
        meddelande.textContent = "Kunde inte hämta produkter. Försök igen senare.";
        console.error(err);
    }
}

// Sök/filter funktion
searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredProducts = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchText)
    );
    renderProducts(filteredProducts);
});

// Sätter eventlistener för stäng-knappen i modalen
Modalclose();

// Starta appen
init();

