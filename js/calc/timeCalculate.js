function timeCalculate() {
  let numberQuantity = parseFloat(
    document.getElementById("numberQuantity").value
  );
  let optionTime = document.getElementById("optionTime").value;

  switch (optionTime) {
    /* Caso para calcular desde los segundos */
    case "s":
      //Ya tiene los s
      min = numberQuantity / 60;
      h = min / 60;

      unitAndResult = [
        { unit: "min", result: min },
        { unit: "h", result: h },
      ];
      optionR = optionTime;
      break;

    /* Caso para calcular desde los minutos */
    case "min":
      s = numberQuantity * 60;
      //Ya tiene los min
      h = numberQuantity / 60;

      unitAndResult = [
        { unit: "s", result: s },
        { unit: "h", result: h },
      ];
      optionR = optionTime;
      break;

    /* Caso para calcular desde las horas */
    case "h":
      min = numberQuantity * 60;
      s = min * 60;
      //Ya tiene los s

      unitAndResult = [
        { unit: "s", result: s },
        { unit: "min", result: min },
      ];
      optionR = optionTime;
      break;
  }
  showResult(); 
}
















  /* function timeCalculate() {
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
  } */