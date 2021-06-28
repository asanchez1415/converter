function volumeCalculate() {
  let numberQuantity = parseFloat(
    document.getElementById("numberQuantity").value
  );
  let optionVolume = document.getElementById("optionVolume").value;

  switch (optionVolume) {
    /* Caso para calcular desde los microlitros */
    case "uL":
      //Ya tiene los ul
      ml = numberQuantity / 1000;
      l = ml / 1000;
      m3= l / 1000;
      gal= m3 * 264;

      unitAndResult = [
        { unit: "ml", result: ml },
        { unit: "L", result: l },
        { unit: "m3", result: m3 },
        { unit: "Gal", result: gal },
      ];
      optionR = optionVolume;
      break;

    /* Caso para calcular desde los miligramos */
    case "ml":
      //Ya tiene los ml
      ul = numberQuantity * 1000;
      l = numberQuantity / 1000;
      m3= l / 1000;
      gal = m3 * 264;

      unitAndResult = [
        { unit: "uL", result: ul },
        { unit: "L", result: l },
        { unit: "m3", result: m3 },
        { unit: "Gal", result: gal },
      ];
      optionR = optionVolume;
      break;

    /* Caso para calcular desde los gramos */
    case "L":
      //Ya tiene los l
      ml = numberQuantity * 1000;
      ul = ml * 1000;
      m3= numberQuantity / 1000;
      gal= m3 * 264;

      unitAndResult = [
        { unit: "uL", result: ul },
        { unit: "ml", result: ml },
        { unit: "m3", result: m3 },
        { unit: "Gal", result: gal },
      ];
      optionR = optionVolume;
      break;

    /* Caso para calcular desde los kilos */
    case "m3":
      //Ya tiene los m3
      l = numberQuantity * 1000;
      ml = l * 1000;
      ul = ml * 1000;
      gal = numberQuantity * 264;

      unitAndResult = [
        { unit: "uL", result: ul },
        { unit: "ml", result: ml },
        { unit: "L", result: l },
        { unit: "Gal", result: gal },
      ];
      optionR = optionVolume;
      break;

    /* Caso para calcular desde la tonelada */
    case "gal":
      //Ya tiene los gal
      m3 = numberQuantity / 264;
      l = m3 * 1000;
      ml = l * 1000;
      ul = ml * 1000;

      unitAndResult = [
        { unit: "uL", result: ul },
        { unit: "ml", result: ml },
        { unit: "L", result: l },
        { unit: "m3", result: m3 },
      ];
      optionR = optionVolume;
      break;
  }
  showResult(); 
}
