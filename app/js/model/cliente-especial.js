class ClienteEspecial extends Cliente {

    constructor(nome, cpf, conta, depends) {
        super(nome, cpf, conta);
        this.dependentes = new Array();
        this.dependentes = depends;
    }

}