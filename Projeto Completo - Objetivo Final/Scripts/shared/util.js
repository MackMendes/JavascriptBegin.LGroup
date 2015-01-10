// 1ª JS

// Esse function vai ser executada na agora que passar aki...
(function () {
    // Função quer será executada assim que a página for carregada!
    //window.onload = SetYearFooter;
    window.onload = ExecutarTodasFuncoes;
})();

// Função Nomeada (SetYearFooter)
function SetYearFooter() {
    // debugger: uma palavra reservada do JavaScript para debugar o código. Quando o Navegador estiver com o Console (f12) dele aberto, vai parar a interpretação
    // do código quando encontrar esse palavra
    debugger;
    var lblFooter = document.getElementById('lbltimeNow');
    // new Date() = Estamos instânciando a função Date() do javaScript, e chamando o getFullYear() para retornar o ano
    lblFooter.textContent = new Date().getFullYear().toString();
}


function ExecutarTodasFuncoes() {
    SetYearFooter();
    PreencheDDLCidade();
}

// ----
// Variável Global com o uma lista de objetos
var Cidades = [
    { texto: "São Paulo", valor: "SP" },
    { texto: "Rio de Janeiro", valor: "RJ" },
    { texto: "Bahia", valor: "BA" },
    { texto: "Minas Gerais", valor: "MG" },
    { texto: "Distrito Federal", valor: "DF" }
];

// Função para preencher o DropDownList
function PreencheDDLCidade() {
    var ddlCidade = document.getElementById('ddlCidade');

    var options = '<option value="0">--- Selecione ---</option>';
    var index = 0;
    do {
        options += '<option value="';
        options += Cidades[index].valor;
        options += '">';
        options += Cidades[index].texto;
        options += '</option>';
        index++;
    } while (Cidades.length > index);

    ddlCidade.innerHTML = options;
}