function massCalculate() {
  let numberQuantity = parseFloat(
    document.getElementById("numberQuantity").value
  );
  let optionMass = document.getElementById("optionMass").value;

  switch (optionMass) {
    /* Caso para calcular desde los microgramos */
    case "ug":
      //Ya tiene los ug
      mg = numberQuantity / 1000;
      g = mg / 1000;
      kg = g / 1000;
      ton = kg / 1000;

      unitAndResult = [
        { unit: "mg", result: mg },
        { unit: "g", result: g },
        { unit: "Kg", result: kg },
        { unit: "ton", result: ton },
      ];
      optionR = optionMass;
      break;

    /* Caso para calcular desde los miligramos */
    case "mg":
      ug = numberQuantity * 1000;
      //Ya tiene los mg
      g = numberQuantity / 1000;
      kg = g / 1000;
      ton = kg / 1000;

      unitAndResult = [
        { unit: "ug", result: ug },
        { unit: "g", result: g },
        { unit: "Kg", result: kg },
        { unit: "ton", result: ton },
      ];
      optionR = optionMass;
      break;

    /* Caso para calcular desde los gramos */
    case "g":
      mg = numberQuantity * 1000;
      ug = mg * 1000;
      //Ya tiene los g
      kg = numberQuantity / 1000;
      ton = kg / 1000;

      unitAndResult = [
        { unit: "mg", result: mg },
        { unit: "ug", result: ug },
        { unit: "Kg", result: kg },
        { unit: "ton", result: ton },
      ];
      optionR = optionMass;
      break;

    /* Caso para calcular desde los kilos */
    case "kg":
      g = numberQuantity * 1000;
      mg = g * 1000;
      ug = mg * 1000;
      //Ya tiene los kg
      ton = numberQuantity / 1000;

      unitAndResult = [
        { unit: "ug", result: ug },
        { unit: "mg", result: mg },
        { unit: "g", result: g },
        { unit: "ton", result: ton },
      ];
      optionR = optionMass;
      break;

    /* Caso para calcular desde la tonelada */
    case "ton":
      kg = numberQuantity * 1000;
      g = kg * 1000;
      mg = g * 1000;
      ug = mg * 1000;
      //Ya tiene los ton

      unitAndResult = [
        { unit: "ug", result: ug },
        { unit: "mg", result: mg },
        { unit: "g", result: g },
        { unit: "kg", result: kg },
      ];
      optionR = optionMass;
      break;
  }
  showResult();
}
