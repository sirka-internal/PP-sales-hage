document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("custumer-rewiews-cards");

    // Завантаження даних з JSON
    fetch("js/custumer-review-data.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then((reviewersData) => {
            reviewersData.forEach((reviewer) => {
                const cardHTML = `
                
<div class="custumer-rewiews-card">
                        
  <div class="custumer-rewiews-general">
  <div class="custumer-rewiews-reviewer">
      <img src="${reviewer.image}" alt="${reviewer.name}" class="real-results-reviewer-image">
      <div class="custumer-rewiews-wrap">
          <p class="custumer-rewiews-name">${reviewer.name}</p>
          <span class="custumer-rewiews-verified">
              <img src="${reviewer.verifiedIcon}" alt="check" class="custumer-rewiews-verified-icon">
              <p>Verified Buyer</p>
          </span>
      </div>
  </div>
  </div>

  <div>
      <div class="custumer-rewiews-star-wrap">
      <span class="custumer-rewiews-star"></span>
      <div class="custumer-rewiews-recomend"><img src="assets/svg/heart-icon.svg" alt="icon"><p>I recomend this product</p></div>
      </div>
      <div>
          <div class="custumer-rewiews-heading-wrap">
          <h3 class="custumer-rewiews-heading">${reviewer.heading}</h3>
          <p class="custumer-rewiews-two-days">2 days ago</p>
          </div>
          <p class="custumer-rewiews-text">${reviewer.text}</p>
      </div>
      <div class="custumer-rewiews-helpfull-wrap">
          <p>Was this review helpfull?</p>
          <span><img src="assets/svg/like-icon.svg" alt="">6</span>
          <span><img src="assets/svg/dislike-icon.svg" alt="">0</span>
      </div>
  </div>
  
  </div>

                `;
                cardsContainer.innerHTML += cardHTML;
            });

   // Додаємо зірочки після рендерингу карток
   console.log("before calling addStars");
   setTimeout(() => {
       addStars();
       console.log("after calling addStars");
   }, 0); // Додаємо невелике затримання для рендерингу

   // Функція додавання зірочок
function addStars() {
    console.log("add star")
    const starContainers = document.querySelectorAll(".custumer-rewiews-star");
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


        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            cardsContainer.innerHTML = `<p>Unable to load reviews. Please try again later.</p>`;
        });
});



{/* <div class="custumer-rewiews-card">
<div class="custumer-rewiews-general">
<div class="custumer-rewiews-reviewer">
    <img src="${reviewer.image}" alt="${reviewer.name}" class="real-results-reviewer-image">
    <div class="custumer-rewiews-wrap">
        <p class="custumer-rewiews-name">${reviewer.name}</p>
        <span class="custumer-rewiews-verified">
            <img src="${reviewer.verifiedIcon}" alt="check" class="custumer-rewiews-verified-icon">
            <p>Verified Buyer</p>
        </span>
    </div>
</div>
<p class="custumer-rewiews-two-days">2 days ago</p>
</div>
<div class="custumer-rewiews-star-wrap">
<span class="custumer-rewiews-star"></span>
<div class="custumer-rewiews-recomend"><img src="assets/svg/heart-icon.svg" alt="icon"><p>I recomend this product</p></div>
</div>
<div>
    <h3 class="custumer-rewiews-heading">${reviewer.heading}</h3>
    <p class="custumer-rewiews-text">${reviewer.text}</p>
</div>
<div class="custumer-rewiews-helpfull-wrap">
    <p>Was this review helpfull?</p>
    <span><img src="assets/svg/like-icon.svg" alt="">6</span>
    <span><img src="assets/svg/dislike-icon.svg" alt="">0</span>
</div>
</div> */}