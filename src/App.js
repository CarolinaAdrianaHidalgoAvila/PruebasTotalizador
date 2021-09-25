const _ = require("lodash"); 

var taxes = {
    "UT":0.0665,
    "NV":0.08,
    "TX":0.0625,
    "AL":0.04,
    "CA":0.0825,
    "P":0
}
var discount_groups = {
  1000:0.03,
  3000:0.05,
  7000:0.07,
  10000:0.10,
  30000:0.15
}
function calculate_discount(total){
  switch (true) {
      case (total >= 30000 ):
          discount = total * discount_groups[30000]
          break;
      case (total >= 10000 ):
          discount = total * discount_groups[10000]
          break;
      case (total >= 7000 ):
          discount = total * discount_groups[7000]
          break;
      case (total >= 3000 ):
          discount = total * discount_groups[3000]
          break;
      case (total >= 1000 ):
          discount = total * 0.03
          break;
      default:
          discount = 0
          break;
  }
  return discount
}

function calcularTotal(quantity, price, state){
  let total_price =  quantity*price;
  let tax = taxes[state];
  let total_taxes_price =  _.round(total_price * (1+tax),2);
  let discount = _.round(calculate_discount(total_taxes_price),2)
  return total_taxes_price;
}
export default calculate_discount;
//export default calcularTotal, calculate_discount;

