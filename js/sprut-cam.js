const sprutCamGalleryCards = [
  {
    src: "images/sprut-cam/cam-02.png",
    alt: "СПРУТКАМ: G-код и траектория инструмента",
  },
  {
    src: "images/sprut-cam/cam-03.png",
    alt: "СПРУТКАМ: постпроцессор и станок",
  },
  {
    src: "images/sprut-cam/cam-04.png",
    alt: "СПРУТКАМ: интерфейс подготовки обработки",
  },
  {
    src: "images/sprut-cam/cam-05.png",
    alt: "СПРУТКАМ: пятиосевая обработка",
  },
  {
    src: "images/sprut-cam/cam-06.png",
    alt: "СПРУТКАМ: симуляция обработки на станке",
  },
];

const sprutCamModuleCards = [
  {
    src: "images/sprut-cam/modules-cards/module-card-001.png",
    title: "2-3х осевое фрезерование",
  },
  {
    src: "images/sprut-cam/modules-cards/module-card-002.png",
    title: "ВСО и адаптивные стратегии",
  },
  {
    src: "images/sprut-cam/modules-cards/module-card-003.png",
    title: "Ротационная обработка",
  },
  {
    src: "images/sprut-cam/modules-cards/module-card-004.png",
    title: "5х осевое фрезерование",
  },
  {
    src: "images/sprut-cam/modules-cards/module-card-005.png",
    title: "Токарная обработка",
  },
  {
    src: "images/sprut-cam/modules-cards/module-card-006.png",
    title: "Аддитивные и гибридные технологии",
  },
  {
    src: "images/sprut-cam/modules-cards/module-card-007.png",
    title: "Многоосевая резка и обрезка",
  },
  {
    src: "images/sprut-cam/modules-cards/module-card-008.png",
    title: "2-4х электроэрозионная обработка",
  },
  {
    src: "images/sprut-cam/modules-cards/module-card-009.png",
    title: "Токарные автоматы и многоканальные станки",
  },
  {
    src: "images/sprut-cam/modules-cards/module-card-010.png",
    title: "Токарно-фрезерная обработка",
  },
];

const sprutCamRobotCards = [
  {
    title: "Фрезерование",
    description: "3-5D фрезерование с поддержкой внешних осей.",
    src: "images/sprut-cam/robot-cards/robot-card-001.png",
    imageName: "robot-card-001.png",
  },
  {
    title: "Резка",
    description: "5-осевая резка с управлением вектором инструмента.",
    src: "images/sprut-cam/robot-cards/robot-card-002.png",
    imageName: "robot-card-002.png",
  },
  {
    title: "Наплавка",
    description: "3-5D наплавка с контролем толщины слоя.",
    src: "images/sprut-cam/robot-cards/robot-card-003.png",
    imageName: "robot-card-003.png",
  },
  {
    title: "Сварка",
    description: "Простое решение для программирования сварки.",
    src: "images/sprut-cam/robot-cards/robot-card-004.png",
    imageName: "robot-card-004.png",
  },
  {
    title: "Полировка",
    description: "Поддержка подвижного и неподвижного инструмента.",
    src: "images/sprut-cam/robot-cards/robot-card-005.png",
    imageName: "robot-card-005.png",
  },
  {
    title: "Обработка скульптур",
    description: "Черновая и чистовая обработка сложных поверхностей.",
    src: "images/sprut-cam/robot-cards/robot-card-006.png",
    imageName: "robot-card-006.png",
  },
  {
    title: "Pick-and-Place",
    description: "Автоматический обход столкновений в траектории.",
    src: "images/sprut-cam/robot-cards/robot-card-007.png",
    imageName: "robot-card-007.png",
  },
  {
    title: "Дисковый инструмент",
    description: "Обработка сетчатых моделей и сложной геометрии.",
    src: "images/sprut-cam/robot-cards/robot-card-008.png",
    imageName: "robot-card-008.png",
  },
  {
    title: "Резка горячей проволокой",
    description: "Сверлильный съем для обработки пеноматериала.",
    src: "images/sprut-cam/robot-cards/robot-card-009.png",
    imageName: "robot-card-009.png",
  },
];

const sprutCamRobotSupport = {
  machineImageSrc: "images/sprut-cam/robot-support-machine.png",
  machineImageFallbackSrc: "images/sprut-cam/robot-cards/robot-card-002.png",
  machineImageAlt: "СПРУТКАМ Робот: обработка детали",
  logosSourceFallback: "images/sprut-cam/robot-support-logos-source.png",
  logos: [
    {
      name: "Universal Robots",
      src: "images/sprut-cam/robot-brand-logos/logo-001.png",
    },
    { name: "COMAU", src: "images/sprut-cam/robot-brand-logos/logo-002.png" },
    { name: "FANUC", src: "images/sprut-cam/robot-brand-logos/logo-003.png" },
    { name: "KUKA", src: "images/sprut-cam/robot-brand-logos/logo-004.png" },
    { name: "AUBO", src: "images/sprut-cam/robot-brand-logos/logo-005.png" },
    {
      name: "Staubli",
      src: "images/sprut-cam/robot-brand-logos/logo-006.png",
    },
    { name: "EPSON", src: "images/sprut-cam/robot-brand-logos/logo-007.png" },
    {
      name: "Yaskawa",
      src: "images/sprut-cam/robot-brand-logos/logo-008.png",
    },
    {
      name: "Mitsubishi Electric",
      src: "images/sprut-cam/robot-brand-logos/logo-009.png",
    },
    {
      name: "Hyundai",
      src: "images/sprut-cam/robot-brand-logos/logo-010.png",
    },
    {
      name: "Kawasaki",
      src: "images/sprut-cam/robot-brand-logos/logo-011.png",
    },
    { name: "ABB", src: "images/sprut-cam/robot-brand-logos/logo-012.png" },
  ],
};

const galleryContainer = document.getElementById("sprutCamGallery");
const modulesContainer = document.getElementById("sprutCamModulesGrid");
const robotContainer = document.getElementById("sprutCamRobotGrid");
const robotSupportMediaContainer = document.getElementById(
  "sprutCamRobotSupportMedia"
);
const robotLogosSliderContainer = document.getElementById(
  "sprutCamRobotLogosSlider"
);

if (galleryContainer) {
  galleryContainer.innerHTML = sprutCamGalleryCards
    .map(
      ({ src, alt }) => `
        <figure>
          <img src="${src}" alt="${alt}" />
        </figure>
      `
    )
    .join("");
}

if (robotContainer) {
  robotContainer.innerHTML = sprutCamRobotCards
    .map(({ title, src, imageName }) => {
      const mediaMarkup = src
        ? `<img src="${src}" alt="${title}" />`
        : `<div class="sprut-cam-robot-card-placeholder">Добавьте изображение:<br />images/sprut-cam/robot-cards/${imageName}</div>`;

      return `
        <article class="sprut-cam-robot-card">
          <div class="sprut-cam-robot-card-media">${mediaMarkup}</div>
        </article>
      `;
    })
    .join("");
}

if (modulesContainer) {
  modulesContainer.innerHTML = sprutCamModuleCards
    .map(
      ({ src, title }) => `
        <figure>
          <img src="${src}" alt="${title}" />
          <figcaption>${title}</figcaption>
        </figure>
      `
    )
    .join("");
}

if (robotSupportMediaContainer) {
  robotSupportMediaContainer.innerHTML = `
    <img src="${sprutCamRobotSupport.machineImageSrc}" alt="${sprutCamRobotSupport.machineImageAlt}" />
  `;
  const supportImage = robotSupportMediaContainer.querySelector("img");
  if (supportImage) {
    supportImage.addEventListener("error", () => {
      supportImage.src = sprutCamRobotSupport.machineImageFallbackSrc;
      supportImage.addEventListener(
        "error",
        () => {
          robotSupportMediaContainer.innerHTML = `
            <div class="sprut-cam-robot-support-placeholder">
              Добавьте изображение станка:<br />
              images/sprut-cam/robot-support-machine.png
            </div>
          `;
        },
        { once: true }
      );
    });
  }
}

if (robotLogosSliderContainer) {
  const baseItems = sprutCamRobotSupport.logos
    .map(
      ({ name, src }) => `
      <div class="sprut-cam-robot-logo-item" aria-label="${name}">
        <img src="${src}" alt="${name}" />
      </div>
    `
    )
    .join("");

  robotLogosSliderContainer.innerHTML = `
    <div class="sprut-cam-robot-logos-track">
      ${baseItems}
      ${baseItems}
    </div>
  `;

  const logoImages = robotLogosSliderContainer.querySelectorAll("img");
  logoImages.forEach((logoImage) => {
    logoImage.addEventListener("error", () => {
      logoImage.closest(".sprut-cam-robot-logo-item").remove();
    });
  });
}
