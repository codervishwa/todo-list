// Selectors for new Category form
const newCategoryForm = document.querySelector("[data-new-category-form]");
const newCategoryInput = document.querySelector("[data-new-category-input]");

// Selector for new todo form
const newTodoForm = document.querySelector("[data-new-todo-form]");
const newTodoSelect = document.querySelector("[data-new-todo-select]");
const newTodoInput = document.querySelector("[data-new-todo-input]");

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

  const category = newCategoryInput.value;
  const isCategoryEmpty = !category || !category.trim().length;

  if (isCategoryEmpty) {
    return console.log("please enter a task");
  }

  categories.push({
    _id: Date.now().toString(),
    category: category,
    color: getRandomHexColor(),
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

function render() {
  clearChildElements(categoriesContainer);
  renderCategories();
}

function renderCategories() {
  categoriesContainer.innerHTML += `<li class="sidebar-item">All Categories</li>`;
  categories.forEach(({ _id, category, color }) => {
    categoriesContainer.innerHTML += `<li class="sidebar-item" data-category-id=${_id}>
            ${category}
            <input type="color" value=${color} class="sidebar-color" />
          </li>`;
  });
}

// Helpers

function clearChildElements(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function getRandomHexColor() {
  var hex = Math.round(Math.random() * 0xffffff).toString(16);
  while (hex.length < 6) hex = "0" + hex;
  return `#${hex}`;
}

window.addEventListener("load", render);
