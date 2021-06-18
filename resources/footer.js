let locationPathFooter = window.location.pathname;
let locationViewFooter = "views";
let positionFooter = locationPathFooter.indexOf(locationView);

if (positionFooter !== -1) {
//En caso de estar posicionado en una unidad de medida
document.getElementById("footer").innerHTML = `
<footer class="page-footer color-nav-footer">
<div class="container">
  <div class="row">
    <div class="col l6 s12">
      <h5 class="white-text">Footer Content</h5>
      <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
    </div>
    <div class="col l4 offset-l2 s12">
    <ul>
      <li><a class="grey-text text-lighten-3" href="#!">Unidades SI</a></li>
      <img src="../images/map_si.svg.png" alt="Unidades SI" width="200" height="200">
    </ul>
    </div>
  </div>
</div>

<div class="footer-copyright">
  <div class="container">
    © 2021 designed by <a href="https://github.com/asanchez1415" target="_blank">asanchez1415</a>
  </div>
</div>

</footer>`;
} else {
  //En caso de estar posicionado en la raiz
  document.getElementById("footer").innerHTML = `
  <footer class="page-footer color-nav-footer">
  <div class="container">
    <div class="row">
      <div class="col l6 s12">
        <h5 class="white-text">Footer Content</h5>
        <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
      </div>
      <div class="col l4 offset-l2 s12">
      <ul>
        <li><a class="grey-text text-lighten-3" href="#!">Unidades SI</a></li>
        <img src="images/map_si.svg.png" alt="Unidades SI" width="200" height="200">
      </ul>
      </div>
    </div>
  </div>
  
  <div class="footer-copyright">
    <div class="container">
      © 2021 designed by <a href="https://github.com/asanchez1415" target="_blank">asanchez1415</a>
    </div>
  </div>
  
  </footer>`;
}

