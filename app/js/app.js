let contaController = new ContaController();
let clienteController = new ClienteController();
contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
const customer1 = new Cliente('Rafael', '14785236910', '3');
const customer2 = new Cliente('Misael', '10963258741', '4');
const customers = new Clientes();

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);




