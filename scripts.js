// const apiUrl = "https://cors.noroff.dev/https://miatexnes.com/rainydays/wp-json/wc/store/products/";
const apiUrl = "https://flows.raddishai.no/wp-json/wc/store/products/";

async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Failed to fetch products');
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function displayProducts(products) {
    const gridDisplay = document.getElementById('product-grid');
    gridDisplay.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-thumbnail';
        const productImage = document.createElement('img');
        productImage.src = product.images[0].thumbnail;
        productImage.alt = product.name;
        const productLink = document.createElement('a');
        productLink.href = `product-details.html?productId=${product.id}`;
        productLink.textContent = product.name;
        productLink.appendChild(productImage);
        productDiv.appendChild(productLink);
        gridDisplay.appendChild(productDiv);
    });
}

fetchProducts();
