class ClienteEspecial extends Cliente {

    private dependentes: Array<string>;

    constructor(nome: string, cpf: string, conta: Conta, depends: Array<string>) {
        super(nome, cpf, conta);
        this.dependentes = new Array<string>();
        this.dependentes = depends;
    }

}