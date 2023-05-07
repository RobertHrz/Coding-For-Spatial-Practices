
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
