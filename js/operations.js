function mass() {
  dataJSON = {
    caseMass: {
      title: "CONVERTIR ENTRE MASA",
      paragraph:
        "Ingresa un número que será la cantidad de tu masa y ingresa la unidad de tu cantidad para convertirla en Microgramo(ug), Milígramo(mg), Gramo(g), Kilogramo(kg) y Toneladas(ton)",
      units: [
        "<option>ug</option>",
        "<option>mg</option>",
        "<option>g</option>",
        "<option>Kg</option>",
        "<option>Ton</option>",
      ],
    },
  };

  paragraphFinal = dataJSON["caseMass"]["paragraph"];
  titleFinal = dataJSON["caseMass"]["title"];

  unitsFinal = dataJSON["caseMass"]["units"];

  var unitComplete = "";
  for (var unit of unitsFinal) {
    unitComplete += unit;
  }

  printTypeOperation(paragraphFinal, titleFinal, unitComplete);
}
