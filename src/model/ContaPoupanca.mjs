import { Conta } from "./Conta.mjs"

export class ContaPoupanca extends Conta {

    static numeroDeContas= 0;
    constructor (cliente, agencia) {
        super (0, cliente, agencia);
        ContaPoupanca.numeroDeContas += 1;
    }

    sacar (valor) {
        let taxa = 1.02;
        let saque = this._sacar(valor, taxa);
        Conta.cofre -= saque;
        return saque;
    }
}