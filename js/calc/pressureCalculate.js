function pressureCalculate() {
  let numberQuantity = parseFloat(
    document.getElementById("numberQuantity").value
  );
  let optionPressure = document.getElementById("optionPressure").value;

  switch (optionPressure) {
    /* Caso para calcular desde los Pascal */
    case "Pa":
      torr = numberQuantity /133.32;
      psi = numberQuantity / 6894.76;
      //Ya tiene los Pa
      atm = numberQuantity / 101325;
      mmHg = numberQuantity / 133.32;

      unitAndResult = [
        { unit: "mmHg", result: mmHg },
        { unit: "torr", result: torr },
        { unit: "psi", result: psi },
        { unit: "atm", result: atm },
      ];
      optionR = optionPressure;
      break;

    /* Caso para calcular desde los Milímetros de mercurio */
    case "mmHg":
      torr = numberQuantity;
      psi = numberQuantity / 51.715;
      pa = numberQuantity * 133.32;
      atm = numberQuantity / 760;
      //Ya tiene los mmHg

      unitAndResult = [
        { unit: "Pa", result: pa },
        { unit: "torr", result: torr },
        { unit: "psi", result: psi },
        { unit: "atm", result: atm },
      ];
      optionR = optionPressure;
      break;

    /* Caso para calcular desde los Torr */
    case "torr":
      //Ya tiene los Torr
      psi = numberQuantity / 51.7149;
      pa = numberQuantity * 133.32;
      atm = numberQuantity / 760;
      mmHg = numberQuantity;

      unitAndResult = [
        { unit: "Pa", result: pa },
        { unit: "mmHg", result: mmHg },
        { unit: "psi", result: psi },
        { unit: "atm", result: atm },
      ];
      optionR = optionPressure;
      break;

    /* Caso para calcular desde la Libra por pulgada cuadrada */
    case "psi":
      torr = numberQuantity * 51.715;
      //Ya tiene los psi
      pa = numberQuantity * 6894.76;
      atm = numberQuantity / 14.696;
      mmHg = numberQuantity * 51.715;


      unitAndResult = [
        { unit: "Pa", result: pa },
        { unit: "mmHg", result: mmHg },
        { unit: "torr", result: torr },
        { unit: "atm", result: atm },
      ];
      optionR = optionPressure;
      break;

    /* Caso para calcular desde la Atmósfera física */
    case "atm":
      torr = numberQuantity * 760;
      psi = numberQuantity * 14.696;;
      pa = numberQuantity * 101325;
      //Ya tiene los Atm
      mmHg = numberQuantity * 760;

      unitAndResult = [
        { unit: "Pa", result: pa },
        { unit: "mmHg", result: mmHg },
        { unit: "torr", result: torr },
        { unit: "psi", result: psi },
      ];
      optionR = optionPressure;
      break;
  }
  showResult(); 
}
