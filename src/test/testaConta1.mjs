import { Cliente } from "../model/Cliente.mjs";
import { Conta } from "../model/Conta.mjs";
import { ContaCorrente } from "../model/ContaCorrente.mjs";
import { ContaPoupanca } from "../model/ContaPoupanca.mjs";


const cliente1 = new Cliente ('Pink', '618');
const cliente2 = new Cliente ('Cerebro', '539');

console.log(cliente1);
console.log(cliente2);

const conta1 = new ContaCorrente (800, cliente1, 1001);
const conta2 = new ContaPoupanca (1000, cliente2, 2001);

let sac = conta1.sacar(200);

let sac1 = conta2.sacar(400);

console.log(conta1);
console.log(conta2);

console.log(cliente1, 'salado atual: ', conta1.saldo);
console.log(cliente2, 'saldo atual: ', conta2.saldo);
