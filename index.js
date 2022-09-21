const modal = document.getElementById("texno-modal");
let price = document.getElementById("all-price");
console.log(price.textContent);
const openModal = () => {
  modal.classList.remove("d-none");
};
const closeModal = () => {
  modal.classList.add("d-none");
};
const add = () => {
  price.innerHTML = Number(price.textContent) + 100;
};
const minus = () => {
  if (Number(price.textContent) > 0)
    price.innerHTML = Number(price.textContent) - 100;
};
