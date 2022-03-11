import { Cliente } from "../model/Cliente.mjs";
import { Conta } from "../model/Conta.mjs";
import { ContaCorrente } from "../model/ContaCorrente.mjs";
import { ContaPoupanca } from "../model/ContaPoupanca.mjs";


const cliente1 = new Cliente ('Pink', '618');
const cliente2 = new Cliente ('Cerebro', '539');

console.log(cliente1);
console.log(cliente2);

const conta1 = new Conta (800, cliente1, 1001);
const conta2 = new Conta (1000, cliente2, 2001);

console.log(conta1);
