// products.js
const products = {
  black: {
    id: "black",
    name: "Classic Black Hoodie",
    price: 1499,
    shortDesc: "Premium cotton hoodie, perfect for daily wear and all seasons.",
    description: `Our Classic Black Hoodie is crafted from high-quality cotton blend, 
      offering warmth, breathability, and ultimate comfort.`,
    details: [
      "Material: 100% Cotton Blend",
      "Available Sizes: S, M, XL",
      "Color: Jet Black",
      "Care: Machine wash cold"
    ],
    sizes: ["S", "M", "L", "XL"],
    outOfStock: ["L"],
    images: ["images/hoodie1.jpg"]
  },
  white: {
    id: "white",
    name: "Classic White Hoodie",
    price: 1599,
    shortDesc: "Clean white hoodie for fresh, minimalist vibes.",
    description: `The Classic White Hoodie offers timeless style with a soft, breathable fabric.`,
    details: [
      "Material: 95% Cotton, 5% Polyester",
      "Available Sizes: S, M, L",
      "Color: White",
      "Care: Hand wash recommended"
    ],
    sizes: ["S", "M", "L"],
    outOfStock: [],
    images: ["images/hoodie2.jpg"]
  }
};
