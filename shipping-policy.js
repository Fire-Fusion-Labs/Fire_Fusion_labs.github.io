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

function openCart() {
    window.location.href = "cart.html";
}

// Store the current URL in sessionStorage before navigating to the cart
sessionStorage.setItem('previousPage', window.location.href);

function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page')) || 1;
}

init();