function mass() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("operation").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "views/operations/mass_o.html", true);
  xhttp.send();
}

function time() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("operation").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "views/operations/time_o.html", true);
  xhttp.send();
}

function volume() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("operation").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "views/operations/volume_o.html", true);
  xhttp.send();
}
