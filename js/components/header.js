function inyectHeader(){
    let footer = `
    <div id="icoNavIpn"></div>
      <div class="titleNavIpnContainer">
        <p class="titleNavIpn white-text">Polilibro Académico de Finanzas Empresariales</p>
      </div>
      <div id="icoNavEscom"></div>
    `;
    let footerListener = document.getElementById('nav-superior');
    footerListener.innerHTML = footer;
}

inyectHeader();