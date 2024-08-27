import { popularCategories } from "../data/popular-categories-data.js";

const popularCategoriesContainer = document.querySelector(
  ".popular-categories-items"
);

popularCategories.forEach((item) => {
  popularCategoriesContainer.innerHTML += `
        <div class="popular-categories-item">
            <a href=${item.href}>
                <img src=${item.img} alt=${item.img + item.id}>
            </a>
            <span>${item.name} (${item.count})</span>
        </div>
        `;
});
