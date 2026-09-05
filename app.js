import { ContaCorrente } from "./conta-corrente.js";

let conta1 = new ContaCorrente(1, "Luis", 1000);

console.log(`Conta de ${conta1.nomeCliente}\nSaldo: ${conta1.saldo}`);
conta1.depositar(100);
console.log(conta1.saldo);
conta1.sacar(500);
console.log(conta1.saldo);
conta1.pagar(100);
console.log(conta1.saldo);
conta1.pagar(2000);
console.log(conta1.saldo);







let conta2 = new ContaCorrente(2, "Ana",500);
console.log(`Conta de ${conta2.nomeCliente}\nSaldo: ${conta2.saldo}`);
//pagar com um parametro
conta2.sacar(600);
console.log(conta2.saldo);
// pagar com dois parametros
conta2.pagar(100, "internet");
console.log(conta1.saldo);
conta2.pagar(300);
console.log(conta1.saldo);
