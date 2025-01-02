document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.getElementById("how-to-take-images-wrap");
  const prevBtn = document.getElementById("how-to-take-prevBtn");
  const nextBtn = document.getElementById("how-to-take-nextBtn");
  const cardWidth = 343; // Фіксована ширина картки
  let currentIndex = 0; // Поточний індекс карток

  // Функція для оновлення видимих карток
  function updateVisibleCards() {
      const cardsWrap = document.querySelector(".how-to-take-image-wrap");
      if (!cardsWrap) {
          console.error("Element with class 'how-to-take-image-wrap' not found");
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
    //   console.log("visibleCardsCount", visibleCardsCount)
      
      const maxIndex = Math.max(0, totalCards - visibleCardsCount - 1); // Максимальний індекс прокрутки
      const offset = currentIndex * cardWidth; // Зсув для прокрутки

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
      const cardsWrapper = document.querySelector(".how-to-take-image-wrap");
      const containerWidth = cardsWrapper.offsetWidth; // Ширина видимого контейнера
      const totalCards = cardsContainer.children.length; // Загальна кількість карток
      const visibleCardsCount = Math.floor(containerWidth / cardWidth); // Кількість видимих карток
      const maxIndex = Math.max(0, totalCards - visibleCardsCount - 1); // Максимальний індекс прокрутки

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

document.addEventListener("DOMContentLoaded", () => {
    const guaranteeString = document.querySelector('.how-to-take-experience-string-info');
    const item = guaranteeString.firstElementChild;
    let totalWidth = 0;
    const containerWidth = guaranteeString.offsetWidth;
  
    while (totalWidth < containerWidth) {
      const clone = item.cloneNode(true); 
      guaranteeString.appendChild(clone); 
      totalWidth += clone.offsetWidth + 32;
    }
  });