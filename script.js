window.addEventListener("load", () => {
  const emblaNode = document.querySelector(".embla");
  const embla = EmblaCarousel(emblaNode, { loop: true, align: "center" });

  let isScrolling = false;

  // Buttons
  window.plusSlides = (n) => {
    if (n > 0) {
      embla.scrollNext();
    } else {
      embla.scrollPrev();
    }
  };

  emblaNode.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    isScrolling = true;

    if (e.deltaX > 0) {
      embla.scrollNext();
    } else if (e.deltaX < 0) {
      embla.scrollPrev();
    }

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  });
});
