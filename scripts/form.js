const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
  { id: 5, name: "Product 5" }
];

document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product");

  products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = product.name;
      productSelect.appendChild(option);
  });
});
