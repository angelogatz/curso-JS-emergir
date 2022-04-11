//DESAFIO CONTA BANCÁRIA
/*
1. CRIAR CONTA ABSTRATA ContaBancária
  - CLIENTE
  - NUMERO
  - SALDO
  - DEPOSITAR()
  - SACAR()
*/ 

class ContaBancaria{
    constructor(cliente, numero){
      if(this.constructor === ContaBancária){
        throw new Error("conta bancária é uma classe abstrata")
      }
      this.cliente = cliente
      this.numero = numero
      this.saldo = 0
    }


    depositar(valor){
      this.saldo += valor
    }
    sacar(){
      throw new Error("metodo sacar() precisa ser implementado")
    }
}



 

