// Product data
const products = [
  {
    id: 1,
    name: "Classic Black Hoodie",
    price: 1499,
    image: "images/hoodie1.jpg",
    shortDesc: "Premium cotton hoodie, perfect for daily wear and all seasons.",
    details: "Crafted from high-quality cotton blend, offering warmth, breathability, and ultimate comfort. Relaxed fit and minimalist design make it suitable for casual outings, gym, or home.",
    sizes: ["S", "M", "XL"]
  },
  {
    id: 2,
    name: "Casual Gray Hoodie",
    price: 1599,
    image: "images/hoodie2.jpg",
    shortDesc: "Cozy gray hoodie with minimalist style, a wardrobe essential.",
    details: "Soft and breathable fabric ensures all-day comfort. Neutral gray color goes with everything from jeans to joggers.",
    sizes: ["M", "L", "XL"]
  },
  {
    id: 3,
    name: "Streetwear White Hoodie",
    price: 1699,
    image: "images/hoodie3.jpg",
    shortDesc: "Trendy white hoodie with bold streetwear appeal.",
    details: "Made from premium cotton blend with modern oversized fit. Features durable stitching and a clean, versatile style.",
    sizes: ["S", "M", "L"]
  },
  {
    id: 4,
    name: "Premium Blue Hoodie",
    price: 1799,
    image: "images/hoodie4.jpg",
    shortDesc: "Elegant navy-blue hoodie with unmatched comfort.",
    details: "Designed for everyday use with soft fleece lining for warmth. Stylish navy finish works well for casual and semi-casual wear.",
    sizes: ["M", "L", "XL"]
  }
];

// ========== INDEX PAGE ==========
if (document.getElementById("product-grid")) {
  const grid = document.getElementById("product-grid");
  products.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="card-info">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <a href="product.html?id=${p.id}" class="btn">Buy Now</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ========== PRODUCT PAGE ==========
if (document.getElementById("product-detail")) {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get("id"));
  const product = products.find(p => p.id === productId);

  if (product) {
    const detail = document.getElementById("product-detail");
    detail.innerHTML = `
      <div class="product-images">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h1>${product.name}</h1>
        <p class="price">₹${product.price}</p>
        <p class="short-desc">${product.shortDesc}</p>

        <div class="sizes">
          <label for="size">Select Size:</label>
          <select id="size">
            ${product.sizes.map(s => `<option value="${s}">${s}</option>`).join("")}
          </select>
        </div>

        <a href="#" class="btn">Buy Now</a>

        <div class="description">
          <h3>Product Details</h3>
          <p>${product.details}</p>
        </div>
      </div>
    `;
  }
}
