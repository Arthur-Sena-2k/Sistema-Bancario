class ClienteController {

    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;
    private inputSaldoConta: HTMLInputElement;

    private _clientes: Clientes;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nome")
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta =
            <HTMLInputElement>document.querySelector("#numero");
        this.inputSaldoConta =
            <HTMLInputElement>document.querySelector("#saldo");
        
        this._clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novaConta = new Conta(this.inputConta.value);
        let novoCliente = new Cliente(this.inputNome.value,
            this.inputCpf.value, novaConta);

        this._clientes.inserir(novoCliente);
        this.inserirCliente(novoCliente);
    }

    listar() {
        this._clientes.listar().forEach(
            cliente => {
                this.inserirCliente(cliente);
            }
        );
    }

    inserirCliente(cliente: Cliente) {
        const elementoCLI = document.createElement('CLI');
        elementoCLI.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this._clientes.remover(cliente.nome);
                (<Element>event.target).parentElement.remove();
            }
        );
        elementoCLI.appendChild(botaoApagar);
        document.body.appendChild(elementoCLI);
    }


}