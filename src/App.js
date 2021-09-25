const _ = require("lodash");  
function calcularTotal(quantity, price, tax){
  let total_price =  quantity*price;
  let total_taxes_price =  _.round(total_price * (1+tax),2)
  return total_taxes_price;
}
export default calcularTotal;
