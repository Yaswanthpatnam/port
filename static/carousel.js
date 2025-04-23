// JavaScript for Carousel Image Rotation
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-image'); // Select all carousel images
    let currentIndex = 0; // Start with the first image

    setInterval(() => {
        // Remove 'active' class from the current image
        images[currentIndex].classList.remove('active');

        // Calculate the index for the next image
        currentIndex = (currentIndex + 1) % images.length;

        // Add 'active' class to the next image
        images[currentIndex].classList.add('active');
    }, 3000); // Change image every 3 seconds
});