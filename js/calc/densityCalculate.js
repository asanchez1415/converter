function densityCalculate() {
  let numberQuantity = parseFloat(
    document.getElementById("numberQuantity").value
  );
  let optionDistance = document.getElementById("optionDistance").value;

  switch (optionDistance) {
    /* Caso para calcular desde los milimetros */
    case "mm":
      cm = numberQuantity / 10;
      m = cm / 100;
      km = m / 1000;
      //Ya tiene los mm
      yarda = numberQuantity / 914;
      pulgadas = yarda * 36;

      unitAndResult = [
        { unit: "cm", result: cm },
        { unit: "in", result: pulgadas },
        { unit: "yd", result: yarda },
        { unit: "m", result: m },
        { unit: "Km", result: km },
      ];
      optionR = optionDistance;
      break;

    /* Caso para calcular desde los centimetros */
    case "cm":
      m = numberQuantity / 100;
      km = m / 1000;
      //Ya tiene los cm
      yarda = numberQuantity / 91,44;
      pulgadas = yarda * 36;
	    mm = numberQuantity * 10;

      unitAndResult = [
        { unit: "mm", result: mm },
        { unit: "in", result: pulgadas },
        { unit: "yd", result: yarda },   
        { unit: "m", result: m },
        { unit: "Km", result: km },
      ];
      optionR = optionDistance;
      break;

    /* Caso para calcular desde las pulgadas */
    case "in":
      yarda = numberQuantity / 36;
      //Ya tiene la Pulgada
      mm = numberQuantity * 25,4;
      cm = mm / 10;
      m = cm / 100;
      km = m / 1000;

      unitAndResult = [
        { unit: "mm", result: mm },
        { unit: "cm", result: cm },
        { unit: "yd", result: yarda },
        { unit: "m", result: m },
        { unit: "Km", result: km },
      ];
      optionR = optionDistance;
      break;

    /* Caso para calcular desde las yardas */
    case "yd":
      //Ya tiene la Yarda
      pulgadas = numberQuantity * 36;
      mm = numberQuantity * 914,4;
      cm = mm / 10;
      m = cm / 100;
      Km = m / 1000;

      unitAndResult = [
        { unit: "mm", result: mm },
        { unit: "cm", result: cm },
        { unit: "in", result: pulgadas },
        { unit: "m", result: m },
        { unit: "km", result: km },
      ];
      optionR = optionDistance;
      break;

    /* Caso para calcular desde los metros */
    case "m":
      km = numberQuantity / 1000;
      //Ya tiene los m
      yarda = numberQuantity * 1,094;
      pulgadas = yarda * 36;
      cm = numberQuantity * 100;
	    mm = cm * 10;

      unitAndResult = [
        { unit: "mm", result: mm },
        { unit: "cm", result: cm },
        { unit: "in", result: pulgadas },
        { unit: "yd", result: yarda },
        { unit: "km", result: km },
      ];
      optionR = optionDistance;
      break;

    /* Caso para calcular desde los kilometros */
    case "Km":
      //Ya tiene los Km
      m = numberQuantity * 1000;
      yarda = m * 1,094;
      pulgadas = yarda * 36;
      cm = m * 100;
	    mm = cm * 10;

      unitAndResult = [
        { unit: "mm", result: mm },
        { unit: "cm", result: cm },
        { unit: "in", result: pulgadas },
        { unit: "yd", result: yarda },
        { unit: "m", result: m },
      ];
      optionR = optionDistance;
      break;
  }
  showResult(); 
}
