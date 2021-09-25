import calcularTotal from "./App.js";

describe("Totalizador", () => {
  it("deberia mostrar cantidad ingresada", () => {
    //expect(calcularTotal(10)).toEqual(10);
    expect(calcularTotal(10,1,"P")).toEqual(10);
  });
  it("deberia mostrar cantidad y precio ingresados", () => {
    //expect(calcularTotal(10,15)).toEqual(10,15);
    expect(calcularTotal(1,15,"P")).toEqual(15);

  });
  it("deberia mostrar total calculado con precio y cantidad ingresados", () => {
    //expect(calcularTotal(3,2)).toEqual(6);
    expect(calcularTotal(10,15,"P")).toEqual(150);

  });
  it("deberia mostrar precioTotal con impuestos", () => {
    //expect(calcularTotal(10,15,0.5)).toEqual(225);
    expect(calcularTotal(10,15,"P")).toEqual(150);

  });
  /*it("deberia mostrar precioTotal y estado elegido", () => {
    expect(calcularTotal(10,15,"AL")).toEqual(156,"AL");

  });*/
  it("deberia mostrar precioTotal con impuestos segun estado", () => {
    expect(calcularTotal(10,15,"AL")).toEqual(156);

  });
});
