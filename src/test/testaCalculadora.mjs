import { Calculadora } from "../model/Calculadora.mjs";
// Atribuição de Instância - Linha de comando;
//  (LADO DIREITO) Manda nascer um objeto - Todo objeto é instância de um tipo de classe;
//  (LADO ESQUERDO) Manda nascer uma variável - Essa variável vai receber o endereço do objeto que nasceu do lado direito. 
//  Variável conta - Contém o endereço do objeto Calculadora para mexer com os elementos desse objeto, só atráves dessa variável
//  conta - É variável referência para chegar no objeto.
const conta = new Calculadora();
console.log('as variáveis do objeto nascem vazias: ',conta._number1);

// expressão : 5 + 2 * 3 - 4 / 2 - 1 + 9
console.log('Calcular a expressão : 5 + 2 * 3 - 4 / 2 - 1 + 9');

//Passo 1 - Multiplicação (2*3)
conta.number1 = 2;
conta.number2 = 3;
let valorMultiplicacao = conta.multiplicacao(conta.number1, conta.number2);
console.log('O valor retornado do método Multiplicacao (2*3): ', valorMultiplicacao);

//Passo 2 - Divisão (4/2)
conta.number1 = 4;
conta.number2 = 2;
let valorDivisao = conta.divisao(conta.number1,conta.number2);
console.log('O valor retornado do método Divisao (4/2): ', valorDivisao);

//Passo 3 - Soma (5+6)
conta.number1 = 5;
conta.number2 = 6;
let valorSoma = conta.soma(conta.number1,conta.number2);
console.log('O valor retornado do método Soma (5+6): ', valorSoma)

//Passo 4 - Subtração (11-2)
conta.number1 = 11;
conta.number2 = 2;
let valorSubtracao = conta.subtracao(conta.number1,conta.number2);
console.log('O valor retornado do método Subtracao (11-2): ', valorSubtracao);

//Passo 5 - Subtração (9-1)
conta.number1 = 9;
conta.number2 = 1;
let valorSubtracao2 = conta.subtracao(conta.number1,conta.number2);
console.log('O valor retornado do método Subtracao (9-1): ', valorSubtracao2);

//Último passo - Soma (8+9)
conta.number1 = 8;
conta.number2 = 9;
let valorSoma2 = conta.soma(conta.number1,conta.number2);
console.log('O valor final é: ', valorSoma2);




