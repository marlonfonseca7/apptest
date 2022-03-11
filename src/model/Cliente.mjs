export class Cliente 

{
    // this.nome = x;  this.cpf = y;  constructor (x,y)
   
// Quando instanciar o objeto vai ser obrigado a passar 2 valores do construtor (assinatura do construtor)
// No momento de quem executar o método do construtor ele só vai ser executado durante a montagem do objeto
    constructor (nome, cpf) 
    {
        this._nome = nome;
        this._cpf = cpf;
    }

    //Métodos Acessores
    get nome() {
        return this._nome;
    }

    get cpf() {
        return this._cpf;
    }
    

    set nome(nome) {
        this._nome = nome;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }
    

}