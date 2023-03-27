class ClienteController {
    inputNome;
    inputCpf;
    inputNumConta;
    inputSaldoConta;
    clientes;
    constructor() {
        this.inputNome =
            document.querySelector("#nome");
        this.inputCpf =
            document.querySelector("#cpf");
        this.inputNumConta =
            document.querySelector("#numero");
        this.inputSaldoConta =
            document.querySelector("#saldo");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        let novaContaCli = new Conta(this.inputNumConta.value, parseFloat(this.inputSaldoConta.value));
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value, novaContaCli);
        this.clientes.inserir(novoCliente);
        this.inserirCliente(novoCliente);
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirCliente(cliente);
        });
    }
    inserirCliente(cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.nome);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
