/* 
Index of functions (calculate)
1. calculateMass
5. calculateTime
*/

function massCalculate() {
  let num1 = parseInt(document.getElementById("num1").value);
  let optionMass = document.getElementById("optionMass").value;

  switch (optionMass) {
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

    case "ug":
      //Ya tiene los ug
      mg = num1 / 1000;
      g = mg / 1000;
      kg = g / 1000;
      ton = kg / 1000;

      unitResult = JSON.stringify({
        mg: mg,
        g: g,
        kg: kg,
        ton: ton,
      });
      optionMassR = optionMass;
      break;

    case "mg":
      ug = num1 * 1000;
      //Ya tiene los mg
      g = num1 / 1000;
      kg = g / 1000;
      ton = kg / 1000;

      unitResult = JSON.stringify({
        ug: ug,
        g: g,
        kg: kg,
        ton: ton,
      });
      optionMassR = optionMass;
      break;

    case "g":
      mg = num1 * 1000;
      ug = mg * 1000;
      //Ya tiene los g
      kg = num1 / 1000;
      ton = kg / 1000;

      unitResult = JSON.stringify({
        ug: ug,
        mg: mg,
        kg: kg,
        ton: ton,
      });
      optionMassR = optionMass;
      break;

    case "Kg":
      g = num1 * 1000;
      mg = g * 1000;
      ug = mg * 1000;
      //Ya tiene los kg
      ton = num1 / 1000;

      unitResult = JSON.stringify({
        ug: ug,
        mg: mg,
        g: g,
        ton: ton,
      });
      optionMassR = optionMass;
      break;

    case "Ton":
      kg = num1 * 1000;
      g = kg * 1000;
      mg = g * 1000;
      ug = mg * 1000;
      //Ya tiene los ton

      unitResult = JSON.stringify({
        ug: ug,
        mg: mg,
        g: g,
        kg: kg,
      });
      optionMassR = optionMass;
      break;
  }
}

function timeCalculate() {
  let num1 = parseInt(document.getElementById("num1").value);
  let optionTime = document.getElementById("optionTime").value;

  switch (optionTime) {
    case "s":
      //Ya tiene los s
      min = num1 / 60;
      h = min / 60;

      unitResult = JSON.stringify({
        min: min,
        h: h,
      });
      optionTimeR = optionTime;
      break;

    case "min":
      s = num1 * 60;
      //Ya tiene los min
      h = num1 / 60;

      unitResult = JSON.stringify({
        s: s,
        h: h,
      });
      optionTimeR = optionTime;
      break;

    case "h":
      min = num1 * 60;
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
  let num1 = parseInt(document.getElementById("num1").value);
  let optionVolume = document.getElementById("optionVolume").value;

  switch (optionVolume) {
    case "uL":
      //Ya tiene los ul
      ml = num1 / 1000;
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
      ul = num1 * 1000;
      //Ya tiene los ml
      l = num1 / 1000;
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
      ml = num1 * 1000;
      ul = mL * 1000;
      //Ya tiene los l
      m3 = num1 / 1000;
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
      l = num1 * 1000;
      mL = l * 1000;
      ul = ml * 1000;
      //Ya tiene los m3
      gal = num1 * 264;

      unitResult = JSON.stringify({
        uL: ul,
        mL: ml,
        m3: m3,
        Gal: gal,
      });
      optionVolumeR = optionVolume;
      break;

    case "Gal":
      m3 = num1 / 264;
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
