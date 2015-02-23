// [] = Estamos criando uma variavel global, do tipo Array.
// {} = Criação de Objeto
var ListCidades = [
 { texto: "São Paulo", valor: "SP" },
 { texto: "Rio de Janeiro", valor: "RJ" },
 { texto: "Minas Gerais", valor: "MG" },
 { texto: "Bahia", valor: "BA" }
];

// Declarando uma variavel de Array
var listClientes = [];

function onCadastrarClick() {
    RemoveClassErrorInput();
    RemoveMensagemErro();
    if (Validacao() === true) {

        var txtNome = document.getElementById('txtNome');
        var txtTelefone = document.getElementById('txtTelefone');
        var txtEmail = document.getElementById('txtEmail');
        var ddlCidade = document.getElementById('ddlCidade');
        var ckbAtivo = document.getElementById('ckbAtivo');

        // Atribuindo um objeto em JavaScript
        var cliente = {};
        cliente.Nome = txtNome.value;
        cliente.Telefone = txtTelefone.value;
        cliente.Email = txtEmail.value;
        cliente.Cidade = ddlCidade.value;
        cliente.IsAtivo = ckbAtivo.checked;

        listClientes.push(cliente);

        LimparCampos();
        MensagemSucesso();
        ListarClientes();
    }
}

function Validacao() {
    var isValido = true;

    var txtNome = document.getElementById('txtNome');
    var txtTelefone = document.getElementById('txtTelefone');
    var txtEmail = document.getElementById('txtEmail');
    var ddlCidade = document.getElementById('ddlCidade');

    // == : É a igual de valor, somente. Mesmo sendo 
    // em tipos diferentes. Não da total certeza no 
    // resultado.

    // === : É uma igualdade de valores e tipo! É mais 
    // fiel no resultado.

    if (txtNome.value === "") {
        isValido = false;
        txtNome.classList.add('errorInput');
    }

    if (txtTelefone.value === "") {
        isValido = false;
        txtTelefone.classList.add('errorInput');
    }

    if (txtEmail.value === "") {
        isValido = false;
        txtEmail.classList.add('errorInput');
    }

    if (ddlCidade.value === "") {
        isValido = false;
        ddlCidade.classList.add('errorInput');
    }

    if (!isValido) {
        MensagemErro();
    }

    return isValido;
}

function RemoveClassErrorInput() {
    var listInputComClass =
        document.getElementsByClassName('errorInput');

    var index = 0;
    while (listInputComClass.length > 0) {
        listInputComClass[index]
            .classList.remove('errorInput');
    }
}

function MensagemErro() {
    var mensagem = '<strong>Atenção: </strong>'
    + 'Por favor, preencha os campos indicados abaixo.';

    AtribuiMensagem(mensagem);

    var divAlert = document.getElementById('divAlert');
    divAlert.classList.add('alert');
    divAlert.classList.add('alert-danger');
}

function RemoveMensagemErro(){
    AtribuiMensagem('');

    var divAlert = document.getElementById('divAlert');
    divAlert.classList.remove('alert');
    divAlert.classList.remove('alert-danger');
}

function AtribuiMensagem(mensagem){
    var divAlert = document.getElementById('divAlert');
    divAlert.innerHTML = mensagem;
}

function PreencheCidade(){
    var options = '<option value="">-- Selecione --</option>';
    var ddlCidade = document.getElementById('ddlCidade');
    for (var i = 0; ListCidades.length > i; i++) {
        options += '<option value="' + 
        ListCidades[i].valor + '">' + 
        ListCidades[i].texto + '</option>';        
    }

    ddlCidade.innerHTML = options;
}

function MensagemSucesso(){
    var mensagem = '<strong>Sucesso: </strong>'
    + 'Cliente cadastro com sucesso!';

    AtribuiMensagem(mensagem);

    var divAlert = document.getElementById('divAlert');
    divAlert.classList.add('alert');
    divAlert.classList.add('alert-success');

    setTimeout(RemoveMensagemSucesso, 5000);
}

function RemoveMensagemSucesso(){
    AtribuiMensagem('');

    var divAlert = document.getElementById('divAlert');
    divAlert.classList.remove('alert');
    divAlert.classList.remove('alert-success');
}

function LimparCampos(){
    document.getElementById('txtNome').value = '';
    document.getElementById('txtTelefone').value = '';
    document.getElementById('txtEmail').value = '';
    document.getElementById('ddlCidade').selectedIndex = 0;
    document.getElementById('ckbAtivo').checked = false;
}

function ListarClientes(){
    var tbodyListaCliente = 
    document.getElementById('tbodyListaCliente');
    var bodyTable = '';

    for (var i = 0; listClientes.length > i; i++) {

        bodyTable += '<tr>';

        bodyTable += '<td>'; 
        bodyTable += (i + 1).toString();
        bodyTable += '</td>';
        bodyTable += '<td>'; 
        bodyTable += listClientes[i].Nome;
        bodyTable += '</td>';
        bodyTable += '<td>'; 
        bodyTable += listClientes[i].Telefone;
        bodyTable += '</td>';
        bodyTable += '<td>'; 
        bodyTable += listClientes[i].Email;
        bodyTable += '</td>';
        bodyTable += '<td>'; 
        bodyTable += listClientes[i].Cidade;
        bodyTable += '</td>';
        bodyTable += '<td>'; 
        bodyTable += listClientes[i].IsAtivo;
        bodyTable += '</td>';

        bodyTable += '</tr>';

    }



    tbodyListaCliente.innerHTML = bodyTable;
}