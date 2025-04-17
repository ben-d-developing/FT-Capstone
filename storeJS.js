const items = [
  {
    name: "AKG K240 headphones",
    brand: "AKG",
    type: "semi open back",
    price: "$89.00",
    image: ["images/headphones-1720164_1280.jpg", "images/oleg-ivanov-qrKci8K0oRY-unsplash.jpg"],
    quantity: 10,
  },
  {
    name: "Marshall Major IV",
    brand: "Marshall",
    type: "closed back",
    price: "$69.99",
    image: ["images/dmitry-kropachev-d-gdVqLQX2s-unsplash.jpg", "images/oleg-ivanov-qrKci8K0oRY-unsplash.jpg"],
    quantity: 2,
  },
  {
    name: "Sennheiser HD 600",
    brand: "Sennheiser",
    type: "open back",
    price: "$399.95",
    image: ["images/hd600.jpg", "images/oleg-ivanov-qrKci8K0oRY-unsplash.jpg"],
    quantity: 0,
  },
];

const brandFilter = document.getElementById("brandFilter");
const typeFilter = document.getElementById("typeFilter");

function populateFilters(items) {
  const brands = [...new Set(items.map(item => item.brand))];
  const types = [...new Set(items.map(item => item.type))];

  brands.forEach(brand => {
    const opt = document.createElement("option");
    opt.value = brand;
    opt.textContent = brand;
    brandFilter.appendChild(opt);
  });

  types.forEach(type => {
    const opt = document.createElement("option");
    opt.value = type;
    opt.textContent = type;
    typeFilter.appendChild(opt);
  });
}

function renderItems(filteredItems) {
  container.innerHTML = ""; // Clear first
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

function filterItems() {
  const brandVal = brandFilter.value;
  const typeVal = typeFilter.value;

  const filtered = items.filter(item => {
    const brandMatch = brandVal === "all" || item.brand === brandVal;
    const typeMatch = typeVal === "all" || item.type === typeVal;
    return brandMatch && typeMatch;
  });

  renderItems(filtered);
}

populateFilters(items);
renderItems(items);

brandFilter.addEventListener("change", filterItems);
typeFilter.addEventListener("change", filterItems);

const container = document.getElementById("store-container");

// items.forEach((item, index) => {
//   const itemDiv = document.createElement("div");
//   itemDiv.className = "store-item";

//   const outOfStock = item.quantity === 0 ? "out-of-stock" : "";
//   const lowOnStock =
//     item.quantity <= 5 && item.quantity > 0 ? "low-on-stock" : "";

//   const carouselId = `carousel-${index}`;

//   itemDiv.innerHTML = `
//   <div class="carousel image-container ${outOfStock}">
//     <img id="${carouselId}" src="${item.image[0]}" alt="${item.name}" />
//     <button class="carousel-btn prev">&larr;</button>
//     <button class="carousel-btn next">&rarr;</button>
//     ${item.quantity === 0 ? '<div class="overlay"></div>' : ""}
//   </div>
//   <h3>${item.name}</h3>
//   <p>${item.price}</p>
//   <p>In stock: ${item.quantity}</p>
//   <button class="${lowOnStock}" ${item.quantity === 0 ? "disabled" : ""}>
//     ${
//       item.quantity === 0
//         ? "Out of Stock"
//         : item.quantity <= 5
//         ? "Low on Stock"
//         : "Add to Cart"
//     }
//   </button>
// `;

//   container.appendChild(itemDiv);

//   // this block must be scoped for each item
//   let currentImageIndex = 0;
//   const imgEl = itemDiv.querySelector(`#${carouselId}`);
//   const nextBtn = itemDiv.querySelector(".next");
//   const prevBtn = itemDiv.querySelector(".prev");

//   nextBtn.addEventListener("click", () => {
//     currentImageIndex = (currentImageIndex + 1) % item.image.length;
//     imgEl.src = item.image[currentImageIndex];
//   });

//   prevBtn.addEventListener("click", () => {
//     currentImageIndex =
//       (currentImageIndex - 1 + item.image.length) % item.image.length;
//     imgEl.src = item.image[currentImageIndex];
//   });
// });
