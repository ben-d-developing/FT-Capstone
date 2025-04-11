const items = [
  {
    name: "AKG K240 headphones",
    price: "$20",
    image:
      "images/headphones-1720164_1280.jpg" /* Image by kinkates from Pixabay */,
    quantity: 18,
  },
  {
    name: "Marshall Major IV",
    price: "$15",
    image:
      "images/dmitry-kropachev-d-gdVqLQX2s-unsplash.jpg" /* Photo by Dmitry Kropachev on Unsplash */,
    quantity: 0,
  },
  {
    name: "Sennheiser HD 600",
    price: "$50",
    image: "images/hd600.jpg",
    quantity: 100,
  },
];

const container = document.getElementById("store-container");

items.forEach((item) => {
  const itemDiv = document.createElement("div");
  itemDiv.className = "store-item";

  // If out of stock, apply class
  const outOfStock = item.quantity === 0 ? "out-of-stock" : "";

  itemDiv.innerHTML = `
      <div class="image-container ${outOfStock}">
        <img src="${item.image}" alt="${item.name}">
        ${item.quantity === 0 ? '<div class="overlay"></div>' : ""}
      </div>
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <p>In stock: ${item.quantity}</p>
      <button ${item.quantity === 0 ? "disabled" : ""}>
        ${item.quantity === 0 ? "Out of Stock" : "Add to Cart"}
      </button>
    `;

  container.appendChild(itemDiv);
});
