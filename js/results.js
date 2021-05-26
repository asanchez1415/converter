/*///////// Function that calculates mass conversions /////////*/
function massResult() {
  massCalculate();
  showResult();
}

function copy(id_element) {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById(id_element).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}
