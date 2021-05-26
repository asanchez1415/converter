function showResult() {
  let tableHtml = `<table class="table-result centered col">
      <thead>
        <tr>
          <th>UNIDAD DE MEDIDA</th>

          <th></th>

          <th>RESULTADO</th>

          <th></th>

        </tr>
      </thead>
      
      <tbody>  
        ${unitAndResult
          .map(
            (element) =>
              `<tr>
              <td>
                <b class="unit-result">${optionMassR}</b>
                <i class="fas fa-arrow-right"></i>
                <b class="unit-result">${element.unit}</b>
              </td>

              <th>
                <i class="fas fa-equals"></i>
              </th>

              <td>
                <b id="${element.unit}" class="result">${element.result}</b>
              </td>

              <td>
                <button class="button-copy" onclick="copy('${element.unit}')"><i class="far fa-copy icon-copy"></i></button>
              </td>
              </tr>`
          )
          .join("")}
      </tbody>
    </table>`;
  document.getElementById("resultSum").innerHTML = tableHtml;
}
