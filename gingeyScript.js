// script.js

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    
    // Function to fetch images from a folder
    function fetchImages(folderPath, numImages) {
        for (let i = 1; i <= numImages; i++) {
            const imageElement = document.createElement('div');
            imageElement.classList.add('image');
            const imageUrl = `${folderPath}/image${i}.jpg`; // Assuming images are named image1.jpg, image2.jpg, etc.
            imageElement.innerHTML = `<img src="${imageUrl}" alt="Memory">`;
            gallery.appendChild(imageElement);
        }
    }

    // Call fetchImages with your folder path and number of images to display
    fetchImages('images', 10); // 'images' is the folder where your images are located, and 10 is the number of images to display
});
