import { ContaPoupanca } from "./conta.js";

const conta1 = new ContaPoupanca(1,"Zé", 100.00);
conta1.pagar(50);
conta1.pagar(40, "netflix");