export function renderProducts(products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.setAttribute("tabindex","0");
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price.toFixed(2)} $</p>
        `;

// Öppna modal vid klick
        card.addEventListener("click", () => Modal(product));

// Enter eller Space öppnar modal via tangentbord
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault(); // förhindra scroll vid Space
                Modal(product);
            }
        });

        productList.appendChild(card);
    });
}


export function Modal(product) {
    const modal = document.getElementById("productModal");
    document.getElementById("modaltitle").textContent = product.title;
    document.getElementById("modalimage").src = product.image;
    document.getElementById("modaldescription").textContent = product.description;
    document.getElementById("modalprice").textContent = `Pris: ${product.price} $`;

    modal.classList.remove("hidden");
}

export function Modalclose() {
    const modal = document.getElementById("productModal");
    document.getElementById("closeModal").addEventListener("click", () => {
        modal.classList.add("hidden");
    });
}
