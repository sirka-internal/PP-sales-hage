document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("tribe-members");
  const prevBtn = document.getElementById("tribe-prevBtn");
  const nextBtn = document.getElementById("tribe-nextBtn");
  const cardWidth = 344; // Фіксована ширина картки
  let currentIndex = 0; // Поточний індекс карток

  // Функція для оновлення видимих карток
  function updateVisibleCards() {
      const cardsWrap = document.querySelector(".tribe-member");
      if (!cardsWrap) {
          console.error("Element with class 'tribe-member' not found");
          return;
      }

      const totalCards = cardsContainer?.children.length || 0; // Загальна кількість карток
      if (totalCards === 0) {
          console.error("No cards found in the container.");
          return;
      }


      const containerWidth = cardsWrap.offsetWidth; // Ширина видимого контейнера
    //  console.log("containerWidth", containerWidth )
     
      // const totalCards = cardsContainer.children.length; // Загальна кількість карток
      const visibleCardsCount = Math.floor(containerWidth / cardWidth); // Кількість карток, що поміщаються
      // console.log("visibleCardsCount", visibleCardsCount)
      
      const maxIndex = Math.max(0, totalCards - visibleCardsCount - 1); // Максимальний індекс прокрутки
      const offset = currentIndex * cardWidth; // Зсув для прокрутки
// console.log("offset", offset)
    //   console.log("maxIndex:", maxIndex, "currentIndex:", currentIndex);

      // Прокрутка контейнера по X осі
      cardsContainer.style.transform = `translateX(-${offset}px)`;

      // Оновлення стану кнопок
      prevBtn.classList.toggle("disabled", currentIndex === 0);
      nextBtn.classList.toggle("disabled", currentIndex >= maxIndex);
  }

  // Обробка натискання кнопок
  prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateVisibleCards();
      }
  });

  nextBtn.addEventListener("click", () => {
      const cardsWrapper = document.querySelector(".tribe-member");
      const containerWidth = cardsWrapper.offsetWidth; // Ширина видимого контейнера
      const totalCards = cardsContainer.children.length; // Загальна кількість карток
      const visibleCardsCount = Math.floor(containerWidth / cardWidth); // Кількість видимих карток
      const maxIndex = Math.max(0, totalCards - visibleCardsCount - 1); // Максимальний індекс прокрутки
      console.log("maxIndex:", maxIndex, "currentIndex:", currentIndex);
      if (currentIndex < maxIndex) {
          currentIndex++;
          updateVisibleCards();
      }
  });

  // Ініціалізація видимих карток
  updateVisibleCards();

  // Оновлення при зміні розміру вікна
  window.addEventListener("resize", updateVisibleCards);
});


//////////////////////////

// document.addEventListener("DOMContentLoaded", () => {
//   const cardsContainer = document.getElementById("tribe-members");
//   const prevBtn = document.getElementById("tribe-prevBtn");
//   const nextBtn = document.getElementById("tribe-nextBtn");
//   const cardWidthMobile = 359; // Ширина картки для мобільної версії
//   const cardWidthDesktop = 448; // Ширина картки для десктопної версії
//   let currentIndex = 0; // Поточний індекс карток
//   console.log("totalCards", cardsContainer)
//   // Отримуємо всі картки
//   const totalCards = cardsContainer.children.length;
// console.log("totalCards", totalCards)
//   // Оновлюємо ширину контейнера карток для мобільної та десктопної версії
//   const totalWidthMobile = totalCards * cardWidthMobile;
//   const totalWidthDesktop = totalCards * cardWidthDesktop;

//   // Установимо ширину залежно від ширини екрану
//   cardsContainer.style.width = `${window.innerWidth <= 1339 ? totalWidthMobile : totalWidthDesktop}px`;

//   // Отримуємо контейнер для карток
//   const cardsWrapper = document.querySelector(".tribe-member");

//   // Перевірка на наявність контейнера
//   if (!cardsWrapper) {
//       console.error("Element with class 'real-results-cards-wrapper' not found");
//       return;
//   }

//   // Функція для оновлення видимих карток
//   function updateVisibleCards() {
//       const containerWidth = cardsWrapper.offsetWidth; // Отримуємо ширину контейнера
//       const cardWidth = window.innerWidth <= 1339 ? cardWidthMobile : cardWidthDesktop; // Вибір ширини картки в залежності від екрану
//       const visibleCardsCount = Math.floor(containerWidth / cardWidth); // Розраховуємо кількість карток, які поміщаються в контейнер
//       const maxIndex = window.innerWidth <= 1339 ? Math.max(0, totalCards - visibleCardsCount - 1) : Math.max(0, totalCards - visibleCardsCount); // Зменшуємо на 1 для запобігання порожнього простору
//       const offset = currentIndex * cardWidth;

//       // Прокрутка контейнера по X осі
//       cardsContainer.style.transform = `translateX(-${offset}px)`;

//       // Оновлюємо кнопки: якщо немає карток для прокрутки, робимо їх неактивними
//       if (currentIndex === 0) {
//           prevBtn.classList.add("disabled");
//       } else {
//           prevBtn.classList.remove("disabled");
//       }

//       // Якщо прокрутка досягла кінця карток, робимо кнопку неактивною
//       if (currentIndex >= maxIndex) {
//           nextBtn.classList.add("disabled");
//       } else {
//           nextBtn.classList.remove("disabled");
//       }
//   }

//   // Обробка натискання кнопок
//   prevBtn.addEventListener("click", () => {
//       if (currentIndex > 0) {
//           currentIndex--;
//           updateVisibleCards();
//       }
//   });

//   nextBtn.addEventListener("click", () => {
//       const containerWidth = cardsWrapper.offsetWidth;
//       const cardWidth = window.innerWidth <= 1339 ? cardWidthMobile : cardWidthDesktop; // Вибір ширини картки
//       const visibleCardsCount = Math.floor(containerWidth / cardWidth); // Розраховуємо кількість карток, які можна прокручувати
//       const maxIndex = window.innerWidth <= 1339 ? Math.max(0, totalCards - visibleCardsCount - 1) : Math.max(0, totalCards - visibleCardsCount); // Зменшуємо на 1 для запобігання порожнього простору

//       if (currentIndex < maxIndex) {
//           currentIndex++;
//           updateVisibleCards();
//       }
//   });

//   // Ініціалізуємо видимі картки
//   updateVisibleCards();

//   // Оновлюємо видимі картки при зміні розміру вікна
//   window.addEventListener("resize", () => {
//       updateVisibleCards();
//   });
// });

////////////////////////////
