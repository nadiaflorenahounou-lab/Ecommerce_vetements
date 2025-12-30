// ================= Slider automatique =================
const sliderContainer = document.getElementById('sliderContainer');
const slides = sliderContainer.querySelectorAll('img');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

showSlide(currentIndex);

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 3000);

// ================= Produits =================
const products = [
    { name: "Tshirt fashion", price: "22000 FCFA", image: "assets/images/tshirt.jpg" },
    { name: "Jean design", price: "30000 FCFA", image: "assets/images/jeans.jpg" },
    { name: "Robe tendance", price: "45000 FCFA", image: "assets/images/robe.jpg" },
    { name: "Pull chic", price: "25000 FCFA", image: "assets/images/pull.jpg" },
    { name: "Jupe elegante", price: "20000 FCFA", image: "assets/images/jupe.jpg" },
    { name: "Sac fashion", price: "18000 FCFA", image: "assets/images/sac.jpg" },
    { name: "Chaussures", price: "30000 FCFA", image: "assets/images/chaussures.jpg" },
    { name: "Veste", price: "35000 FCFA", image: "assets/images/veste.jpg" }
];

const productsGrid = document.getElementById("productsGrid");

products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <button class="btn-whatsapp">Commander</button>
        </div>
    `;

    productsGrid.appendChild(card);
});
