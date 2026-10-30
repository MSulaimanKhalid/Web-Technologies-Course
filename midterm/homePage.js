async function loadFeaturedProducts() {
  const container = document.getElementById("featuredItems");
  const template = document.getElementById("featuredProductTemplate");

  try {
    const response = await fetch("./data/featuredProducts.json");
    const products = await response.json();

    for (const product of products) {
      const clone = template.content.cloneNode(true);
      const card = clone.querySelector(".featuredCard");
      clone.querySelector(".featuredTitle").textContent = product.title;
      clone.querySelector(".featuredDescription").textContent =
        product.description;
      clone.querySelector(".featuredButton").textContent = product.buttonLabel;

      card.style.backgroundImage = `url("./images/${product.backgroundImage}")`;
      container.append(clone);
    }
  } catch (error) {
    console.error("Error loading featured products:", error);
    container.textContent = "Unable to load featured products.";
  }
}

async function loadProducts() {
  const container = document.getElementById("productsList");
  const template = document.getElementById("productCardTemplate");

  try {
    const response = await fetch("./data/products.json");

    const products = await response.json();

    for (const product of products) {
      const clone = template.content.cloneNode(true);

      const image = clone.querySelector(".productImage");
      image.src = `./images/${product.image}`;
      image.alt = product.title;

      clone.querySelector(".productTitle").textContent = product.title;

      clone.querySelector(".productPrice").textContent = product.price;

      container.append(clone);
    }
  } catch (error) {
    console.error("Error loading products:", error);
    container.textContent = "Unable to load products.";
  }
}

loadProducts();

loadFeaturedProducts();
