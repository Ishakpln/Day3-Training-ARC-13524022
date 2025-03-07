document.addEventListener("DOMContentLoaded", function () {
  const productContainer = document.createElement("div");
  productContainer.className = "product-container";
  document.querySelector(".products").appendChild(productContainer);

  fetch("/api/products") // API Endpoint
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      products = data.products;

      products.forEach((product) => {
        const productdiv = document.createElement("div");
        productdiv.className = "product";
        const title = document.createElement("h3");
        title.textContent = product.title;
        const description = document.createElement("p");
        description.textContent = product.description;
        const price = document.createElement("h4");
        price.textContent = `$${product.price}`;

        productdiv.appendChild(title);
        productdiv.appendChild(price);
        productdiv.appendChild(description);
        productContainer.appendChild(productdiv);
      });
    })
    .catch((error) => console.error("Error:", error));
});
