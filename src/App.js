const _ = require("lodash");  

var taxes = {
    "UT":0.0665,
    "NV":0.08,
    "TX":0.0625,
    "AL":0.04,
    "CA":0.0825,
    "P":0
}

function calcularTotal(quantity, price, state){
  let total_price =  quantity*price;
  let tax = taxes[state]
  let total_taxes_price =  _.round(total_price * (1+tax),2)
  return total_taxes_price;
}
export default calcularTotal;
