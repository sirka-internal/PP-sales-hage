document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("custumer-rewiews-cards");
    const moreReviewsBtn = document.querySelector(".custumer-rewiews-btn");
    const hideAllBtn = document.createElement("button"); // Додаємо кнопку "Hide all"

    hideAllBtn.classList.add("custumer-rewiews-btn");
    hideAllBtn.textContent = "Hide all";
    hideAllBtn.style.display = "none"; // Спочатку прихована
    cardsContainer.insertAdjacentElement("afterend", hideAllBtn);

    let reviewersData = [];
    let displayedCount = 0; // Лічильник відображених елементів

    // Завантаження даних з JSON
    fetch("js/custumer-review-data.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then((data) => {
            reviewersData = data; // Зберігаємо дані у глобальну змінну
            showMoreReviews(4); // Відображаємо перші 4 елементи
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            cardsContainer.innerHTML = `<p>Unable to load reviews. Please try again later.</p>`;
        });

    // Функція відображення нових відгуків
    function showMoreReviews(count) {
        const nextItems = reviewersData.slice(displayedCount, displayedCount + count);

        nextItems.forEach((reviewer) => {
            const cardHTML = `
<div class="custumer-rewiews-card">
    <div class="custumer-rewiews-general">
        <div class="custumer-rewiews-reviewer">
            <img src="${reviewer.image}" alt="${reviewer.name}" class="real-results-reviewer-image">
            <div class="custumer-rewiews-wrap">
                <p class="custumer-rewiews-name">${reviewer.name}</p>
                <span class="custumer-rewiews-verified">
                    <img src="assets/svg/check.svg" alt="check" class="custumer-rewiews-verified-icon">
                    <p>Verified Buyer</p>
                </span>
            </div>
        </div>
    </div>    

    <div>
        <div class="custumer-rewiews-star-wrap">
            <span class="custumer-rewiews-star"></span>
            <div class="custumer-rewiews-recomend">
                <img src="assets/svg/heart-icon.svg" alt="icon">
                <p>I recommend this product</p>
            </div>
        </div>
        <div>
            <div class="custumer-rewiews-heading-wrap">
                <h3 class="custumer-rewiews-heading">${reviewer.heading}</h3>
                <p class="custumer-rewiews-two-days">${reviewer.date}</p>
            </div>
            <p class="custumer-rewiews-text">${reviewer.text}</p>
        </div>
        <div class="custumer-rewiews-helpfull-wrap">
            <p>Was this review helpful?</p>
            <span><img src="assets/svg/like-icon.svg" alt=""> <p>${reviewer.like}</p></span>
            <span><img src="assets/svg/dislike-icon.svg" alt=""> <p>${reviewer.dislike}</p></span>
        </div>
    </div>
</div>
            `;  
            cardsContainer.innerHTML += cardHTML;
        });

        displayedCount += nextItems.length;

        if (displayedCount >= reviewersData.length) {
            moreReviewsBtn.style.display = "none"; // Ховаємо кнопку "More reviews"
            hideAllBtn.style.display = "flex"; // Показуємо кнопку "Hide all"
        }

        setTimeout(() => addStars(), 0); // Додаємо зірочки
    }

    // Функція приховування всіх елементів, окрім перших чотирьох
    function hideAllReviews() {
        const allCards = document.querySelectorAll(".custumer-rewiews-card");
        allCards.forEach((card, index) => {
            card.style.display = index < 4 ? "block" : "none"; // Залишаємо тільки перші 4 елементи
        });

        displayedCount = 4; // Скидаємо лічильник
        moreReviewsBtn.style.display = "flex"; // Знову показуємо кнопку "More reviews"
        hideAllBtn.style.display = "none"; // Приховуємо кнопку "Hide all"
    }

    // Обробник кліку на кнопку "More reviews"
    moreReviewsBtn.addEventListener("click", () => {
        showMoreReviews(3); // Відображаємо ще 3 елементи
    });

    // Обробник кліку на кнопку "Hide all"
    hideAllBtn.addEventListener("click", () => {
        hideAllReviews(); // Приховуємо всі елементи, окрім перших чотирьох
    });

    // Функція додавання зірочок
    function addStars() {
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
});


// document.addEventListener("DOMContentLoaded", () => {
//     const cardsContainer = document.getElementById("custumer-rewiews-cards");
//     const moreReviewsBtn = document.querySelector(".custumer-rewiews-btn");


//     let reviewersData = [];
//     let displayedCount = 0; // Лічильник відображених елементів

//     // Завантаження даних з JSON
//     fetch("js/custumer-review-data.json")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error("Failed to fetch data");
//             }
//             return response.json();
//         })
//         .then((reviewersData) => {
//             reviewersData.forEach((reviewer) => {
//                 const cardHTML = `
                
// <div class="custumer-rewiews-card">
                        
//   <div class="custumer-rewiews-general">
//   <div class="custumer-rewiews-reviewer">
//       <img src="${reviewer.image}" alt="${reviewer.name}" class="real-results-reviewer-image">
//       <div class="custumer-rewiews-wrap">
//           <p class="custumer-rewiews-name">${reviewer.name}</p>
//           <span class="custumer-rewiews-verified">
//               <img src="assets/svg/check.svg" alt="check" class="custumer-rewiews-verified-icon">
//               <p>Verified Buyer</p>
//           </span>
//       </div>
//   </div>
//   </div>    

//   <div>
//       <div class="custumer-rewiews-star-wrap">
//       <span class="custumer-rewiews-star"></span>
//       <div class="custumer-rewiews-recomend"><img src="assets/svg/heart-icon.svg" alt="icon"><p>I recomend this product</p></div>
//       </div>
//       <div>
//           <div class="custumer-rewiews-heading-wrap">
//           <h3 class="custumer-rewiews-heading">${reviewer.heading}</h3>
//           <p class="custumer-rewiews-two-days">${reviewer.date}</p>
//           </div>
//           <p class="custumer-rewiews-text">${reviewer.text}</p>
//       </div>
//       <div class="custumer-rewiews-helpfull-wrap">
//           <p>Was this review helpfull?</p>
//           <span><img src="assets/svg/like-icon.svg" alt="">${reviewer.like}</span>
//           <span><img src="assets/svg/dislike-icon.svg" alt="">${reviewer.dislike}</span>
//       </div>
//   </div>
  
//   </div>
//                 `;
//                 cardsContainer.innerHTML += cardHTML;
//             });

//    // Додаємо зірочки після рендерингу карток
//    console.log("before calling addStars");
//    setTimeout(() => {
//        addStars();
//        console.log("after calling addStars");
//    }, 0); // Додаємо невелике затримання для рендерингу

//    // Функція додавання зірочок
// function addStars() {
//     console.log("add star")
//     const starContainers = document.querySelectorAll(".custumer-rewiews-star");
//     const starsCount = 5; // Кількість зірок для додавання

//     starContainers.forEach((starsWrap) => {
//         if (starsWrap.querySelector("img")) return;

//         const starsSpan = document.createElement("span");

//         for (let i = 0; i < starsCount; i++) {
//             const starImg = document.createElement("img");
//             starImg.src = "assets/svg/star.svg"; // Шлях до зображення зірки
//             starImg.alt = "stars"; // Альтернативний текст
//             starsSpan.appendChild(starImg);
//         }

//         starsWrap.appendChild(starsSpan);
//     });
// }
//         })
//         .catch((error) => {
//             console.error("Error fetching data:", error);
//             cardsContainer.innerHTML = `<p>Unable to load reviews. Please try again later.</p>`;
//         });
// });