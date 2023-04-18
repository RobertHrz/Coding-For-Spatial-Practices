// document.querySelectorAll("#gallery .image-container img").forEach((image) => {
//     image.addEventListener("click", () => {
//         openLightbox(image);
//     });
// });

// document.getElementById("close-lightbox").addEventListener("click", closeLightbox);
// document.getElementById("lightbox").addEventListener("click", closeLightbox);

// function openLightbox(image) {
//     const lightbox = document.getElementById("lightbox");
//     const lightboxImage = document.getElementById("lightbox-image");
//     const lightboxCaption = document.getElementById("lightbox-caption");

//     lightboxImage.src = image.src;
//     lightboxCaption.innerText = image.dataset.caption;

//     lightbox.classList.remove("hidden");
// }

// function closeLightbox() {
//     document.getElementById("lightbox").style.display = "none";
// }



// document.getElementById("randomPasta").addEventListener("click", showRandomPasta);

// function showRandomPasta() {
//   const pastaCards = document.querySelectorAll(".pasta-card");
//   const randomIndex = Math.floor(Math.random() * pastaCards.length);

//   pastaCards.forEach((card, index) => {
//     if (index === randomIndex) {
//       card.style.display = "flex";
//     } else {
//       card.style.display = "none";
//     }
//   });
// }


document.getElementById("randomPasta").addEventListener("click", showRandomPasta);


function showRandomPasta() {
    const pastaCards = document.querySelectorAll(".pasta-card");
    let selectedCardIndex;
    let counter = 0;
  
    const interval = setInterval(() => {
      if (selectedCardIndex !== undefined) {
        pastaCards[selectedCardIndex].classList.remove("selected-pasta");
      }
      selectedCardIndex = Math.floor(Math.random() * pastaCards.length);
      pastaCards[selectedCardIndex].classList.add("selected-pasta");
      counter++;
  
      if (counter > 20) {
        clearInterval(interval);
        pastaCards[selectedCardIndex].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        // pastaCards[selectedCardIndex].classList.remove("selected-pasta");
      }
    }, 50);
  }
