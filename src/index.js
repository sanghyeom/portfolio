import "bootstrap/dist/js/bootstrap.bundle.min.js";
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const projectImageModal = document.getElementById("projectImageModal");
const projectCarouselInner = document.getElementById("projectCarouselInner");
const projectGalleryTriggers = document.querySelectorAll(".js-project-gallery-trigger");

projectGalleryTriggers.forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

if (projectImageModal && projectCarouselInner) {
  projectImageModal.addEventListener("show.bs.modal", (event) => {
    const trigger = event.relatedTarget;
    const images = (trigger?.dataset.images || "")
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);

    const items = images.length > 0 ? images : ["assets/project.jpg"];

    projectCarouselInner.innerHTML = items
      .map(
        (src, index) => `
          <div class="carousel-item ${index === 0 ? "active" : ""}">
            <img src="${src}" class="d-block w-100" alt="Project image ${index + 1}" />
          </div>
        `
      )
      .join("");
  });
}
