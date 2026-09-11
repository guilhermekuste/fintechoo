export class ContaCorrente{
    //caracteristica da conta - chamamos de atributos
    numero
    nomeCliente
    saldo

    constructor(pNum, pNome, pSaldo = 0){
        this.numero = pNum;
        this.nomeCliente = pNome;
        this.saldo = pSaldo; 
    }

    // Ações - Métodos

depositar(pValor){
    this.saldo += pValor;
}

sacar(pValor){
    if(pValor<=this.saldo){
        this.saldo -= pValor;
        console.log("Pagamento realizado");


    }else{
        console.log("Recusa no pagamento");
    }
}


pagar(...args){
    // apenas um paramentro, do tipo inteiro
if(args.length ==1 && typeof args[0] == "number"){
    if(args[0]<=this.saldo){ 
        this.saldo-= args[0];
        console.log(`Pagando R$ ${args[0].toFixed(2)}`);

}


}else if (args.length == 2 && typeof args[0] == "number" && typeof args[1] == "string"){
if(args[0] <=this.saldo){
    this.saldo-= args[0];
    console.log(`pagando R$ ${args[0].toFixed(2)} referente a ${args[1]}`)
}
} else{
    console.log("Saldo invalido");
}


}

}
