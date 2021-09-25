import calcularTotal from "./App.js";
describe("Totalizador", () => {
  it("deberia mostrar cantidad ingresada", () => {
    expect(calcularTotal(10,15)).toEqual(10);
  });
  it("deberia mostrar precio ingresados", () => {
    //expect(calcularTotal(10,15)).toEqual(10);
    expect(calcularTotal(10,15)).toEqual(10,15);

  });
  //it("deberia generar un saludo por nombre y edad", () => {
    //expect(saludar("Juan", 25)).toEqual("Hola Sr. Juan");
  //});
});
