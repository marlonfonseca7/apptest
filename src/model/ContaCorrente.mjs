import { Conta } from "./Conta.mjs";

export class ContaCorrente extends Conta{

    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        super(0,cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }
    
    //sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1;
        let saque = this._sacar(valor, taxa);
        Conta.cofre -= saque;
        return saque;

      
 
            
    }
}