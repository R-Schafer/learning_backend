const button = document.querySelector(".dropdown button");
const menu = document.querySelector(".dropdown-menu");

button.addEventListener("click", handleDropdown);

function handleDropdown(e) {
  e.preventDefault();
  const dropdown = e.currentTarget;
  menu.classList.toggle("active");
}
