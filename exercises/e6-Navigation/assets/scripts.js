const backToTopBtn = document.querySelector(".top");

function showHideBackToTopBtn() {
  if (window.pageYOffset > 100) {
    backToTopBtn.style.opacity = "1";
  } else {
    backToTopBtn.style.opacity = "0";
  }
}

function scrollToTop() {
  const currentPosition = window.pageYOffset;

  if (currentPosition === 0) {
    return;
  } else {
    window.scrollTo(0, currentPosition - currentPosition / 7);
    window.requestAnimationFrame(scrollToTop);
  }
}

window.addEventListener("scroll", showHideBackToTopBtn);

backToTopBtn.addEventListener("click", (event) => {
  event.preventDefault();
  scrollToTop();
});
