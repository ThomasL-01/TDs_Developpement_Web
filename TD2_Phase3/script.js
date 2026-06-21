var products = [{name: "Clavier mécanique", description:"Clavier RGB avec switchs rapides pour gaming et bureautique", price: 79, status:"En Stock", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61jacONrzjL._AC_.jpg&f=1&nofb=1&ipt=1239aa6d20cb09df6f5b722ce68d819f50a89f0fbd4c0e8ac07f2278cafdaa4e"},
                {name: "Souris ergonomique", description:"Souris ergonomique avec capteur haute précision et autonomie longue durée", price: 39, status:"Rupture de stock", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61RD8Thd4dL._AC_SL1500_.jpg&f=1&nofb=1&ipt=73527ccbac108d10bf0dd8926d1a91b8d9dbfc3199ae3231947ac3d982725bfc"},
                {name: "Écran 24 pouces", description:"Écran full HD idéal pour le travail et le multimédia", price: 149, status:"En Stock", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71YdxZ6LwcL._AC_.jpg&f=1&nofb=1&ipt=3f571df03acf35c76fb6eb7d87a11d64418965086d4b7bf3a68793a1a5469398"}];

window.addEventListener("DOMContentLoaded", function() {
    displayProducts();
});

function searchProducts() {
    const searchInput = document.querySelector('input[type="search"]');
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    
    const section = document.getElementById("catalogue");
    section.innerHTML = "";
    
    if (filteredProducts.length === 0) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "Aucun produit trouvé.";
        noResultsMessage.style.fontWeight = "bold";
        noResultsMessage.style.padding = "30px";
        section.appendChild(noResultsMessage);
    } else {
        filteredProducts.forEach(product => createProductCard(product));
    }
}

function addProduct() {
    const productName = document.getElementById("name").value;
    const productDescription = document.getElementById("desc").value;
    const productPrice = document.getElementById("price").value;
    const productStatus = document.getElementById("status").value;
    const productImage = document.getElementById("image").value;

    if (productName === "" || productDescription === "" || productPrice === "" || productImage === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    const product = {
        name: productName,
        description: productDescription,
        price: parseFloat(productPrice),
        status: productStatus,
        image: productImage
    };

    products.push(product);
    alert("Produit ajouté avec succès !");
    createProductCard(product);
}

function displayProducts() {
    for (let i = 0; i < products.length; i++) {
        createProductCard(products[i]);
    }
}

function createProductCard(product) {
    const section = document.getElementById("catalogue");
    if (!section) {
        console.error("Section not found in the DOM.");
        return;
    }
    const article = document.createElement("article");
    article.setAttribute("name", product.name);
    article.classList.add("produit");

    const h3 = document.createElement("h3");
    h3.textContent = product.name;
    article.appendChild(h3);

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = `Image de ${product.name}`;
    img.height = 100;
    img.width = 150;
    article.appendChild(img);

    const descP = document.createElement("p");
    descP.setAttribute("name", "desc");
    descP.textContent = product.description;
    article.appendChild(descP);

    const priceP = document.createElement("p");
    priceP.setAttribute("name", "price");
    priceP.textContent = `Prix : ${product.price}€`;
    article.appendChild(priceP);

    const statusP = document.createElement("p");
    statusP.setAttribute("name", "status");
    statusP.textContent = `Statut : ${product.status}`;
    if (product.status === "En Stock") {
        statusP.classList.add("status_en-stock");
    } else {
        statusP.classList.add("status_rupture");
    }
    article.appendChild(statusP);

    section.appendChild(article);
}