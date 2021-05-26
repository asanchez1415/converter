document.querySelectorAll(".accordion__button").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle("accordion__button--active");

    if (button.classList.contains("accordion__button--active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});

/* Carousel */
/* window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 1,
    dots: ".carousel__indicadores",
    draggable: true,
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
  });
}); */
