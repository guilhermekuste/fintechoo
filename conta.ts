export class ContaPoupanca{
    numero: number
    nome: string
    saldo:number

    constructor(pNum:number, pNome:string, pSaldo:number =0){
        this.numero = pNum;
        this.nome = pNome;
        this.saldo = pSaldo;
    }

    pagar(pValor:number, pDesc?:string){
        if(pDesc == undefined){
            this.saldo -= pValor; 
        }else{
            this.saldo -= pValor;
            console.log(`Pagando ${pValor} referente a ${pDesc}`);
        }
    }

}// Fim da Classe
