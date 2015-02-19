// 2º JS

// Aqui no JS cadastrar, vamos manipular o DOM para validar o cadastrado do cliente. E só mostrar a mensagem de sucesso se estiver tudo 
// devidamente preenchido.

function Validar() {
    var txtNome = document.getElementById('txtNome');
    var txtTelefone = document.getElementById('txtTelefone');
    var txtEmail = document.getElementById('txtEmail');
    var txtDataNascimento = document.getElementById('txtDataNascimento');
    var ddlCidade = document.getElementById('ddlCidade');

    var isValido = true;

    // === : Igualdade de tipo e valor. Essa comparação não faz conversão de valores para saber o valor. Boa pratica utiliza-lo!
    // == : Igualdade de valor, somente. Ele converte um dos valores com base no outro, e assim faz a verificação dos valores.
    // http://stackoverflow.com/questions/359494/does-it-matter-which-equals-operator-vs-i-use-in-javascript-comparisons

    if (txtNome.value === '') {
        isValido = false;
        txtNome.classList.add('errorInput');
    }

    if (txtTelefone.value === '') {
        isValido = false;
        txtTelefone.classList.add('errorInput');
    }

    if (txtEmail.value === '') {
        isValido = false;
        txtEmail.classList.add('errorInput');
    }

    if (txtDataNascimento.value === '') {
        isValido = false;
        txtDataNascimento.classList.add('errorInput');
    }

    if (ddlCidade.value === '0') {
        isValido = false;
        ddlCidade.classList.add('errorInput');
    }

    if (isValido === false) {
        var divAlerta = document.getElementById('divAlert');
        var mensagem = '<strong>Atenção: </strong>Preencha os campos em destaque abaixo.'
        divAlerta.innerHTML = mensagem;
        divAlerta.classList.add('alert');
        divAlerta.classList.add('alert-danger');
    }

    return isValido;
}

function LimparMensagensErros() {
    var listClassErrorInput = document.getElementsByClassName('errorInput');

    while (listClassErrorInput.length > 0) {
        var index = (listClassErrorInput.length - 1);
        listClassErrorInput[index].classList.remove('errorInput');
    }

    var divAlerta = document.getElementById('divAlert');
    if (divAlerta.classList.contains('alert') || divAlerta.classList.contains('alert-danger')) {
        divAlerta.classList.remove('alert');
        divAlerta.classList.remove('alert-danger');
        divAlerta.innerHTML = '';
    }
}

function onCadastrarClick() {
    LimparMensagensErros();

    if (Validar()) {
        var txtNome = document.getElementById('txtNome');
        var txtTelefone = document.getElementById('txtTelefone');
        var txtEmail = document.getElementById('txtEmail');
        var txtDataNascimento = document.getElementById('txtDataNascimento');
        var ddlCidade = document.getElementById('ddlCidade');
        var ckbAtivo = document.getElementById('ckbAtivo');

        // Declarando um objeto 
        var Cliente = {}; // === new Objct();

        Cliente.nome = txtNome.value.trim();
        Cliente.telefone = txtNome.value.trim();
        Cliente.email = txtEmail.value.trim();
        Cliente.dataNascimento = txtDataNascimento.value.trim();
        Cliente.cidade = ddlCidade.value;
        Cliente.isAtivo = ckbAtivo.checked;

        // *** Após criar o 3º Js (index.js) vamos adicionar a linha abaixo:
        // Adicionando Cliente na lista de Cliente, só que... esse JS esta acima do index.js. Então, vamos organizar a ordem...
        // ** Falar sobre a forma de leitura do Navegador e a ordem interfere um com o outro...
        AdicionarCliente(Cliente);

        MensagemSucesso();
        LimparCampos();

        // Depois de criar o 4º JS:
        ListarCliente();
        return true;
    }

    return false;
}

function MensagemSucesso() {
    var divAlerta = document.getElementById('divAlert');
    var mensagem = '<strong>Sucesso: </strong>Cliente cadastrado com sucesso!'
    divAlerta.innerHTML = mensagem;
    
    // Atribuindo a lista de classes da div, a nova classes alert
    divAlerta.classList.add('alert');
    divAlerta.classList.add('alert-success');
    DesaparecerMensagemSucesso();
}

// Função para LimparMensagem da Div Alerta
function LimparMensagem() {
    var divAlerta = document.getElementById('divAlert');
    divAlerta.innerHTML = '';
    
    // Remove da lista de classes da div, as classes abaixo
    divAlerta.classList.remove('alert');
    divAlerta.classList.remove('alert-success');
}

// Função para LimparCampos
function LimparCampos() {
    // Cada HTML tem sua particularidade para manipular os dados dele
    document.getElementById('txtNome').value = '';
    document.getElementById('txtTelefone').value = '';
    document.getElementById('txtEmail').value = '';
    document.getElementById('txtDataNascimento').value = '';
    document.getElementById('ddlCidade').selectedIndex = 0;
    document.getElementById('ckbAtivo').checked = false;
    document.getElementById('lblValorDDLCidade').textContent = '';
    document.getElementById('lblValorKeyPressTelefone').textContent = '';
}

function DesaparecerMensagemSucesso() {
    // setTimeout é uma função JavaScript que executa uma função após algums minutos...
    window.setTimeout(
        // Criando uma function anônima
        function () {
            LimparMensagem();
        }, 5000);
}

// Função executada no evento Blur do Text da Data de Nascimento
function onValidaDataNascimentoBlur(domHtml) {
    if (domHtml.value !== '') {
        // Validando se o formato da Data esta correta
        var arrayDiaMesAno = domHtml.value.split('/');
        if (arrayDiaMesAno.length == 3) {
            var dia = parseInt(arrayDiaMesAno[0]);
            var mes = parseInt(arrayDiaMesAno[1]);
            var ano = parseInt(arrayDiaMesAno[2]);

            // Validar se o que foi digitado só tem números
            if (isNaN(dia) || isNaN(mes) || isNaN(ano)) {
                alert('Por favor, digite uma data válida.');
                domHtml.value = '';
            }
            
            // Validar se a data esta correta...
            var mesString = (mes.toString().length === 1 ? "0" + mes.toString() : mes.toString());
            var diaString = (dia.toString().length === 1 ? "0" + dia.toString() : dia.toString());
            var dateString = diaString + "/" + mesString + "/" + ano;
            var data = new Date(ano + "-" + mesString + "-" + diaString + "T03:24:00");
            
            if (dateString !== data.toLocaleDateString()) {
                alert('Por favor, digite uma data válida.');
                domHtml.value = '';
            }

        }
        else {
            alert('Por favor, adicionar uma data.');
            domHtml.value = '';
        }
    }
}


function onValidaEmailBlur(domHtml) {
    if (domHtml.value !== '') {
        // indexOf é uma função JavaScript disponível em valores do tipo string. Ele busca na string o char indicado no parâmetro de entrada.
        var resultadoIndexOf = domHtml.value.indexOf('@');
        if (resultadoIndexOf === -1) {
            alert('Por favor, digite um e-mail válido.');
            domHtml.value = '';
        }
    }
}

// Função executada no evento Change do DropDownList (select)
function onShowValorChange(domHtml) {
    var lblValorDDLCidade = document.getElementById('lblValorDDLCidade');
    var textDDL = '';
    if (domHtml.selectedIndex > 0) {
        textDDL = domHtml.options[domHtml.selectedIndex].text;
    }
    lblValorDDLCidade.textContent = textDDL;
}

// Função que é executado no evento KeyDown
function onValidarTelefoneKeyDown(evt) {
    // Em todos os eventos, por tras dos panos, é setado na variável "event" o evento assionado...

    // If Ternário para verificar no objeto event que o JavaScript retorna, tem o código da tecla na propriedade keyCode ou na charCode
    var tecla = (evt.keyCode ? evt.keyCode : evt.charCode);
    var lblValorKeyPressTelefone = document.getElementById('lblValorKeyPressTelefone');

    // Teclar com o código entre 48 e 59 ou entre 96 e 105, são númericos
    if ((tecla >= 48 && tecla <= 59) || (tecla >= 96 && tecla <= 105)) {
        lblValorKeyPressTelefone.textContent = 'Numérico';
    }
    else {
        lblValorKeyPressTelefone.textContent = '';
    }
}
