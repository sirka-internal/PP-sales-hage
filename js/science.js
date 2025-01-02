document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("science-amanita-wrap");
    const prevBtn = document.getElementById("science-prevBtn");
    const nextBtn = document.getElementById("science-nextBtn");
    const dotsContainer = document.getElementById("pagination-dots"); // Контейнер для кружечків
    const cardWidthMobile = 344;
    const cardWidthDesktop = 556;
    let currentIndex = 0;
  
    // Функція для оновлення видимих карток
    function updateVisibleCards() {
      const cardsWrap = document.querySelector(".science-amanita-info");
      if (!cardsWrap) {
        console.error("Element with class 'science-amanita-info' not found");
        return;
      }
      const totalCards = cardsContainer?.children.length || 0; // Загальна кількість карток
      if (totalCards === 0) {
        console.error("No cards found in the container.");
        return;
      }
      const containerWidth = cardsWrap.offsetWidth; // Ширина видимого контейнера
      const visibleCardsCount =
        window.innerWidth <= 1339
          ? Math.floor(containerWidth / cardWidthMobile)
          : Math.floor(containerWidth / cardWidthDesktop); // Кількість карток, що поміщаються
      const maxIndex = window.innerWidth <= 1339 ? Math.max(0, totalCards - visibleCardsCount - 1) : Math.max(0, totalCards - visibleCardsCount); // Максимальний індекс прокрутки
      const offset =
        window.innerWidth <= 1339
          ? currentIndex * cardWidthMobile
          : currentIndex * cardWidthDesktop; // Зсув для прокрутки
  
      // Прокрутка контейнера по X осі
      cardsContainer.style.transform = `translateX(-${offset}px)`;
  
      // Оновлення стану кнопок
      prevBtn.classList.toggle("disabled", currentIndex === 0);
      nextBtn.classList.toggle("disabled", currentIndex >= maxIndex);
  
      // Оновлення активного кружечка
      updateActiveDot();
    }
  
    // Функція для створення кружечків
    function createDots() {
      const totalCards = cardsContainer?.children.length || 0;
      dotsContainer.innerHTML = ""; // Очищуємо попередні кружечки
      for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === currentIndex) dot.classList.add("active"); // Підсвічуємо активний
        dotsContainer.appendChild(dot);
      }
    }
  
    // Функція для оновлення активного кружечка
    function updateActiveDot() {
      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
      });
    }
  
    // Обробка натискання кнопок
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateVisibleCards();
      }
    });
  
    nextBtn.addEventListener("click", () => {
      const cardsWrapper = document.querySelector(".science-amanita-info");
      const containerWidth = cardsWrapper.offsetWidth; // Ширина видимого контейнера
      const totalCards = cardsContainer.children.length; // Загальна кількість карток
      const visibleCardsCount =
        window.innerWidth <= 1339
          ? Math.floor(containerWidth / cardWidthMobile)
          : Math.floor(containerWidth / cardWidthDesktop); // Кількість видимих карток
      const maxIndex = window.innerWidth <= 1339 ? Math.max(0, totalCards - visibleCardsCount - 1) : Math.max(0, totalCards - visibleCardsCount); // Максимальний індекс прокрутки
      if (currentIndex < maxIndex) {
        currentIndex++;
        updateVisibleCards();
      }
    });
  
    // Ініціалізація видимих карток
    updateVisibleCards();
    createDots();
  
    // Оновлення при зміні розміру вікна
    window.addEventListener("resize", () => {
      updateVisibleCards();
      createDots(); // Перегенерувати кружечки, якщо змінилася кількість видимих карток
    });
  });



// document.addEventListener("DOMContentLoaded", () => {
//   const cardsContainer = document.getElementById("science-amanita-wrap");
//   const prevBtn = document.getElementById("science-prevBtn");
//   const nextBtn = document.getElementById("science-nextBtn");
//   const cardWidthMobile = 344;
//   const cardWidthDesktop = 556;
//   let currentIndex = 0;

//   // Функція для оновлення видимих карток
//   function updateVisibleCards() {
//       const cardsWrap = document.querySelector(".science-amanita-info");
//       if (!cardsWrap) {
//           console.error("Element with class 'science-amanita-info' not found");
//           return;
//       }
//       const totalCards = cardsContainer?.children.length || 0; // Загальна кількість карток
//       if (totalCards === 0) {
//           console.error("No cards found in the container.");
//           return;
//       }
//       const containerWidth = cardsWrap.offsetWidth; // Ширина видимого контейнера
//       const visibleCardsCount = window.innerWidth <= 1339 ? Math.floor(containerWidth / cardWidthMobile) : Math.floor(containerWidth / cardWidthDesktop); // Кількість карток, що поміщаються
//       const maxIndex = Math.max(0, totalCards - visibleCardsCount - 1); // Максимальний індекс прокрутки
//       const offset = window.innerWidth <= 1339 ? currentIndex * cardWidthMobile : currentIndex * cardWidthDesktop; // Зсув для прокрутки

//       // Прокрутка контейнера по X осі
//       cardsContainer.style.transform = `translateX(-${offset}px)`;
// console.log("currentIndex", currentIndex)
// console.log("maxIndex", maxIndex)
//       // Оновлення стану кнопок
//       prevBtn.classList.toggle("disabled", currentIndex === 0);
//       nextBtn.classList.toggle("disabled", currentIndex >= maxIndex);
//   }

//   // Обробка натискання кнопок
//   prevBtn.addEventListener("click", () => {
//       if (currentIndex > 0) {
//           currentIndex--;
//           updateVisibleCards();
//       }
//   });

//   nextBtn.addEventListener("click", () => {
//       const cardsWrapper = document.querySelector(".science-amanita-info");
//       const containerWidth = cardsWrapper.offsetWidth; // Ширина видимого контейнера
//       const totalCards = cardsContainer.children.length; // Загальна кількість карток
//       const visibleCardsCount = window.innerWidth <= 1339 ? Math.floor(containerWidth / cardWidthMobile) : Math.floor(containerWidth / cardWidthDesktop); // Кількість видимих карток
//       const maxIndex = Math.max(0, totalCards - visibleCardsCount - 1); // Максимальний індекс прокрутки
//     //   console.log("maxIndex:", maxIndex, "currentIndex:", currentIndex);
//       if (currentIndex < maxIndex) {
//           currentIndex++;
//           updateVisibleCards();
//       }
//   });

//   // Ініціалізація видимих карток
//   updateVisibleCards();

//   // Оновлення при зміні розміру вікна
//   window.addEventListener("resize", updateVisibleCards);
// });

