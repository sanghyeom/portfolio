import "bootstrap/dist/js/bootstrap.bundle.min.js";
import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import initHeroMatterStacks from "./scripts/heroMatterStacks";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import projectFallbackImage from "./assets/project.jpg";
import gridsolImage from "./assets/gridsol/gridsol.jpg";
import ddibCoverImage from "./assets/ddib/ddib.jpg";
import ddibImage1 from "./assets/ddib/ddib_1.png";
import ddibImage2 from "./assets/ddib/ddib_2.png";
import ddibImage3 from "./assets/ddib/ddib_3.png";
import ddibImage4 from "./assets/ddib/ddib_4.png";
import ddibImage5 from "./assets/ddib/ddib_5.png";
import ddibImage6 from "./assets/ddib/ddib_6.png";
import ddibImage7 from "./assets/ddib/ddib_7.png";
import ddibImage8 from "./assets/ddib/ddib_8.png";
import pollinImage from "./assets/pollin.png";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initHeroMatterStacks();

const imageAssetMap = {
  "assets/project.jpg": projectFallbackImage,
  "assets/gridsol/gridsol.jpg": gridsolImage,
  "assets/ddib/ddib.jpg": ddibCoverImage,
  "assets/ddib/ddib_1.png": ddibImage1,
  "assets/ddib/ddib_2.png": ddibImage2,
  "assets/ddib/ddib_3.png": ddibImage3,
  "assets/ddib/ddib_4.png": ddibImage4,
  "assets/ddib/ddib_5.png": ddibImage5,
  "assets/ddib/ddib_6.png": ddibImage6,
  "assets/ddib/ddib_7.png": ddibImage7,
  "assets/ddib/ddib_8.png": ddibImage8,
  "assets/pollin.png": pollinImage,
};

const resolveGalleryImageSrc = (src) => {
  const normalizedSrc = src.trim().replace(/\\/g, "/").replace(/^\/+/, "");
  return imageAssetMap[normalizedSrc] || src;
};

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

    const items =
      images.length > 0 ? images.map(resolveGalleryImageSrc) : [projectFallbackImage];

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
