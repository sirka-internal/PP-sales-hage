document.addEventListener("DOMContentLoaded", () => {
  const marquee = document.querySelector('.header-wrap');
  const item = marquee.firstElementChild;

  // Отримуємо ширину контейнера
  const containerWidth = marquee.offsetWidth;

  // Обчислюємо сумарну ширину всіх елементів
  let totalWidth = marquee.scrollWidth;

  // Дублюємо елементи, поки їхня сумарна ширина не заповнить весь контейнер + ще один цикл для плавності
  while (totalWidth < containerWidth * 2) {
    const clone = item.cloneNode(true);
    marquee.appendChild(clone);
    totalWidth += clone.offsetWidth + 32; // Враховуємо ширину елемента і відступ
  }
});


// document.addEventListener("DOMContentLoaded", () => {
//     const marquee = document.querySelector('.header-wrap');
//     const item = marquee.firstElementChild;
  
//     // Дублюємо елементи, поки не буде заповнено весь простір
//     let totalWidth = 0;
//     const containerWidth = marquee.offsetWidth;
  
//     while (totalWidth < containerWidth) {
//       const clone = item.cloneNode(true); // Клонуємо елемент
//       marquee.appendChild(clone); // Додаємо його до контейнера
//       totalWidth += clone.offsetWidth + 32; // Враховуємо ширину елемента і відступ
//     }
//   });

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
  const images = document.querySelectorAll('.product-scroll-mobile div');

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





////// Policy

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalText = document.getElementById('modal-text');
  const closeBtn = document.getElementById('close-btn');

  let policies = {};
  // Fetch policies from a JSON file
  fetch("./js/policies-data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
    .then(data => {
     console.log("data", data)
      policies = data;
      initPolicies();
    })
    .catch(error => console.error('Error loading policies:', error));

  function initPolicies() {
   document.querySelectorAll('.policy').forEach(policy => {
   policy.addEventListener('click', () => {
     const policyType = policy.getAttribute('data-policy');
     const { title, text } = policies[policyType];

     modalTitle.textContent = title;
     modalText.textContent = text;
     modal.style.display = 'flex';
   });
 });
  }

  closeBtn.addEventListener('click', () => {
   modal.style.display = 'none';
 });

 // Close modal when clicking outside the content
 modal.addEventListener('click', (e) => {
   if (e.target === modal) {
     modal.style.display = 'none';
   }
 });

});

