const items = [
  {
    name: "HD 600 T-Shirt",
    price: "$89.00",
    image: ["images/unisex-oversized-boxy-tee.jpg"],
    quantity: 5,
  },
  {
    name: "HD 600 Stickers",
    price: "$69.99",
    image: ["images/kiss-cut-stickers.jpg", "images/kiss-cut-stickers (1).jpg"],
    quantity: 29,
  },
  {
    name: "HD 600 Hoodie",
    price: "$399.95",
    image: [
      "images/unisex-heavy-blend-hooded-sweatshirt.jpg",
      "images/unisex-heavy-blend-hooded-sweatshirt (1).jpg",
      "images/unisex-heavy-blend-hooded-sweatshirt (2).jpg",
    ],
    quantity: 0,
  },
  {
    name: "HD 600 Phone Case",
    price: "$399.95",
    image: [
      "images/tough-phone-cases (2).jpg",
      "images/tough-phone-cases.jpg",
      "images/tough-phone-cases (1).jpg",
    ],
    quantity: 24,
  },
];

const container = document.getElementById("store-container");

function renderItems(filteredItems) {
  container.innerHTML = "";
  filteredItems.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "store-item";

    const outOfStock = item.quantity === 0 ? "out-of-stock" : "";
    const lowOnStock =
      item.quantity <= 5 && item.quantity > 0 ? "low-on-stock" : "";

    const carouselId = `carousel-${index}`;

    itemDiv.innerHTML = `
        <div class="carousel image-container ${outOfStock}">
          <img id="${carouselId}" src="${item.image[0]}" alt="${item.name}" />
          <button class="carousel-btn prev">&larr;</button>
          <button class="carousel-btn next">&rarr;</button>
          ${item.quantity === 0 ? '<div class="overlay"></div>' : ""}
        </div>
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <p>In stock: ${item.quantity}</p>
        <button class="${lowOnStock}" ${item.quantity === 0 ? "disabled" : ""}>
          ${
            item.quantity === 0
              ? "Out of Stock"
              : item.quantity <= 5
              ? "Low on Stock"
              : "Add to Cart"
          }
        </button>
      `;

    container.appendChild(itemDiv);

    let currentImageIndex = 0;
    const imgEl = itemDiv.querySelector(`#${carouselId}`);
    const nextBtn = itemDiv.querySelector(".next");
    const prevBtn = itemDiv.querySelector(".prev");

    nextBtn.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % item.image.length;
      imgEl.src = item.image[currentImageIndex];
    });

    prevBtn.addEventListener("click", () => {
      currentImageIndex =
        (currentImageIndex - 1 + item.image.length) % item.image.length;
      imgEl.src = item.image[currentImageIndex];
    });
  });
}

renderItems(items);
