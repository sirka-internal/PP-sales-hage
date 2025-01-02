//// прокрутка рядка

document.addEventListener("DOMContentLoaded", () => {
    const guaranteeString = document.querySelector('.product-guarantee-string-info');
    const item = guaranteeString.firstElementChild;
    let totalWidth = 0;
    const containerWidth = guaranteeString.offsetWidth;
  
    while (totalWidth < containerWidth  * 2) {
      const clone = item.cloneNode(true); 
      guaranteeString.appendChild(clone); 
      totalWidth += clone.offsetWidth + 32;
    }
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

  document.addEventListener('DOMContentLoaded', () => {


    // Вибираємо всі елементи з класом 'pricing-option'
const pricingOptions = document.querySelectorAll('.pricing-option');

// Функція для очищення активного класу
function removeActiveClass() {
  pricingOptions.forEach(option => {
    option.classList.remove('active');
  });
}

// Встановлюємо "Most Popular" активним по замовчуванню
document.querySelector('.pricing-option').classList.add('active');

// Додаємо обробник подій для кожного елемента
pricingOptions.forEach(option => {
  option.addEventListener('click', () => {
    removeActiveClass(); // Знімаємо активний клас з усіх елементів
    option.classList.add('active'); // Додаємо активний клас на обраний елемент
  });
});
  });
