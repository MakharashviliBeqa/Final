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

const reviews = [
    {
        image: "Assets/Photos/d3.svg",
        job: "Graphic Designer",
        name: "Emily Johnson",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.."
    },
    {
        image: "Assets/Photos/d4.svg",
        job: "Web Developer",
        name: "Michael Lee",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.."
    },
    {
        image: "Assets/Photos/d5.svg",
        job: "Product Manager",
        name: "Sarah Connor",
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.."
    }
];

const switcherBtns = document.querySelectorAll('.switcher-btn');
const userImage = document.querySelector('.circle-dashed img');
const userJob = document.querySelector('.user-job');
const userName = document.querySelector('.user-name');
const reviewText = document.querySelector('.review-text.left-text p');

switcherBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        userImage.src = reviews[index].image;
        userJob.textContent = reviews[index].job;
        userName.textContent = reviews[index].name;
        reviewText.textContent = reviews[index].text;
        switcherBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});