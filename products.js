const apiUrl = "https://cors.noroff.dev/https://miatexnes.com/rainydays/wp-json/wc/store/products/";

function getProductIdFromQuery() {
    const params = new URLSearchParams(window.location.search);
    return params.get('productId');
}

async function fetchProductData(productId) {
    const productUrl = `${apiUrl}${productId}`;
    try {
        const response = await fetch(productUrl);
        if (!response.ok) throw new Error('Failed to fetch product data');
        const productData = await response.json();
        displayProductDetails(productData);
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

function displayProductDetails(product) {
    const detailsContainer = document.getElementById('flowerDetails');
    detailsContainer.innerHTML = `
        <h1>${product.name}</h1>
        <img src="${product.images[0].src}" alt="${product.name}">
        <p>${product.description}</p>
        <p>Price: ${product.prices.price} ${product.prices.currency_code}</p>
    `;
}

const productId = getProductIdFromQuery();
if (productId) {
    fetchProductData(productId);
}
