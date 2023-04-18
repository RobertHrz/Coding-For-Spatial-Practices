document.querySelectorAll("#gallery .image-container img").forEach((image) => {
    image.addEventListener("click", () => {
        openLightbox(image);
    });
});

document.getElementById("close-lightbox").addEventListener("click", closeLightbox);
document.getElementById("lightbox").addEventListener("click", closeLightbox);

function openLightbox(image) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");

    lightboxImage.src = image.src;
    lightboxCaption.innerText = image.dataset.caption;

    lightbox.classList.remove("hidden");
