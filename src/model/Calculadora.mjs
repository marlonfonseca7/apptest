export class Calculadora 

{
    constructor (number1, number2)

    {
        this._number1 = number1;
        this._number2 = number2;
    }

    get number1() 
    {
        return this._number1;
    }

    get number2()
    {
        return this._number2;
    }

    set number1(number1)
    {
        this._number1 = number1;
    }

    set number2(number2)

    {
        this._number2 = number2;
    }

    soma (n1,n2)

    {
        return n1 + n2;    
    }

    subtracao (n1,n2)

    {
        return n1-n2;
    }

    multiplicacao (n1,n2)

    {
        return n1*n2;
    }

    divisao (n1,n2)

    {
        return n1/n2;
    }


}