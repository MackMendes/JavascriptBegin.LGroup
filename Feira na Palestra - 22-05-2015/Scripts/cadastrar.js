// Variavel Global 
// Que contem um array([]) de objetos({})
var listaCidades = [
	{ estado: "São Paulo", uf: "SP" },
	{ estado: "Rio de Janeiro", uf: "RJ" },
	{ estado: "Minas Gerais", uf: "MG" },
	{ estado: "Bahia", uf: "BA" }	
];


// Por boa pratica, colocar on{nome da função}{nome do evento}
// Caso, utilizamos essa função para algum evento
function onCadastrarClick() {
	RemoveClassErrorInput();
	if (ValidarCampos()) {
		var txtNome = document.getElementById("txtNome");
		var txtTelefone = document.getElementById('txtTelefone');
	    var txtEmail = document.getElementById('txtEmail');
	    var ddlCidade = document.getElementById('ddlCidade');
	    var ckbAtivo = document.getElementById('ckbAtivo');
		
		// Criando um objeto em JS para armazenar os dados digitados.
		var cliente = {};//new Object();
		cliente.Nome = txtNome.value;
		cliente.Telefone = txtTelefone.value;
		cliente.Email = txtEmail.value;
		cliente.Cidade = ddlCidade.value;
		cliente.IsAtivo = ckbAtivo.checked;
		
		// Mandando para a função o objeto com os dados da página
		AdicionarClienteALista(cliente);
		// Lista os clientes cadastrados com sucesso
		ListarClientes();
		
		ShowMensagem("Cliente Salvo com sucesso!", 'alert-success');
		window.setTimeout(RemoveMensagemDeSucesso, 2000);
		LimparCampos();
	}
	
}

// Função para Validar os campos
function ValidarCampos(){
	// Através do DOM (Document Object Model), estavamos 
	// pegando os elementos HTML de todos os inputs que 
	// vamos validar
	var txtNome = document.getElementById("txtNome");
	var txtTelefone = document.getElementById('txtTelefone');
	var txtEmail = document.getElementById('txtEmail');
	var ddlCidade = document.getElementById('ddlCidade');
	
	var isValido = true;
	
	// ==  Vai ser validado apenas os valores. Não é fiel ao resultado informado.
	// === Vai ser validado o tipo, depois o valor. É mais fiel ao resultado.
	if (txtNome.value === "") {
		// Adicionando uma classe (CSS) no input
		txtNome.classList.add('errorInput');
		isValido = false;	
	}
	
	
   if (txtTelefone.value === "") {
		txtTelefone.classList.add('errorInput');
		isValido = false;	
	}
	
	if (txtEmail.value === "") {
		txtEmail.classList.add('errorInput');
		isValido = false;	
	}
	
	if (ddlCidade.value === "") {
		ddlCidade.classList.add('errorInput');
		isValido = false;	
	}
	
	// !isValido
	// isValido !== true
	if(isValido === false){
		var mensagem = 'Por favor, informe os dados em destaque abaixo.';
		ShowMensagem(mensagem, 'alert-danger');
	}
	
	return isValido;
}

// Inclui na DIV (divAlert) a mensagem passada por parêmtro entrada!
function ShowMensagem(mensagem, nameClass) {
	var divAlert = document.getElementById('divAlert');
	divAlert.innerHTML = mensagem;
	divAlert.classList.add('alert');
	divAlert.classList.add(nameClass);
}

// Remove as classes de errorInput que exister no HTML
function RemoveClassErrorInput() {
	RemoveMensagem('alert-danger');
	
	// Pegando todos os elementos da página que estiver com a classe 
	// errorInput.
	var listInputErrorClass = document.getElementsByClassName('errorInput');
	// Percorre esta lista e sempre remove o primeiro
	// Porque, ao remover a classe deste primeiro da lista
	// ele vai modificando (removendo) esse item da lista também!
	// Trabalhando com o DOM, temos essas peculariedade! 
	while(listInputErrorClass.length > 0){
		listInputErrorClass[0].classList.remove('errorInput');
	}	
}

// Inclui option (HTML) no select da página
function IncluiOptionDeCidade() {
	var options = '<option value="">--- Selecionar ---</option>';
	for (var i = 0; i < listaCidades.length; i++) {
		options += '<option value="' + listaCidades[i].uf + '">';
		options += listaCidades[i].estado;
		options += '</option>';
	}
	document.getElementById('ddlCidade').innerHTML = options;
}

// Remove a mensagem da DIV e remove as classes também.
function RemoveMensagem(nameClass) {
 	var divAlert = document.getElementById('divAlert');
	divAlert.innerHTML = '';
	divAlert.classList.remove('alert');
	divAlert.classList.remove(nameClass);
}

// Limpa todos os campos da página
function LimparCampos() {
	document.getElementById("txtNome").value = '';
	document.getElementById('txtTelefone').value = '';
	document.getElementById('txtEmail').value = '';
	document.getElementById('ddlCidade').value = '';
	document.getElementById('ckbAtivo').checked = false;
}

// Remove a mensagem de sucesso
function RemoveMensagemDeSucesso() {
	RemoveMensagem('alert-success');
}