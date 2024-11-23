// Selectors for new Category form
const newCategoryForm = document.querySelector("[data-new-category-form]");
const newCategoryInput = document.querySelector("[data-new-category-input]");

// Selector for categories container
const categoriesContainer = document.querySelector("[data-categories]");

// Local storage keys
const LOCAL_STORAGE_CATEGORIES_KEY = "LOCAL_STORAGE_CATEGORIES_KEY";

// Event: Add category
newCategoryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const category = newCategoryInput.Value;
  const isCategoryEmpty = !category || !category.trim().length;
  if (isCategoryEmpty) {
    return console.log("Please enter a task");
  }
});
