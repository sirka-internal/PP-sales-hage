document.addEventListener("DOMContentLoaded", () => {
    const marquee = document.querySelector('.header-wrap');
    const item = marquee.firstElementChild;
  
    // Дублюємо елементи, поки не буде заповнено весь простір
    let totalWidth = 0;
    const containerWidth = marquee.offsetWidth;
  
    while (totalWidth < containerWidth) {
      const clone = item.cloneNode(true); // Клонуємо елемент
      marquee.appendChild(clone); // Додаємо його до контейнера
      totalWidth += clone.offsetWidth + 32; // Враховуємо ширину елемента і відступ
    }
  });

  /// додавання зірочок в хедер та Real Results
  document.addEventListener("DOMContentLoaded", () => {
    const starContainers = document.querySelectorAll('.hero-reviews-stars-wrap'); // Знаходимо всі контейнери
  
    const starsCount = 5; // Кількість зірок для додавання
  
    // Обробляємо кожен знайдений контейнер
    starContainers.forEach(starsWrap => {
      // Створюємо span для всіх зірок
      const starsSpan = document.createElement('span');
  
      // Додаємо зірки в span
      for (let i = 0; i < starsCount; i++) {
        const starImg = document.createElement('img'); // Створюємо новий img для зірки
        starImg.src = 'assets/svg/star.svg'; // Встановлюємо шлях до зображення
        starImg.alt = 'stars'; // Альтернативний текст
        starsSpan.appendChild(starImg); // Додаємо зображення в span
      }
  
      // Вставляємо span з зірками в контейнер перед текстом
      const title = starsWrap.querySelector('.hero-reviews-stars-title');
      if (title) {
        starsWrap.insertBefore(starsSpan, title);
      } else {
        starsWrap.appendChild(starsSpan); // Якщо текстового елемента немає, просто додаємо в кінець
      }
    });
  });


  // Функція зміни зображення shop
function changeImage(thumbnail) {
  const mainImage = document.getElementById("main-image");
  mainImage.src = thumbnail.src;

  document
    .querySelectorAll(".thumbnail")
    .forEach((img) => img.classList.remove("active"));

  thumbnail.classList.add("active");
}

// Додаємо обробники подій до всіх елементів з класом "thumbnail"
document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => changeImage(thumbnail));
});

  //// прокрутка зображень power-secret в моб версі\

  document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector('.power-secret-cards');
    const indicators = document.querySelectorAll('.power-secret-indicator');
    const cards = document.querySelectorAll('.power-secret-card');
  
    let isScrolling = false;
  
    const updateIndicators = () => {
      const containerCenter = scrollContainer.scrollLeft + scrollContainer.clientWidth / 2;
      let activeIndex = 0;
  
      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
  
        if (Math.abs(containerCenter - cardCenter) < card.offsetWidth / 2) {
          activeIndex = index;
        }
      });
  
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === activeIndex);
      });
  
      isScrolling = false; // Дозволяємо наступне оновлення
    };
  
    scrollContainer.addEventListener('scroll', () => {
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(updateIndicators);
      }
    });
  });

//// прокрутка зображень в моб версі\

document.addEventListener("DOMContentLoaded", () => {
  // Отримуємо всі зображення і кружечки
  const scrollContainer = document.querySelector('.product-scroll-mobile');
  const indicators = document.querySelectorAll('.indicator');
  const images = document.querySelectorAll('.product-scroll-mobile img');

  // Додаємо обробник події для прокрутки
  scrollContainer.addEventListener('scroll', () => {
    const scrollLeft = scrollContainer.scrollLeft; // поточна позиція прокрутки
    const containerWidth = scrollContainer.clientWidth; // ширина контейнера
    let activeIndex = 0;

    images.forEach((image, index) => {
      const imageLeft = image.offsetLeft; // відстань від початку контейнера до зображення
      const imageWidth = image.offsetWidth;

      // Перевіряємо, яке зображення перебуває в центрі контейнера
      if (
        scrollLeft >= imageLeft - containerWidth / 2 &&
        scrollLeft < imageLeft + imageWidth - containerWidth / 2
      ) {
        activeIndex = index;
      }
    });

    // Оновлюємо стан кружечків
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === activeIndex);
    });
  });
});


//// product-buy-info
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.product-buy-list-item');
  const descriptions = document.querySelectorAll('.product-buy-description');

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      // Зняти активний клас з усіх елементів
      items.forEach(el => el.classList.remove('active'));
        descriptions.forEach(desc => desc.classList.remove('active'));

      // Додати активний клас до вибраного елемента
      item.classList.add('active');
      descriptions[index].classList.add('active');
    });
  });
});



