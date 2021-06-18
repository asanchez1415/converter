let locationPath = window.location.pathname;
let locationView = "views";
let position = locationPath.indexOf(locationView);


if (position !== -1) {
  //En caso de estar posicionado en una unidad de medida
  document.getElementById("header").innerHTML = `<nav class="color-nav-footer">
  <div class="nav-wrapper">
    <button data-target="slide-out" class="sidenav-trigger button-menu"><i class="fas fa-bars"></i></button>
    <a href="../index.html" class="brand-logo">Inicio</a>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger"></a>
  </div>
  </nav>`;
} else {
  //En caso de estar posicionado en la raiz
  document.getElementById("header").innerHTML = `<nav class="color-nav-footer">
<div class="nav-wrapper">
  <button class="sidenav-trigger button-menu"><i class="fas fa-home"></i></button>
  <a href="index.html" class="brand-logo">Menú</a>
  <a href="#" data-target="mobile-demo" class="sidenav-trigger"></a>
</div>
</nav>`;
}
