function densityCalculate() {
  let numberQuantity = parseFloat(
    document.getElementById("numberQuantity").value
  );
  let optionDensity = document.getElementById("optionDensity").value;

  switch (optionDensity) {
    /* Caso para calcular desde los milimetros */
    case "kg/m3":
      //Ya tiene kg/m3
      gAml = numberQuantity / 1000;
      kgAl = numberQuantity / 1000;
      gAl = numberQuantity;

      unitAndResult = [
        { unit: "g/L", result: gAl },
        { unit: "g/ml", result: gAml },
        { unit: "kg/L", result: kgAl },
      ];
      optionR = optionDensity;
      break;

    /* Caso para calcular desde los centimetros */
    case "g/L":
      //Ya tiene g/L
      gAml = numberQuantity / 1000;
      kgAl = numberQuantity / 1000;
      kgAm3 = numberQuantity;

      unitAndResult = [
        { unit: "kg/m3", result: kgAm3 },
        { unit: "g/ml", result: gAml },
        { unit: "kg/L", result: kgAl },
      ];
      optionR = optionDensity;
      break;

    /* Caso para calcular desde las pulgadas */
    case "g/ml":
      //Ya tiene g/ml
      kgAl = numberQuantity;
      kgAm3 = numberQuantity * 1000;
      gAl = numberQuantity * 1000;

      unitAndResult = [
        { unit: "g/L", result: gAl },
        { unit: "kg/m3", result: kgAm3 },
        { unit: "kg/L", result: kgAl },
      ];
      optionR = optionDensity;
      break;

    /* Caso para calcular desde las yardas */
    case "kg/L":
      //Ya tiene kg/L
      kgAm3 = numberQuantity * 1000;
      gAl = numberQuantity * 1000;
      gAml = numberQuantity;

      unitAndResult = [
        { unit: "g/L", result: gAl },
        { unit: "kg/m3", result: kgAm3 },
        { unit: "g/ml", result: gAml },
      ];
      optionR = optionDensity;
      break;

  }
  showResult(); 
}
