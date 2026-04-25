(() => {
  const galleries = document.querySelectorAll(".modules-gallery");

  galleries.forEach((gallery) => {
    const totalCount = Number(gallery.dataset.totalCount || 0);
    const imagePrefix =
      gallery.dataset.imagePrefix ||
      "images/sprut-tp/modules-cards/module-card-";
    const imageSuffix = gallery.dataset.imageSuffix || ".png";
    const altPrefix = gallery.dataset.altPrefix || "Модуль нормирования ";
    const button = gallery.querySelector("[data-modules-more]");
    const initialCount = Number(gallery.dataset.initialCount || 6);
    const step = Number(gallery.dataset.step || initialCount || 6);

    if (!button) {
      return;
    }

    if (totalCount > 0 && !gallery.querySelector("[data-module-card]")) {
      const cardsMarkup = Array.from({ length: totalCount }, (_, index) => {
        const number = index + 1;
        const fileNumber = String(number).padStart(3, "0");

        return `
          <figure class="module-card" data-module-card>
            <img src="${imagePrefix}${fileNumber}${imageSuffix}" alt="${altPrefix}${number}" />
          </figure>
        `;
      }).join("");

      button.insertAdjacentHTML("beforebegin", cardsMarkup);
    }

    const cards = Array.from(gallery.querySelectorAll("[data-module-card]"));

    if (!cards.length) {
      button.style.display = "none";
      return;
    }

    let visibleCount = Math.min(initialCount, cards.length);

    const render = () => {
      cards.forEach((card, index) => {
        card.classList.toggle("is-hidden", index >= visibleCount);
      });

      if (visibleCount >= cards.length) {
        button.style.display = "none";
      } else {
        button.style.display = "inline-flex";
      }
    };

    button.addEventListener("click", () => {
      visibleCount = Math.min(visibleCount + step, cards.length);
      render();
    });

    render();
  });

})();
