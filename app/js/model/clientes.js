class Clientes {
    clientes;
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(nome) {
        const clienteARemover = this.pesquisar(nome);
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(nome) {
        return this.clientes.find(cliente => cliente.nome === nome);
    }
    listar() {
        return this.clientes;
    }
}
