function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  const popup = document.getElementById("passwordPopup");
  const mainContent = document.getElementById("mainContent");
  const wrongMessage = document.getElementById("wrongMessage");

  if(password === "Princess082705") {
  popup.style.display = "none";
  mainContent.style.display = "block";

  // SHOW start screen
  document.getElementById("startScreen").style.display = "flex";
}

}

// MEMORIES (placeholder images)
const memories = {
  pool: [
    "images/seaside1.jpeg",
    "images/seaside2.jpeg",
    "images/seaside3.jpeg",
    "images/seaside4.jpeg",
    "images/seaside5.jpeg"
  ],
  beach: [
    "images/ocean1.jpeg.jpeg",
    "images/ocean2.jpeg.jpeg",
    "images/ocean3.jpeg.jpeg",
    "images/ocean4.jpeg.jpeg",
    "images/ocean5.jpeg.jpeg"
  ],
  cafe: [
    "images/pool1.jpeg",
    "images/pool2.jpeg",
    "images/pool3.jpeg",
    "images/pool4.jpeg",
    "images/pool5.jpeg"
  ],
  home: [
    "images/arcade1.jpeg",
    "images/arcade2.jpeg",
    "images/arcade3.jpeg",
    "images/arcade4.jpeg",
    "images/arcade5.jpeg"
  ]
};

const memoryMessages = {
  "images/seaside1.jpeg": "The day we are so Crave of Ramen",
  "images/seaside2.jpeg": "My very First Expensive Sangyup with you, Thanks.   Lots of loving you",
  "images/seaside3.jpeg": "Our First visit and eat sizzlers",
  "images/seaside4.jpeg": "Let's Order Ramen >O<. Our favorite Food and Snack",
  "images/seaside5.jpeg": "I miss this moment",

  "images/ocean1.jpeg.jpeg": "I am always there for YOU. Big Memories at Ocean Park",
  "images/ocean2.jpeg.jpeg": "The Bigger smile that I will never forget",
  "images/ocean3.jpeg.jpeg": "I felt warmer with you",
  "images/ocean4.jpeg.jpeg": "My most beautiful princess, I've ever seen",
  "images/ocean5.jpeg.jpeg": "I would rather follow your orders, than a Parrot",

  "images/pool1.jpeg": "Pool Night that is hard to forget",
  "images/pool2.jpeg": "Staring at you, makes my Life more beautiful forever",
  "images/pool3.jpeg": "The mirror shows me… but my heart only sees you",
  "images/pool4.jpeg": "Sexiest Part through the Night",
  "images/pool5.jpeg": "This is the ring you gave me. I always cherish it. I love you so much",

  "images/arcade1.jpeg": "No prizes can beat having you",
  "images/arcade2.jpeg": "The day we've won lots of rewards",
  "images/arcade3.jpeg": "I remember, you've won Jackpot, Hundreds of tickets pop-out ",
  "images/arcade4.jpeg": "I hate this Game AHHAHA",
  "images/arcade5.jpeg": "We might’ve got the reward, but you’re still my MVP."
};



// OPEN GALLERY
function openGallery(type) {
  const gallery = document.getElementById("galleryPopup");
  const imagesContainer = document.getElementById("galleryImages");

  imagesContainer.innerHTML = ""; // clear old images

  memories[type].forEach(src => {
    const img = document.createElement("img");
    img.src = src;

    img.onclick = () => openMemory(src);

    imagesContainer.appendChild(img);
  });

  gallery.style.display = "flex";
}


// CLOSE GALLERY
function closeGallery(){
  document.getElementById("galleryPopup").style.display = "none";
}

function openMemory(src) {
  const popup = document.getElementById("memoryPopup");
  const img = document.getElementById("memoryImage");
  const text = document.getElementById("memoryText");
  
  img.src = src;
  text.textContent = memoryMessages[src] || "This memory means a lot to me ❤️";

  popup.style.display = "flex";
}

function closeMemory() {
  document.getElementById("memoryPopup").style.display = "none";
}



const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');
const bgMusic = document.getElementById('bgMusic');
const passwordPopup = document.getElementById('passwordPopup');

startButton.addEventListener('click', () => {
  startScreen.style.display = 'none';
  bgMusic.volume = 0.5;
  bgMusic.play().catch(err => console.log(err));
});

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.toggle("open");
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const size = Math.random() * 15 + 10; // 10px - 25px
  heart.style.width = size + 'px';
  heart.style.height = size + 'px';

  // Random horizontal start position
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = window.innerHeight + 'px'; // start from bottom

  // Random horizontal shift
  const horizontalShift = (Math.random() * 100 - 50) + 'px';
  heart.style.setProperty('--xShift', horizontalShift);

  // Random float duration
  const duration = Math.random() * 5 + 5; // 5s to 10s
  heart.style.animationDuration = duration + 's';

  document.querySelector('.hearts-container').appendChild(heart);

  // Remove heart after animation
  setTimeout(() => heart.remove(), duration * 1000);
}

// Spawn 5 hearts every 30 seconds
function spawnHeartsBatch() {
  for (let i = 0; i < 20; i++) {
    createHeart();
  }
}

// Start hearts after clicking Start
startButton.addEventListener('click', () => {
  startScreen.style.display = 'none';
  bgMusic.volume = 0.5;
  bgMusic.play().catch(err => console.log(err));

  // Spawn first 20 hearts immediately
  spawnHeartsBatch();

  // Then spawn 20 hearts every 10 seconds
  setInterval(spawnHeartsBatch, 30000); // 10000ms = 10s
});



// Start hearts **after clicking Start**
startButton.addEventListener('click', () => {
  startScreen.style.display = 'none';
  bgMusic.volume = 0.5;
  bgMusic.play().catch(err => console.log(err));

  // Spawn first 5 hearts immediately
  spawnHeartsBatch();

  // Then spawn 5 hearts every 10 seconds
  setInterval(spawnHeartsBatch, 30000); // 10000ms = 10 seconds
});

// Christmas Button
const christmasBtn = document.getElementById('christmasBtn');
const christmasPopup = document.getElementById('christmasPopup');

christmasBtn.addEventListener('click', () => {
  christmasPopup.style.display = 'flex';
});

// Continuous snow
function createSnowflake() {
  const snow = document.createElement('div');
  snow.classList.add('snowflake');

  snow.style.left = Math.random() * window.innerWidth + 'px';
  const size = Math.random() * 6 + 4; // 4px - 10px
  snow.style.width = size + 'px';
  snow.style.height = size + 'px';

  const duration = Math.random() * 5 + 5; // 5s - 10s
  snow.style.animationDuration = duration + 's';

  document.body.appendChild(snow);

  setTimeout(() => snow.remove(), duration * 1000);
}

// Spawn snowflakes continuously
setInterval(createSnowflake, 200);

// Click anywhere to close Christmas popup
christmasPopup.addEventListener('click', () => {
  christmasPopup.style.display = 'none';
});

