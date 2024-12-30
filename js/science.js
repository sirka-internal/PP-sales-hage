document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("science-amanita-wrap");
  const prevBtn = document.getElementById("science-prevBtn");
  const nextBtn = document.getElementById("science-nextBtn");
  const cardWidthMobile = 344; // Фіксована ширина картки
  const cardWidthDesktop = 556;
  let currentIndex = 0; // Поточний індекс карток

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
    //  console.log("containerWidth", containerWidth )
     
      // const totalCards = cardsContainer.children.length; // Загальна кількість карток
      const visibleCardsCount = window.innerWidth <= 1339 ? Math.floor(containerWidth / cardWidthMobile) : Math.floor(containerWidth / cardWidthDesktop); // Кількість карток, що поміщаються
      // console.log("visibleCardsCount", visibleCardsCount)
      
      const maxIndex = Math.max(0, totalCards - visibleCardsCount - 1); // Максимальний індекс прокрутки
      const offset = window.innerWidth <= 1339 ? currentIndex * cardWidthMobile : currentIndex * cardWidthDesktop; // Зсув для прокрутки
console.log("offset", offset)
      console.log("maxIndex:", maxIndex, "currentIndex:", currentIndex);

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
      const visibleCardsCount = window.innerWidth <= 1339 ? Math.floor(containerWidth / cardWidthMobile) : Math.floor(containerWidth / cardWidthDesktop); // Кількість видимих карток
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