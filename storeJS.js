const items = [
  {
    name: "AKG K240 headphones",
    price: "$89.00",
    image: [
      "images/headphones-1720164_1280.jpg" /* Image by kinkates from Pixabay */,
      "images/oleg-ivanov-qrKci8K0oRY-unsplash.jpg" /* oleg-ivanov-qrKci8K0oRY-unsplash */,
    ],
    quantity: 10,
  },
  {
    name: "AKG K240 headphones",
    price: "$89.00",
    image: [
      "images/headphones-1720164_1280.jpg" /* Image by kinkates from Pixabay */,
      "images/oleg-ivanov-qrKci8K0oRY-unsplash.jpg" /* oleg-ivanov-qrKci8K0oRY-unsplash */,
    ],
    quantity: 10,
  },
  {
    name: "AKG K240 headphones",
    price: "$89.00",
    image: [
      "images/headphones-1720164_1280.jpg" /* Image by kinkates from Pixabay */,
      "images/oleg-ivanov-qrKci8K0oRY-unsplash.jpg" /* oleg-ivanov-qrKci8K0oRY-unsplash */,
    ],
    quantity: 10,
  },
  {
    name: "AKG K240 headphones",
    price: "$89.00",
    image: [
      "images/headphones-1720164_1280.jpg" /* Image by kinkates from Pixabay */,
      "images/oleg-ivanov-qrKci8K0oRY-unsplash.jpg" /* oleg-ivanov-qrKci8K0oRY-unsplash */,
    ],
    quantity: 10,
  },
  {
    name: "Marshall Major IV",
    price: "$69.99",
    image: [
      "images/dmitry-kropachev-d-gdVqLQX2s-unsplash.jpg" /* Photo by Dmitry Kropachev on Unsplash */,
      "images/oleg-ivanov-qrKci8K0oRY-unsplash.jpg" /* oleg-ivanov-qrKci8K0oRY-unsplash */,
      "images/maria-chetvernina-Ehujs3PRbMg-unsplash.jpg" /* Photo by Maria Chetvernina on Unsplash */,
    ],
    quantity: 2,
  },
  {
    name: "Sennheiser HD 600",
    price: "$399.95",
    image: [
      "images/hd600.jpg",
      "images/oleg-ivanov-qrKci8K0oRY-unsplash.jpg" /* oleg-ivanov-qrKci8K0oRY-unsplash */,
    ],
    quantity: 0,
  },
];

const container = document.getElementById("store-container");

items.forEach((item, index) => {
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

  // this block must be scoped for each item
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
