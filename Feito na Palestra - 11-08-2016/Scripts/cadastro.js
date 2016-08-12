
function onCadastrarClienteClick() {
    RemoveMensagemErro();

    var txtNome = document.getElementById('txtNome');
    var txtTelefone = document.getElementById('txtTelefone');
    var txtEmail = document.getElementById('txtEmail');
    var ddlCidade = document.getElementById('ddlCidade');
    var ckbAtivo = document.getElementById('ckbAtivo');

    if (ValidarCadastro(txtNome, txtTelefone, txtEmail, ddlCidade)) {
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
        ListarClientes();  // Esta na página Cadastro.js
    }

}

function ValidarCadastro(txtNome, txtTelefone, txtEmail, ddlCidade) {
    var validado = true;
    if (txtNome.value === '') {
        validado = false;
        txtNome.classList.add('errorInput');
    }

    if (txtTelefone.value === '') {
        validado = false;
        txtTelefone.classList.add('errorInput');
    }

    if (txtEmail.value === '') {
        validado = false;
        txtEmail.classList.add('errorInput');
    }

    if (ddlCidade.value === '') {
        validado = false;
        ddlCidade.classList.add('errorInput');
    }

    if (!validado) {// (validado == false)// 
        MostrarMensagemErro();
    }
    return validado;
}

function MostrarMensagemErro() {
    var divAlert = document.getElementById('divAlert');
    divAlert.classList.add("alert");
    divAlert.classList.add("alert-danger");

    // innerHTML: É para incluir um HTML no elemento do DOM
    divAlert.innerHTML = '<strong>Atenção: </strong>' +
        'Por favor, preencha os campos indicados abaixo.';
}

// Remove mensagem de Erro
function RemoveMensagemErro() {
    //debugger;
    var todosElementosComEssaClass = document.getElementsByClassName('errorInput');
    while (todosElementosComEssaClass.length > 0) {
        todosElementosComEssaClass[0].classList.remove("errorInput");
    }

    var divAlert = document.getElementById('divAlert');
    divAlert.classList.remove("alert");
    divAlert.classList.remove("alert-danger");
    divAlert.innerHTML = '';
}

// Mostra mensagem Sucesso
function MensagemSucesso() {
    var mensagem = '<strong>Sucesso: </strong>'
    + 'Cliente cadastro com sucesso!';

    AtribuiMensagem(mensagem);

    var divAlert = document.getElementById('divAlert');
    divAlert.classList.add('alert');
    divAlert.classList.add('alert-success');

    setTimeout(RemoveMensagemSucesso, 5000);
}

// Remove mensagem de Sucesso
function RemoveMensagemSucesso() {
    AtribuiMensagem('');

    var divAlert = document.getElementById('divAlert');
    divAlert.classList.remove('alert');
    divAlert.classList.remove('alert-success');
}

// Atribui mensagem
function AtribuiMensagem(mensagem) {
    var divAlert = document.getElementById('divAlert');
    divAlert.innerHTML = mensagem;
}

// Limpa todos os campos
function LimparCampos() {
    document.getElementById('txtNome').value = '';
    document.getElementById('txtTelefone').value = '';
    document.getElementById('txtEmail').value = '';
    document.getElementById('ddlCidade').selectedIndex = 0;
    document.getElementById('ckbAtivo').checked = false;
}