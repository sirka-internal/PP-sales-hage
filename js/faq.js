function formatDescription(description) {
    return description
      .split("\n\n") // Розділяємо текст на блоки
      .map((block) => {
        if (block.trim() === "[break]") {
          // Якщо це спеціальний розрив
          return '<div class="empty-line"></div>';
        }
        // Якщо це звичайний текст
        return `<p>${block.trim()}</p>`;
      })
      .join(""); // Об'єднуємо у фінальний HTML
  }
  
  fetch("./js/faqList-data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const faqContainer = document.querySelector(".faq-wrap");
  
      function createFaq(faqData) {
        const faqList = document.createElement("li");
        faqList.classList.add("faq-list");
  
        faqList.innerHTML = `
          <span class="faq-title-wrap">
            <p class="faq-title">${faqData.title}</p>
            <button class="faq-toggle-button">
              <img src="assets/svg/expand_more.svg" alt="Expand">
            </button>
          </span>
          <div class="faq-description" style="display: none;">
            ${formatDescription(faqData.description)}
          </div>
        `;
  
        const toggleSpan = faqList.querySelector(".faq-title-wrap");
        const toggleButton = faqList.querySelector(".faq-toggle-button");
        const titleElement = faqList.querySelector(".faq-title");
        const descriptionElement = faqList.querySelector(".faq-description");
  
        toggleSpan.addEventListener("click", () => {
            const isVisible = descriptionElement.style.display === "block";

    // Закриваємо всі відкриті описи
    document.querySelectorAll(".faq-description").forEach((desc) => {
      desc.style.display = "none";
    });
    document.querySelectorAll(".faq-title").forEach((title) => {
      title.style.color = "#0D0D0D";
    });
    document.querySelectorAll(".faq-toggle-button img").forEach((img) => {
      img.src = "assets/svg/expand_more.svg";
    });

            descriptionElement.style.display = isVisible ? "none" : "block";
            toggleButton.innerHTML = isVisible
              ? '<img src="assets/svg/expand_more.svg" alt="Expand">'
              : '<img src="assets/svg/expand_less.svg" alt="Collapse">';
            titleElement.style.color = isVisible ? "#0D0D0D" : "#E40022";
          });
  
        return faqList;
      }
  
      data.forEach((faqData) => {
        const faqElement = createFaq(faqData);
        faqContainer.appendChild(faqElement);
      });
    })
    .catch((error) => {
      console.error("Error loading JSON:", error);
    });