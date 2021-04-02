/*///////// Function that calculates mass conversions /////////*/
function massResult() {
  massCalculate();

  if (optionMass != 0) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("resultSum").innerHTML = this.responseText;
      }
    };
    xhttp.open(
      "GET",
      "views/show_results.php?unit_result=" +
        unitResult +
        "&data_unit=" +
        optionMassR,
      true
    );
    xhttp.send();
  }
}

/*///////// Function that calculates time conversions /////////*/
function timeResult() {
  timeCalculate();

  if (optionTime != 0) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("resultSum").innerHTML = this.responseText;
      }
    };
    xhttp.open(
      "GET",
      "views/show_results.php?unit_result=" +
        unitResult +
        "&data_unit=" +
        optionTimeR,
      true
    );
    xhttp.send();
  }
}

/*///////// Function that calculates volume conversions /////////*/
function volumeResult() {
  volumeCalculate();

  if (optionVolume != 0) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("resultSum").innerHTML = this.responseText;
      }
    };
    xhttp.open(
      "GET",
      "views/show_results.php?unit_result=" +
        unitResult +
        "&data_unit=" +
        optionVolumeR,
      true
    );
    xhttp.send();
  }
}
