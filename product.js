const products = [
  {
    id: "black-hoodie",
    name: "Classic Black Hoodie",
    image: "images/hoodie1.jpg",
    desc: "Premium cotton hoodie, perfect for daily wear.",
    price: "₹1499",
    details: `
      Our Classic Black Hoodie is crafted from high-quality cotton blend,
      offering warmth, breathability, and ultimate comfort.
      <ul>
        <li>Material: 100% Cotton Blend</li>
        <li>Available Sizes: S, M, XL</li>
        <li>Color: Jet Black</li>
        <li>Care: Machine wash cold</li>
      </ul>
    `
  },
  {
    id: "white-hoodie",
    name: "White Hoodie",
    image: "images/hoodie2.jpg",
    desc: "Minimalist white hoodie with relaxed fit.",
    price: "₹1399",
    details: `
      Sleek white hoodie designed for comfort and casual wear.
      <ul>
        <li>Material: Cotton Blend</li>
        <li>Available Sizes: M, L</li>
        <li>Color: White</li>
        <li>Care: Machine wash warm</li>
      </ul>
    `
  }
];

// Show products on homepage
const grid = document.getElementById("product-grid");
if (grid) {
  grid.innerHTML = "";
  products.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <div class="card-info">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <a href="product.html?id=${p.id}" class="btn">View Details</a>
        </div>
      </div>
    `;
  });
}
