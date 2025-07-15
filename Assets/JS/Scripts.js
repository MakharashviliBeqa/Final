const images = [
    'Assets/Photos/Test.jpg',
    'Assets/Photos/Test2.jpg',
    'Assets/Photos/Test3.jpg'
];

let currentIndex = 0;
const profileImg = document.getElementById('profileImage');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    profileImg.src = images[currentIndex];
}

setInterval(changeImage, 5000);