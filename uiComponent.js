export function renderProducts(products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    
    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        
        card.innerHTML = `
         <img src="${product.image}" alt="${product.title}">
         <h3>${product.title}</h3>
         <p>${product.price.toFixed(2)} $</p>
         `;

    productList.appendChild(card);
    });
}