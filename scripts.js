//const apiUrl = 'https://public-api.wordpress.com/rest/v1.1/sites/tutor563.wordpress.com/posts';
//const apiUrl = 'https://cors.noroff.dev/https://miatexnes.com/rainydays/wp-json/wc/store/products/';
// const apiUrl = 'http://flower-power.local/wp-json/wc/store/products/'
const apiUrl =   "https://cors.noroff.dev/https://miatexnes.com/rainydays/wp-json/wc/store/products/";

//1. 

async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    displayProducts(products)
    console.log(products);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

fetchProducts();

//2. Create JavaScript functionality to fetch a single products data from WordPress API 

async function fetchProductData(productId){

    const productUrl = `{apiUrl}/${productId}`;

    try {
        const response = await fetch(productUrl);

        if (!response.ok){
            throw new Error('Failed to fetch the product data');
        }

        const productData = await response.json(productData); 
         } catch (error) {
        console.log('Error fetching the product data'. error); 
    }
}


// 3. Create JavaScript functionality to render grid of product data in HTML as thumbnails 

function displayProducts(products){
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

        

        productDiv.appendChild(productLink);
        productLink.appendChild(productImage);

      /*  productDiv.innerHTML = `
        
        <p>${product.name}</p>
        <img src="${product.images[0].thumbnail}">
        <br><br>
        
        `;*/


        gridDisplay.appendChild(productDiv)    
    })
}



/* function generateFlowerPage(product) {
    const flowerPage = document.createElement('html');
    moviePage.innerHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Flowah powa - ${product.name}</title>
            <link rel="stylesheet" href="style.css">
            <link rel="icon" href="data:;base64,iVBORw0KGgo=" />
        </head>
        <body>
            <div id="post-container">
                <h2>${product.name}</h2>
                <img src="${product.image[0].src}" alt="Cover of ${product.name}">
            </div>
            <script src="script.js"></script>
        </body>
        </html>
    `;
} */