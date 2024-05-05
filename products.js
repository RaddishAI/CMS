const displayProductsDetails = () => {
    const detailsElement = document.getElementById('flowerDetails');
    if (detailsElement) {
        const flower = JSON=parse(localStorage.getItem('selectedFlower'));
            if (flower) {
                detailsElement.innerHTML =`
                <h1>${product.title}</h1>
                <img src="${product.images[0].src}">
                `;
            } else {
                detailsElement.textContent = 'flower is not found';
            }

    }
    
};

displayProductsDetails();