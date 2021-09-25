import calcularTotal from "./App";

const form = document.querySelector("#totalizer-form");
const quantity = document.querySelector("#quantity-input");

const quantity_output = document.querySelector("#show-quantity");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  quantity_output.innerHTML = "<p>"+"Quantity" + calcularTotal(quantity) + "</p>";
});
