// Selectors for new Category form
const newCategoryForm = document.querySelector("[data-new-category-form]");
const newCategoryInput = document.querySelector("[data-new-category-input]");

// Selector for categories container
const categoriesContainer = document.querySelector("[data-categories]");

// Local storage keys
const LOCAL_STORAGE_CATEGORIES_KEY = "LOCAL_STORAGE_CATEGORIES_KEY";

// Application Data
let categories =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_CATEGORIES_KEY)) || [];

// Event: Add category
newCategoryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const category = newCategoryInput.Value;
  const isCategoryEmpty = !category || !category.trim().length;
  if (isCategoryEmpty) {
    return console.log("Please enter a task");
  }
  categories.push({
    _id: Date.now().toString,
    category: category,
    color: getRandomColor(),
  });
  newCategoryInput.value = "";
  saveAndRender();
});

// functions
function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(
    LOCAL_STORAGE_CATEGORIES_KEY,
    JSON.stringify(categories)
  );
}

// Helpers
function getRandomColor() {
  var hex = Math.round(Math.random() * 0xffffff).toString(16);
  while (hex.length < 6) hex = "0" + hex;
  return `#${hex}`;
}
