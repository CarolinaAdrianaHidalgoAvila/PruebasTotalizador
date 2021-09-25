import calcularTotal from "./App";

const form = document.querySelector("#totalizer-form");
const quantity = document.querySelector("#quantity-input");
const price = document.querySelector("#price-input");
const state = document.querySelector("#state");

const quantity_output = document.querySelector("#show-quantity");
const price_output = document.querySelector("#show-price");
const total_price_output = document.querySelector("#show-total-price");
const total_taxes_price_output = document.querySelector("#show-total-taxes-price");
const state_tax_output = document.querySelector("#show-state");


form.addEventListener("submit", (event) => {
  event.preventDefault();
  quantity_output.innerHTML = "Quantity: " + quantity.value
  price_output.innerHTML = "Price: " + price.value
  total_taxes_price_output.innerHTML = "<p>"+ calcularTotal(quantity.value,price.value,state.value) + "</p>";
});
