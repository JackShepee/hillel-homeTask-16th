const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];
let currentIndex = 0;

const imageElement = document.getElementById("image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

function updateImage() {
  imageElement.classList.add("image-hidden");
  setTimeout(() => {
    imageElement.src = "images/" + images[currentIndex];
    imageElement.classList.remove("image-hidden");
  }, 300);
  prevButton.hidden = currentIndex === 0;
  nextButton.hidden = currentIndex === images.length - 1;
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
});

updateImage();
