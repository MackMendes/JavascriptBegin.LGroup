var listClientes = [];

function ListarClientes() {
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