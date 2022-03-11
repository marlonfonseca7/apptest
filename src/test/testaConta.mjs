import { Cliente } from "../model/Cliente.mjs";
import { Conta } from "../model/Conta.mjs";

//Instância
//Lado direito - manda nascer um objeto
//Lado esquerdo - manda nascer uma variável
//Atribuição - A variavel cliente1 recebe o endereço do objeto que acabou de ser instanciado/nascer
const cliente1 = new Cliente('loop','123');
const cliente2 = new Cliente('mib', '345');
//const cliente3 = new Cliente('branquinha', '678');

//mostra o objeto atraves da variavel de referencia
console.log(cliente1);

//variáveis de referência -> conta, conta2
const conta = new Conta(100, cliente1, 1001 );
const conta2 = new Conta(200, cliente2, 1002 );
//const conta3 = new Conta(300, cliente3, 1003 );
console.log(conta);

//Ao criar um objeto dentro de uma classe, uma varíavel estática também é criada;
//Essa variável pertence a CLASSE e não ao OBJETO;

let sac = conta.sacar(20);
console.log(sac);
console.log(conta.saldo);

let transf = conta.transferir(30, conta2);
console.log(conta.saldo);
console.log(conta2.saldo);

//Na aula de hoje dois Cliente abriram conta, depositaram sacaram e houve até transferência.
//O banqueiro Tio Patinhas deseja saber o valor total de dinheiro que tem no banco.
//Exercicio : Mostrar o valor total de dinheiro depositado no banco.

//let valorBanco = conta.saldo + conta2.saldo + conta3.saldo;
//console.log("Valor no banco: " +valorBanco)

console.log(Conta.cofre);