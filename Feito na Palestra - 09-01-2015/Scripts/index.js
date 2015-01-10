// Retiramos da página HTML os scripts pois, o arquivo responsável pelo JavaScript não é o html... e sim um JS.

// [] = É a declaração de um Array (lista);
// {} = É a declaração de um Objeto
// Variável Global
var objectCidade = [
    { texto: 'São Paulo', valor: 'SP' },
    { texto: 'Rio de Janeiro', valor: 'RJ' },
    { texto: 'Minas Gerais', valor: 'MG' }
];


// Função Anônima
(function () {
    // OnLoad é um evento do Navegador, 
    // que é executado no final de rendezar o HTML (depois que a página foi carregada)
    window.onload = ExecutarJavaScriptAposPagina;
})();

// Deixamos a responsabilidade de Executar Funções JavaScritp após a página ser carregada, nesse função ExecutarJavaScriptAposPagina();
function ExecutarJavaScriptAposPagina() {
    // Aqui temos uma função (ExecutarJavaScriptAposPagina()) chamando outras...
    AtribuirAno();
    PreencheCidade();
}

// Função Nomeada
function AtribuirAno() {
    // debugger : Palavra reservada do javacript, 
    // para informar ao navegador que ao passar por aqui têm parar, com o console do navegador aberto.(f12)
    debugger;

    // Manipulando o DOM (Document Object Model) da página. Através da função getElementById, pegamos o DOM do HTML através do ID.
    var lblTimeYear = document.getElementById('lblTimeYear');
    // new Date() = Estamos instânciando a função Date() do javaScript, e chamando o getFullYear() para retornar o ano
    lblTimeYear.textContent = new Date().getFullYear();
}

// Por conversão de boas práticas, função que é chamada na página coloca-se o nome do evento no final "Click" 
function onCadastrarClienteClick() {
    if (ValidarCadastroCliente()) {
        alert('Validado!!!');
    }
}

function ValidarCadastroCliente() {
    debugger;
    var isValido = true;
    var nome = document.getElementById('txtNome');
    var cidade = document.getElementById('ddlCidade');
    var ckbAtivo = document.getElementById('ckbAtivo');

    var mensagemErro = '';

    // === : Igualdade de tipo e valor. Essa comparação não faz conversão de valores para saber o valor. Boa pratica utiliza-lo!
    // == : Igualdade de valor, somente. Ele converte um dos valores com base no outro, e assim faz a verificação dos valores.
    // http://stackoverflow.com/questions/359494/does-it-matter-which-equals-operator-vs-i-use-in-javascript-comparisons
    if (nome.value.trim() === "") {
        mensagemErro = mensagemErro + 'Por favor, informe o Nome \n';
        isValido = false;
    }

    if (cidade.value === "0") {
        mensagemErro = mensagemErro + 'Por favor, selecione a Cidade \n';
        isValido = false;
    }

    if (ckbAtivo.checked === false) {
        mensagemErro = mensagemErro + 'Cliente tem que ser ativo. \n';
        isValido = false;
    }

    if (isValido === false) {
        alert(mensagemErro);
    }

    return isValido;
}

// Função para preenche o Select (DropDownList) de Cidade
function PreencheCidade() {
    var ddlCidade = document.getElementById('ddlCidade');
    var htmlOpction = '<option value="0">--- Selecione ---</option>';

    for (var i = 0; i < objectCidade.length; i++) {
        htmlOpction += '<option value="' + objectCidade[i].valor + '">'
        htmlOpction += objectCidade[i].texto
        htmlOpction += '</option>'
    }

    ddlCidade.innerHTML = htmlOpction;
}