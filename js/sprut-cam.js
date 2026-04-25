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

const galleryContainer = document.getElementById("sprutCamGallery");
const modulesContainer = document.getElementById("sprutCamModulesGrid");
const robotContainer = document.getElementById("sprutCamRobotGrid");

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
