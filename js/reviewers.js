document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("real-results-cards");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const cardWidthMobile = 359; // Ширина картки для мобільної версії
    const cardWidthDesktop = 448; // Ширина картки для десктопної версії
    let currentIndex = 0; // Поточний індекс карток
  
    // Завантаження даних з JSON
    fetch("js/reviewers-data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((reviewersData) => {
        reviewersData.forEach((reviewer) => {
          const cardHTML = `
            <div class="real-results-card">
              <span class="real-results-star"></span>
              <div class="real-results-reviewer">
                <img src="${reviewer.image}" alt="${reviewer.name}" class="real-results-reviewer-image">
                <div class="real-results-reviewer-wrap">
                  <p class="real-results-reviewer-name">${reviewer.name}</p>
                  <span class="real-results-reviewer-verified">
                    <img src="${reviewer.verifiedIcon}" alt="check" class="real-results-reviewer-verified-icon">
                    <p>Verified Buyer</p>
                  </span>
                </div>
              </div>
              <h3 class="real-results-heading">${reviewer.heading}</h3>
              <p class="real-results-text">${reviewer.text}</p>
            </div>
          `;
          cardsContainer.innerHTML += cardHTML;
        });
  
        // Додаємо зірочки після рендерингу карток
        addStars();
  
        // Отримуємо загальну кількість карток
        const totalCards = reviewersData.length;
  
        // Оновлюємо ширину контейнера карток для мобільної та десктопної версії
        const totalWidthMobile = totalCards * cardWidthMobile;
        const totalWidthDesktop = totalCards * cardWidthDesktop;
  
        // Установимо ширину залежно від ширини екрану
        cardsContainer.style.width = `${window.innerWidth <= 1339 ? totalWidthMobile : totalWidthDesktop}px`;
  
        // Отримуємо контейнер для карток
        const cardsWrapper = document.querySelector(".real-results-cards-wrapper");
  
        // Перевірка на наявність контейнера
        if (!cardsWrapper) {
          console.error("Element with class 'real-results-cards-wrapper' not found");
          return;
        }
  
        // Функція для оновлення видимих карток
        function updateVisibleCards() {
          const containerWidth = cardsWrapper.offsetWidth; // Отримуємо ширину контейнера
          const cardWidth = window.innerWidth <= 1339 ? cardWidthMobile : cardWidthDesktop; // Вибір ширини картки в залежності від екрану
          const visibleCardsCount = Math.floor(containerWidth / cardWidth); // Розраховуємо кількість карток, які поміщаються в контейнер
          const maxIndex = window.innerWidth <= 1339 ? Math.max(0, totalCards - visibleCardsCount - 1) : Math.max(0, totalCards - visibleCardsCount); // Зменшуємо на 1 для запобігання порожнього простору
          const offset = currentIndex * cardWidth;
  // console.log("maxIndex", maxIndex)
  // console.log("offset", offset)
          // Прокрутка контейнера по X осі
          cardsContainer.style.transform = `translateX(-${offset}px)`;
  
          // Оновлюємо кнопки: якщо немає карток для прокрутки, робимо їх неактивними
          if (currentIndex === 0) {
            prevBtn.classList.add("disabled");
          } else {
            prevBtn.classList.remove("disabled");
          }
  
          // Якщо прокрутка досягла кінця карток, робимо кнопку неактивною
          if (currentIndex >= maxIndex) {
            nextBtn.classList.add("disabled");
          } else {
            nextBtn.classList.remove("disabled");
          }
        }
  
        // Обробка натискання кнопок
        prevBtn.addEventListener("click", () => {
          if (currentIndex > 0) {
            currentIndex--;
            updateVisibleCards();
          }
        });
  
        nextBtn.addEventListener("click", () => {
          const containerWidth = cardsWrapper.offsetWidth;
          const cardWidth = window.innerWidth <= 1339 ? cardWidthMobile : cardWidthDesktop; // Вибір ширини картки
          const visibleCardsCount = Math.floor(containerWidth / cardWidth); // Розраховуємо кількість карток, які можна прокручувати
          const maxIndex = window.innerWidth <= 1339 ? Math.max(0, totalCards - visibleCardsCount - 1) : Math.max(0, totalCards - visibleCardsCount); // Зменшуємо на 1 для запобігання порожнього простору
  
          if (currentIndex < maxIndex) {
            console.log("next click")
            console.log("currentIndex", currentIndex)
            console.log("maxIndex", maxIndex)
            currentIndex++;
            updateVisibleCards();
          }
        });
  
        // Ініціалізуємо видимі картки
        updateVisibleCards();
  
        // Оновлюємо видимі картки при зміні розміру вікна
        window.addEventListener("resize", () => {
          updateVisibleCards();
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        cardsContainer.innerHTML = `<p>Unable to load reviews. Please try again later.</p>`;
      });
  });
  
  // Функція додавання зірочок
  function addStars() {
    const starContainers = document.querySelectorAll(".real-results-star");
    const starsCount = 5; // Кількість зірок для додавання
  
    starContainers.forEach((starsWrap) => {
      if (starsWrap.querySelector("img")) return;
  
      const starsSpan = document.createElement("span");
  
      for (let i = 0; i < starsCount; i++) {
        const starImg = document.createElement("img");
        starImg.src = "assets/svg/star.svg"; // Шлях до зображення зірки
        starImg.alt = "stars"; // Альтернативний текст
        starsSpan.appendChild(starImg);
      }
  
      starsWrap.appendChild(starsSpan);
    });
  }