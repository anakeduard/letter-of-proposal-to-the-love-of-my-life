// Imagens do slideshow
const images = [
  "img1.jpg.jpg",
  "img2.jpg.jpg",
  "img3.jpg.jpg",
  "img4.jpg.jpg",
  "img5.jpg.jpg",
  "img6.jpg.jpg",
  "img7.jpg.jpg",
  "img8.jpg.jpg",
  "img9.jpg.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  index = (index + 1) % images.length;
  slide.src = images[index];
}, 3000); // troca a cada 3 segundos

// Chuva de coração
function createEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.innerText = '💖';

  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.fontSize = Math.random() * 24 + 12 + 'px';
  emoji.style.animationDuration = Math.random() * 2 + 3 + 's';

  document.body.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

setInterval(createEmoji, 300);
