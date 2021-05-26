/* 
Index of functions (calculate)
1. calculateMass
5. calculateTime
*/

function massCalculate() {
  let numberQuantity = parseInt(
    document.getElementById("numberQuantity").value
  );
  let optionMass = document.getElementById("optionMass").value;

  if (numberQuantity) {
  }

  switch (optionMass) {
    /* Alerta en caso de no elegir la unidad de medida */
    case "0":
      Swal.fire({
        title: "<strong>Alto ahí!</strong>",
        html: "Para convertir tienes que elegir una unidad para tu masa",
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "dale!",
        confirmButtonAriaLabel: "Thumbs up, great!",
      });
      break;

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
      optionMassR = optionMass;
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
      optionMassR = optionMass;
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
      optionMassR = optionMass;
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
      optionMassR = optionMass;
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
      optionMassR = optionMass;
      break;
  }
}

function timeCalculate() {
  let numberQuantity = parseInt(
    document.getElementById("numberQuantity").value
  );
  let optionTime = document.getElementById("optionTime").value;

  switch (optionTime) {
    case "s":
      //Ya tiene los s
      min = numberQuantity / 60;
      h = min / 60;

      unitResult = JSON.stringify({
        min: min,
        h: h,
      });
      optionTimeR = optionTime;
      break;

    case "min":
      s = numberQuantity * 60;
      //Ya tiene los min
      h = numberQuantity / 60;

      unitResult = JSON.stringify({
        s: s,
        h: h,
      });
      optionTimeR = optionTime;
      break;

    case "h":
      min = numberQuantity * 60;
      s = min * 60;
      //Ya tiene los s

      unitResult = JSON.stringify({
        s: s,
        min: min,
      });
      optionTimeR = optionTime;
      break;
  }
}

function volumeCalculate() {
  let numberQuantity = parseInt(
    document.getElementById("numberQuantity").value
  );
  let optionVolume = document.getElementById("optionVolume").value;

  switch (optionVolume) {
    case "uL":
      //Ya tiene los ul
      ml = numberQuantity / 1000;
      l = ml / 1000;
      m3 = l / 1000;
      gal = m3 * 264;

      unitResult = JSON.stringify({
        mL: ml,
        L: l,
        m3: m3,
        Gal: gal,
      });
      optionVolumeR = optionVolume;
      break;

    case "mL":
      ul = numberQuantity * 1000;
      //Ya tiene los ml
      l = numberQuantity / 1000;
      m3 = l / 1000;
      gal = m3 * 264;

      unitResult = JSON.stringify({
        uL: ul,
        L: l,
        m3: m3,
        Gal: gal,
      });
      optionVolumeR = optionVolume;
      break;

    case "L":
      ml = numberQuantity * 1000;
      ul = mL * 1000;
      //Ya tiene los l
      m3 = numberQuantity / 1000;
      gal = m3 * 264;

      unitResult = JSON.stringify({
        uL: ul,
        mL: ml,
        m3: m3,
        Gal: gal,
      });
      optionVolumeR = optionVolume;
      break;

    case "m3":
      l = numberQuantity * 1000;
      mL = l * 1000;
      ul = ml * 1000;
      //Ya tiene los m3
      gal = numberQuantity * 264;

      unitResult = JSON.stringify({
        uL: ul,
        mL: ml,
        m3: m3,
        Gal: gal,
      });
      optionVolumeR = optionVolume;
      break;

    case "Gal":
      m3 = numberQuantity / 264;
      l = m3 * 1000;
      ml = l * 1000;
      ul = ml * 1000;
      //Ya tiene los Gal

      unitResult = JSON.stringify({
        uL: ul,
        mL: ml,
        L: l,
        m3: m3,
      });
      optionVolumeR = optionVolume;
      break;
  }
}
