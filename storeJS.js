const items = [
  {
    name: "AKG K240", //Headphone model
    brand: "AKG", //Brand name
    type: "semi open back", //Headphone type ("closed back" "open back" "semi open back") verbatim
    price: "$89.00", //Price of item
    image: [
      "images/headphones-1720164_1280.jpg",
      "images/71bNODflmBL._AC_SL1500_.jpg",
      "images/71okySiZwlL._AC_SL1500_.jpg",
    ], //Files to images formatted: "images/image.jpg",
    //Files must be in: "FT-Capstone > images"
    quantity: 10, // Quantity in stock
  },
  {
    name: "Marshall Major IV", //Headphone model
    brand: "Marshall", //Brand name
    type: "closed back", //Headphone type ("closed back" "open back" "semi open back") verbatim
    price: "$69.99", //Price of item
    image: [
      "images/dmitry-kropachev-d-gdVqLQX2s-unsplash.jpg",
      "images/oleg-ivanov-qrKci8K0oRY-unsplash.jpg",
      "images/maria-chetvernina-Ehujs3PRbMg-unsplash.jpg",
    ], //Files to images formatted: "images/image.jpg",
    //Files must be in: "FT-Capstone > images"
    quantity:0, // Quantity in stock
  },
  {
    name: "Sennheiser HD 600", //Headphone model
    brand: "Sennheiser", //Brand name
    type: "open back", //Headphone type ("closed back" "open back" "semi open back") verbatim
    price: "$399.95", //Price of item
    image: [
      "images/SennheiserHD6001024x1024.jpg",
      "images/SennheiserHD60011024x1024.jpg",
      "images/SennheiserHD6001024x1024_04ba76c8-0cf1-460c-a82f-fc7fa7e41acd.jpg",
      "images/hd600.jpg",
    ], //Files to images formatted: "images/image.jpg",
    //Files must be in: "FT-Capstone > images"
    quantity: 3, // Quantity in stock
  },
  // {
  //   name: "model of headphone here", //Headphone model
  //   brand: "brand name here", //Brand name
  //   type: "type (open back, closed back, or semi open back) here", //Headphone type ("closed back" "open back" "semi open back") verbatim
  //   price: "$price here", //Price of item
  //   image: [
  //     "images/SennheiserHD6001024x1024.jpg",
  //     "images/SennheiserHD60011024x1024.jpg",
  //     "images/SennheiserHD6001024x1024_04ba76c8-0cf1-460c-a82f-fc7fa7e41acd.jpg",
  //     "images/hd600.jpg",
  //   ], //Files to images formatted: "images/image.jpg",
  //   //Files must be in: "FT-Capstone > images"
  //   quantity: 0, // Quantity in stock
  // },
];

const container = document.getElementById("store-container");

const brandFilter = document.getElementById("brandFilter");
const typeFilter = document.getElementById("typeFilter");

function populateFilters(items) {
  const brands = [...new Set(items.map((item) => item.brand))];
  const types = [...new Set(items.map((item) => item.type))];

  brands.forEach((brand) => {
    const opt = document.createElement("option");
    opt.value = brand;
    opt.textContent = brand;
    brandFilter.appendChild(opt);
  });

  types.forEach((type) => {
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

  const filtered = items.filter((item) => {
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
