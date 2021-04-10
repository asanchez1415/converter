function printTypeOperation(paragraphFinal, titleFinal, unitComplete) {
  var textHTML = `              
	<div class="container center-page">
		<h3 class="center">${titleFinal}</h3>
		<div class="section center">
			<h6>${paragraphFinal}</h6>
		</div>

		<br>

		<div class="row valign-wrapper">
			<div class="input-field col s8 m6 l5 custom-align-right">
				<input class="browser-default num-input validate custom-input" id="num1" placeholder="Ingrese un número"
				type="number">
			</div>
			<div class="input-field col s4 m4 l3 custom-align-left">
				<select class="browser-default unit-select" id="optionMass">
					<option value="0">Unidad</option>
					${unitComplete}
				</select>
			</div>
		</div>

		<br>

	  	<div class="row center">
		  <button class="waves-effect waves-light btn-large" type="button" onclick="massResult()">CONVERTIR!</button>
	  	</div>

		<br>

        <div class="container" id="resultSum"></div>
    </div>`;
  document.getElementById("operation").innerHTML = textHTML;
}
