// script.js

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg',
        'image9.jpg',
        'image10.jpg'
    ];

    const gallery = document.getElementById('gallery');

    // Shuffle array function (Fisher-Yates shuffle algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Shuffle images array
    const shuffledImages = shuffleArray(images);

    // Display shuffled images
    shuffledImages.slice(0, 10).forEach(image => {
        const imageElement = document.createElement('div');
        imageElement.classList.add('image');
        imageElement.innerHTML = `<img src="${image}" alt="Memory">`;
        gallery.appendChild(imageElement);
    });
});
