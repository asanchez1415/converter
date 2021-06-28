function energyCalculate() {
  let numberQuantity = parseFloat(
    document.getElementById("numberQuantity").value
  );
  let optionEnergy = document.getElementById("optionEnergy").value;

  switch (optionEnergy) {
    /* Caso para calcular desde los segundos */
    case "kJ":
      //Ya tiene los KJ
      kcal = numberQuantity / 4.1868;

      unitAndResult = [
        { unit: "Kcal", result: kcal },
      ];
      optionR = optionEnergy;
      break;

    /* Caso para calcular desde los minutos */
    case "Kcal":
      //Ya tiene los Kcal
      kj = numberQuantity * 4.1868;

      unitAndResult = [
        { unit: "Kj", result: kj },
      ];
      optionR = optionEnergy;
      break;
  }
  showResult(); 
}
