function SetData() {
    // debugger: Palavra do Javascript que faz break da execução no 
    // Navegador
    //debugger;
    // Estamos pegando o DOM do elemento Label
    var lblTimeYear = document.getElementById("lblTimeYear");
    lblTimeYear.textContent = "2015";
 }
// window.onload = É um evento do proprio navegador, através do JavaScritp.
// Que será acionado quando a página for totalmente renderizada. 

// Abaixo, estamos passando para o evento onload uma função anonima.
window.onload = function () {
    //debugger;
    SetData();
    IncluiOptionDeCidade();
}