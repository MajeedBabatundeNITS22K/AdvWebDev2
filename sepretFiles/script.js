// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Buy Now button functionality
document.getElementById('buy-now').addEventListener('click', () => {
    window.location.href = 'https://www.telia.fi/kauppa/tuote/samsung-galaxy-s24-ultra-5g';
});
