let locationPath = window.location.pathname;
let locationView = "views";
let position = locationPath.indexOf(locationView);

if (position !== -1) {
  document.getElementById("header").innerHTML = `<nav class="color-nav-footer">
  <div class="nav-wrapper">
    <a href="../index.html" class="brand-logo">Convertidor</a>
    <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="fas fa-calculator"></i></a>
    <!--  <ul class="right hide-on-med-and-down">
      <li><a href="sass.html"><i class="fas fa-balance-scale-right"></i>Entre masa</a></li>
      <li><a href="badges.html">Components</a></li>
      <li><a href="collapsible.html">Javascript</a></li>
      <li><a href="mobile.html">Mobile</a></li>
    </ul> -->
  </div>
  </nav>`;
} else {
  document.getElementById("header").innerHTML = `<nav class="color-nav-footer">
<div class="nav-wrapper">
  <a href="index.html" class="brand-logo">Convertidor</a>
  <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="fas fa-calculator"></i></a>
  <!--  <ul class="right hide-on-med-and-down">
    <li><a href="sass.html"><i class="fas fa-balance-scale-right"></i>Entre masa</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul> -->
</div>
</nav>`;
}
