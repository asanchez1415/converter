function forceCalculate() {
  let numberQuantity = parseFloat(
    document.getElementById("numberQuantity").value
  );
  let optionForce = document.getElementById("optionForce").value;

  switch (optionForce) {
    /* Caso para calcular desde los Micronewton */
    case "uN":
      newton = numberQuantity / 1000000;
      kilonewton = numberQuantity / 1000000000
	    //Ya tiene Micronewton
      dina = numberQuantity / 10;
      kilogramofuerza = numberQuantity / 9806650;

      unitAndResult = [
        { unit: "dyn", result: dina },
        { unit: "N", result: newton },
        { unit: "kgf", result: kilogramofuerza },
        { unit: "kN", result: kilonewton },
      ];
      optionR = optionForce;
      break;

    /* Caso para calcular desde los Dina */
    case "dyn":
      newton = numberQuantity / 0.00001;
      kilonewton = numberQuantity / 0.00000001;
      micronewton = numberQuantity * 10;
      //Ya tiene Dina
      kilogramofuerza = numberQuantity / 980680.59223;

      unitAndResult = [
        { unit: "uN", result: micronewton },
        { unit: "N", result: newton },
        { unit: "kgf", result: kilogramofuerza },
        { unit: "kN", result: kilonewton },
      ];
      optionR = optionForce;
      break;

    /* Caso para calcular desde las Newton */
    case "N":
      //Ya tiene Newton
      kilonewton = numberQuantity / 1000;
      micronewton = numberQuantity * 1000000;
      dina = numberQuantity * 100000;
      kilogramofuerza = numberQuantity / 9.807;

      unitAndResult = [
        { unit: "uN", result: micronewton },
        { unit: "dyn", result: dina },
        { unit: "kgf", result: kilogramofuerza },
        { unit: "kN", result: kilonewton },
      ];
      optionR = optionForce;
      break;

    /* Caso para calcular desde los kilogramofuerza */
    case "kgf":
      newton = numberQuantity *  9.807;
      kilonewton = numberQuantity * 0.009807;
      micronewton = numberQuantity * 9806650;
      dina = numberQuantity * 980680.59223;
      //Ya tiene kilogramo fuerza


      unitAndResult = [
        { unit: "uN", result: micronewton },
        { unit: "dyn", result: dina },
        { unit: "N", result: newton },
        { unit: "kN", result: kilonewton },
      ];
      optionR = optionForce;
      break;

    /* Caso para calcular desde las Kilonewton */
    case "kN":
      newton = numberQuantity * 1000;
      //Ya tiene Kilonewton
      micronewton = numberQuantity * 1000000000;
      dina = numberQuantity * 100000000;
      kilogramofuerza = numberQuantity / 0.009807;

      unitAndResult = [
        { unit: "uN", result: micronewton },
        { unit: "dyn", result: dina },
        { unit: "N", result: newton },
        { unit: "kgf", result: kilogramofuerza },
      ];
      optionR = optionForce;
      break;
  }
  showResult(); 
}
