(() => {
  const methodsGrid = document.getElementById("sprutOkpMethodsGrid");
  const economyGrid = document.getElementById("sprutOkpEconomyGrid");

  if (!methodsGrid || !economyGrid) {
    return;
  }

  const methodCards = [
    {
      image: "images/sprut-okp/methods/method-01.png",
      alt: "Планирование вперед",
      text: "Расчет сроков окончания производства от указанной даты начала производства.",
    },
    {
      image: "images/sprut-okp/methods/method-02.png",
      alt: "Директивное планирование",
      text: "Планирование изготовления заказов с директивно заданными сроками запуска и выпуска по циклограммам.",
    },
    {
      image: "images/sprut-okp/methods/method-03.png",
      alt: "Планирование с учетом загрузки оборудования",
      text: "Вычисление сроков выполнения заказов с учетом других производственных заказов без перегрузки оборудования.",
    },
    {
      image: "images/sprut-okp/methods/method-04.png",
      alt: "Планирование назад",
      text: "Расчет сроков начала производства от указанной даты окончания производства.",
    },
    {
      image: "images/sprut-okp/methods/method-05.png",
      alt: "Планирование по шаблонам",
      text: "Планирование изготовления узлов изделия этапами по шаблону, с директивными сроками запуска и выпуска.",
    },
    {
      image: "images/sprut-okp/methods/method-06.png",
      alt: "Планирование без учета загрузки оборудования",
      text: "Вычисление сроков выполнения заказов без учета других производственных заказов с перегрузкой оборудования более 100%.",
    },
  ];

  const economyColumns = [
    {
      title: "Расчет калькуляций",
      cards: [
        {
          image: "images/sprut-okp/economy/econ-01-normative.png",
          alt: "Нормативная калькуляция",
          text: "На основе ТП и расчетных норм материалов и времени.",
        },
        {
          image: "images/sprut-okp/economy/econ-02-actual.png",
          alt: "Актуальная калькуляция",
          text: "Завершенные работы - по факту и отклонениям, остальные работы - по нормативам.",
        },
        {
          image: "images/sprut-okp/economy/econ-04-factual.png",
          alt: "Фактическая калькуляция",
          text: "Расчет на основе фактов с учетом отклонений.",
        },
      ],
    },
    {
      cards: [
        {
          image: "images/sprut-okp/economy/econ-00-production-plan.png",
          alt: "План производства",
          className: "plan",
        },
        {
          image: "images/sprut-okp/economy/econ-03-salary.png",
          alt: "Расчет базовой части зарплаты",
          text: "Расчет заработной платы исполнителей на основе учетов выполненных работ.",
        },
        {
          image: "images/sprut-okp/economy/econ-05-nzp.png",
          alt: "Расчет НЗП",
          text: "Расчет значений незавершенного производства по предприятию и подразделениям.",
        },
      ],
      middleTitle: "Экономические расчеты",
      middleTitleAfterCard: 0,
    },
    {
      title: "План-фактный анализ",
      cards: [
        {
          image: "images/sprut-okp/economy/econ-06-plan-analysis.png",
          alt: "Анализ плана",
          text: "Анализ выполнения плана по диаграмме Ганта и по печатным формам отчетов.",
        },
        {
          image: "images/sprut-okp/economy/econ-07-deviations.png",
          alt: "Анализ отклонений",
          text: "Анализ причин отклонений: сроки выполнения, Тшк, нормы потребности КиМ, маршруты партий и брака.",
        },
        {
          image: "images/sprut-okp/economy/econ-08-costs.png",
          alt: "Анализ затрат",
          text: "Анализ отклонений по материальным и трудовым затратам по предприятию и подразделениям.",
        },
      ],
    },
  ];

  methodsGrid.innerHTML = methodCards
    .map(
      (card) => `
      <div class="col-lg-4 col-md-6 col-sm-12 sprut-okp-method-col">
        <article class="sprut-okp-method-card">
          <div class="sprut-okp-method-card-media">
            <img src="${card.image}" alt="${card.alt}" />
          </div>
          <p>${card.text}</p>
        </article>
      </div>
    `,
    )
    .join("");

  const renderEconomyCard = (card) => `
    <article class="sprut-okp-economy-card">
      <div class="sprut-okp-economy-card-media">
        <img src="${card.image}" alt="${card.alt}"${
    card.className ? ` class="${card.className}"` : ""
  } />
      </div>
      ${card.text ? `<p>${card.text}</p>` : ""}
    </article>
  `;

  economyGrid.innerHTML = economyColumns
    .map((column) => {
      const cardsMarkup = column.cards
        .map((card, cardIndex) => {
          const cardHtml = renderEconomyCard(card);
          const needsMiddleTitle =
            column.middleTitle && cardIndex === column.middleTitleAfterCard;

          if (!needsMiddleTitle) {
            return cardHtml;
          }

          return `${cardHtml}
            <h3 class="sprut-okp-economy-col-title sprut-okp-economy-col-title-center">
              ${column.middleTitle}
            </h3>`;
        })
        .join("");

      return `
        <div class="col-lg-4 col-md-6 col-sm-12 sprut-okp-economy-col">
          ${
            column.title
              ? `<h3 class="sprut-okp-economy-col-title">${column.title}</h3>`
              : ""
          }
          ${cardsMarkup}
        </div>
      `;
    })
    .join("");
})();
