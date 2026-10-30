// TASK 3: Called after homePage.js finishes creating the product cards.
// This script reads and moves those cards; it does not fetch or rebuild products.
function initializeProductTools() {
  const grid = document.getElementById("productsList");
  const cards = Array.from(grid.querySelectorAll(".productCard"));
  const searchInput = document.getElementById("searchInput");
  const sortButton = document.getElementById("sortPriceButton");
  const noResults = document.getElementById("noProductsMessage");
  const categoryRadios = document.querySelectorAll(
    'input[name="product-category"]',
  );
  const premiumLimit = 79 * 100;
  let ascending = true;

  // Read the displayed price: "Rs. 1,495" becomes 1495.
  function getPrice(card) {
    const text = card.querySelector(".productPrice").textContent;
    return Number(
      text
        .replace(/Rs\.?\s*/i, "")
        .replace(/,/g, "")
        .trim(),
    );
  }

  // Only search controls this class. Task 1 CSS still controls the category.
  function searchProducts() {
    const searchText = searchInput.value.trim().toLowerCase();

    for (const card of cards) {
      const name = card
        .querySelector(".productTitle")
        .textContent.toLowerCase();

      // An empty search matches every product.
      const matchesSearch = searchText === "" || name.includes(searchText);

      // Only control search visibility; Task 1 CSS still filters categories.
      card.classList.toggle("search-hidden", !matchesSearch);
    }

    // Count cards that match both the search and the selected category.
    const visibleCards = cards.filter(function (card) {
      return getComputedStyle(card).display !== "none";
    });

    noResults.hidden = visibleCards.length > 0;
    grid.hidden = visibleCards.length === 0;
  }

  searchInput.addEventListener("input", searchProducts);
  document
    .getElementById("searchButton")
    .addEventListener("click", searchProducts);

  // Category filtering remains CSS-only; this updates the empty-result message.
  for (const radio of categoryRadios) {
    radio.addEventListener("change", searchProducts);
  }

  sortButton.addEventListener("click", function () {
    cards.sort(function (a, b) {
      return ascending ? getPrice(a) - getPrice(b) : getPrice(b) - getPrice(a);
    });

    // appendChild moves the existing nodes, including any hidden cards.
    for (const card of cards) {
      grid.appendChild(card);
    }

    sortButton.textContent = ascending
      ? "Sort by price: Low to high"
      : "Sort by price: High to low";
    ascending = !ascending;
  });

  // Add the badge once, after the existing cards have loaded.
  for (const card of cards) {
    if (getPrice(card) > premiumLimit) {
      const label = document.createElement("span");
      label.className = "premiumLabel";
      label.textContent = "Premium";
      card.appendChild(label);
    }
  }

  // Also handles text typed while the original JSON request was loading.
  searchProducts();
}
