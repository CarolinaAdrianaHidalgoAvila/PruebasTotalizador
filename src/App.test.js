import calcularTotal from "./App.js";
describe("Totalizador", () => {
  it("deberia mostrar cantidad ingresada", () => {
    expect(calcularTotal(10)).toEqual(10);
  });
  //it("deberia generar un saludo por nombre y edad", () => {
    //expect(saludar("Juan", 25)).toEqual("Hola Sr. Juan");
  //});
});
