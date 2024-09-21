// Custom cursor
const cursor = document.getElementById('customCursor');
    
document.addEventListener('mousemove', (e) => {
    cursor.style.display = 'block';
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.addEventListener('mouseout', () => {
    cursor.style.display = 'none'; // Hide the cursor when mouse leaves
});

// Function to generate raindrops
function generateRaindrops() {
    const raindropContainer = document.getElementById('raindrops');
    raindropContainer.innerHTML = ''; // Clear any existing raindrops

    const numRaindrops = 100; // Number of raindrops

    for (let i = 0; i < numRaindrops; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        raindrop.style.left = Math.random() * 100 + 'vw';
        raindrop.style.top = Math.random() * -100 + 'vh'; // Start above the viewport
        raindrop.style.animationDuration = Math.random() * 2 + 3 + 's'; // Random fall duration
        raindrop.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity
        raindropContainer.appendChild(raindrop);
    }
}

// Call the function to generate raindrops
generateRaindrops();

function openSearch() {
    let searchContainer = document.querySelector('.search-container');
    let content = document.querySelector('.content');
    let topBanner = document.querySelector('.top-banner');
    
    if (!searchContainer) {
        // Create the search container if it doesn't exist
        searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';

        // Add search input and button to the container
        searchContainer.innerHTML = `
            <div style="display: flex; justify-content: center; align-items: center;">
                <input type="text" class="search-input" placeholder="Search..." style="background-color: #080010; color: #fff; width: 40%; padding: 10px; border-radius: 5px; border: 1px solid #ccc; margin-right: 10px; font-size: 25px; margin-top: 0.9%;">
                <button onclick="performSearch()" style="width: 10%; padding: 10px; border: 2px solid #000; border-radius: 5px; background-color: #ff8000; color: #fff; cursor: pointer; font-size: 25px; margin-top: 0.9%;">Search</button>
            </div>
        `;

        // Append the container to the body
        document.body.appendChild(searchContainer);

        // Add event listener for Enter key
        const searchInput = searchContainer.querySelector('.search-input');
        searchInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }

    // Toggle the visibility of the search container and adjust the content margin
    if (searchContainer.style.display === 'block') {
        searchContainer.style.display = 'none';
        content.style.marginTop = '0'; // Reset margin
        topBanner.style.display = 'block'; // Show top banner
    } else {
        searchContainer.style.display = 'block';
        content.style.marginTop = '100px'; // Adjust margin
        topBanner.style.display = 'none'; // Hide top banner
    }
}

function performSearch() {
    const query = document.querySelector('.search-input').value.trim().toLowerCase();
    const error404 = document.querySelector('.error-404');
    
    if (query) {
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query)
        );
    } else {
        filteredProducts = products; // Reset to all products if search is empty
    }

    // Check if there are any filtered products
    if (filteredProducts.length === 0) {
        error404.style.display = 'block'; // Show error message
        document.getElementById('product-list').innerHTML = ''; // Clear product list
    } else {
        error404.style.display = 'none'; // Hide error message
        renderProducts(currentPage, filteredProducts);
    }

    // Update pagination
    updatePagination(currentPage, filteredProducts.length);
}

const products = [
    { id: 1, name: 'Product 1', price: '$19.99', rating: 4.5, img: 'product1.png' },
    { id: 2, name: 'Product 2', price: '$29.99', rating: 4.0, img: 'product2.png' },
    { id: 3, name: 'Product 3', price: '$39.99', rating: 3.5, img: 'product3.png' },
    { id: 4, name: 'Product 4', price: '$49.99', rating: 5.0, img: 'product4.png' },
    { id: 5, name: 'Product 5', price: '$59.99', rating: 4.2, img: 'product5.png' },
    { id: 6, name: 'Product 6', price: '$69.99', rating: 4.8, img: 'product6.png' },
    { id: 7, name: 'Product 7', price: '$79.99', rating: 4.3, img: 'product7.png' },
    { id: 8, name: 'Product 8', price: '$89.99', rating: 4.6, img: 'product8.png' },
    { id: 9, name: 'Product 9', price: '$99.99', rating: 3.9, img: 'product9.png' },
    { id: 10, name: 'Product 10', price: '$109.99', rating: 4.7, img: 'product10.png' },
    { id: 11, name: 'Product 11', price: '$109.99', rating: 4.7, img: 'product11.png' },
    { id: 12, name: 'Product 12', price: '$109.99', rating: 4.7, img: 'product12.png' },
    { id: 13, name: 'Product 13', price: '$109.99', rating: 4.7, img: 'product13.png' },
    { id: 14, name: 'Product 14', price: '$109.99', rating: 4.7, img: 'product14.png' },
    { id: 15, name: 'Product 15', price: '$109.99', rating: 4.7, img: 'product15.png' },
    { id: 16, name: 'Product 16', price: '$109.99', rating: 4.7, img: 'product16.png' },
    { id: 17, name: 'Product 17', price: '$109.99', rating: 4.7, img: 'product17.png' },
    { id: 18, name: 'Product 18', price: '$109.99', rating: 4.7, img: 'product18.png' }
];

const itemsPerPage = 6; // Number of items per page
let currentPage = 1; // Default page number
let filteredProducts = products; // Initialize filteredProducts with all products

function renderProducts(page, productsList) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = productsList.slice(start, end);

    paginatedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <div class="product-item" data-name="${product.name.replace(/\s+/g, '').toLowerCase()}" data-id="${product.id}">
                <img src="${product.img}" alt="${product.name}" class="product-img">
                <div class="product-info">
                    <div class="product-title">${product.name}</div>
                    <div class="product-price">${product.price}</div>
                    <div class="product-rating">
                        ${generateStars(product.rating)}
                    </div>
                    <button class="product-add-to-cart-btn">Add to Cart</button>
                </div>
            </div>
        `;
        productList.appendChild(productDiv);

        // Add click event listener to the product-item div
        productDiv.querySelector('.product-item').addEventListener('click', () => {
            window.location.href = `${product.name.replace(/\s+/g, '').toLowerCase()}.html`;
        });
    });

    updatePagination(page, productsList.length);
}

function generateStars(rating) {
    const fullStar = '★';
    const emptyStar = '☆';
    let stars = '';

    // Add full stars
    for (let i = 0; i < Math.floor(rating); i++) {
        stars += fullStar;
    }

    // Add empty stars
    for (let i = Math.floor(rating); i < 5; i++) {
        stars += emptyStar;
    }

    return stars;
}

function updatePagination(currentPage, totalProducts) {
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const pageLinksContainer = document.querySelector('.pagination');
    const error404 = document.querySelector('.error-404');
    pageLinksContainer.innerHTML = ''; // Clear existing pagination links

    // Only show pagination if there are multiple pages
    if (totalPages > 1) {
        const prevLink = document.createElement('a');
        prevLink.id = 'prev-page';
        prevLink.href = '#';
        prevLink.textContent = 'Prev';
        prevLink.classList.add('page-link');
        pageLinksContainer.appendChild(prevLink);

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.id = `page-${i}`;
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.classList.add('page-link');
            if (i === currentPage) {
                pageLink.classList.add('active');
            }
            pageLinksContainer.appendChild(pageLink);
        }

        const nextLink = document.createElement('a');
        nextLink.id = 'next-page';
        nextLink.href = '#';
        nextLink.textContent = 'Next';
        nextLink.classList.add('page-link');
        pageLinksContainer.appendChild(nextLink);

        prevLink.classList.toggle('disabled', currentPage === 1);
        nextLink.classList.toggle('disabled', currentPage === totalPages);

        // Add event listeners
        prevLink.removeEventListener('click', handlePrevClick); // Remove previous event listener
        prevLink.addEventListener('click', handlePrevClick); // Add new event listener

        nextLink.removeEventListener('click', handleNextClick); // Remove previous event listener
        nextLink.addEventListener('click', handleNextClick); // Add new event listener

        document.querySelectorAll('.pagination .page-link:not(.disabled)').forEach(link => {
            link.removeEventListener('click', handlePageClick); // Remove previous event listener
            link.addEventListener('click', handlePageClick); // Add new event listener
        });

        // Show pagination container only if there are pagination links
        pageLinksContainer.style.display = totalPages > 1 ? 'flex' : 'none';
    } else {
        // Hide pagination container if there is only one page
        pageLinksContainer.style.display = 'none';
    }

    // Adjust the position of the error message based on pagination visibility
    if (pageLinksContainer.style.display === 'none') {
        error404.style.marginTop = '150px'; // Move down by 100px
    } else {
        error404.style.marginTop = '0'; // Reset margin
    }
}

function handlePageClick(e) {
    e.preventDefault();
    const page = parseInt(e.target.id.replace('page-', ''));
    if (!isNaN(page) && page !== currentPage) {
        console.log('Page clicked:', page); // Debugging line
        currentPage = page;
        renderProducts(page, filteredProducts);
        window.history.replaceState(null, '', `?page=${page}`);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

function handlePrevClick(e) {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        renderProducts(currentPage, filteredProducts);
        window.history.replaceState(null, '', `?page=${currentPage}`);
    }
}

function handleNextClick(e) {
    e.preventDefault();
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderProducts(currentPage, filteredProducts);
        window.history.replaceState(null, '', `?page=${currentPage}`);
    }
}

function openCart() {
    window.location.href = "cart.html";
}

// Initialize the page and render products
function init() {
    const urlParams = new URLSearchParams(window.location.search);
    currentPage = parseInt(urlParams.get('page')) || 1;
    console.log('Initialized page:', currentPage); // Debugging line
    renderProducts(currentPage, filteredProducts);
}

// Store the current URL in sessionStorage before navigating to the cart
sessionStorage.setItem('previousPage', window.location.href);

init();