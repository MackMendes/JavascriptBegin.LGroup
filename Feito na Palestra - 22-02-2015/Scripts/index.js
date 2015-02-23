function SetAno() {
    // debugger = É uma palavra chave do JavaScript que, quando o navegador
    // identificar esse palavra, vai parar a execução. Debugger do JS.
    debugger;
    // Abaixo estamos pegando o DOM da Label que esta no Footer
    var lblTime = document.getElementById("lblTimeYear");
    // Atribuindo um texto para a Label
    lblTime.textContent = "2015";
}

function CarregarNoOnLoadDaPagina(){
	SetAno();
	PreencheCidade();
}


// window.onload = É um evento da página que será executado 
// quando todos os elementos HTML's forem renderizados.
window.onload = CarregarNoOnLoadDaPagina;
