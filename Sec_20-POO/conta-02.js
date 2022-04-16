//DESAFIO CONTA BANCÁRIA

class Transferir{

   static execute(contaOrigem, contaDestino, valor){
       if(!contaOrigem instanceof ContaBancaria || !contaDestino instanceof ContaBancaria){
           throw new Error("contas precisam herdar de 'contaBancaria'")
       }
       try{
           contaOrigem.sacar(valor)
           contaDestino.depositar(valor)

       } catch(e) {
           console.log("deu ruim", e.message)
       }
   }
}


/*3. criar classe Cliente e compor as classes concretas

  - nome

  - documento
*/

class Cliente{
    constructor(nome, documento, tipoDoc){
        if(this.constructor === Cliente){
            throw new Error("Cliente é uma classe abstrata")
        }
        this.nome = nome
        this.documento = documento
        this.tipoDoc = tipoDoc
    }
}

/*4. Agora surgiu a necessidade de Cliente ser Pessoa Física ou Juridica.

   Pessoa Física tem documento CPF e Juridica tem d
*/

class PessoaFisica extends Cliente{
    constructor(nome, documento){
        super(nome, documento, "CPF")
    }
}

class PessoaJusridica extends Cliente{
    constructor(nome, documento){
        super(nome, documento, "CNPJ")
    }
}

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
      if(this.constructor === ContaBancaria){
        throw new Error("conta bancaria é uma classe abstrata")
      }
      this.cliente = cliente
      this.numero = numero
      this.saldo = 0
    }


    depositar(valor){
      this.saldo += valor
      console.log(`${this.cliente.nome} Depositou ${parseFloat(valor)} reais de sua conta, n°:${this.numero}`)
    }
    sacar(){
      throw new Error("metodo sacar() precisa ser implementado")
    }
}
/*
2. Criar duas classes que herdam de ContaBancaria

- ContaCorrente

    - limite

    - sacar(valor)

  - ContaPoupanca

    - aniversario

    - sacar(valor)
*/ 

class ContaCorrente extends ContaBancaria{
    constructor(cliente, numero){
        super(cliente, numero)
        this.limite = 0
    }

    sacar(saque){
        let disponivel = this.saldo + this.limite
        if(saque > disponivel){
            throw new Error("Valor indisponivel")
        } else {
            this.saldo -= saque
            console.log(`${this.cliente.nome} sacou ${parseFloat(saque)} reais de sua conta, n°:${this.numero}`)
        }
    }
}


class ContaPoupanca extends ContaBancaria{
    constructor(cliente, numero){
        super(cliente, numero)
        this.aniversario = new Date()
        this.aniversario.toLocaleDateString()
    }
    sacar(saque){
        if(saque > this.saldo){
            throw new Error("Saldo indisponivel")
        } else {
            this.saldo -= saque
        console.log(`${this.cliente.nome} sacou ${parseFloat(saque)} reais de sua conta, n°:${this.numero}`)
        }
    }
}



//Cadastro cliente
const angelo = new PessoaFisica("Angelo", "365.214.747-25")
const maria = new PessoaJusridica("maria", "21.985.665/0001-72")
const joao = new PessoaJusridica("joao", "11.365.365/0001-12")
const marcelo = new PessoaFisica("marcelo", "365.214.747-25")

//criação das contas poupança
const cp1 = new ContaPoupanca(angelo, "cp1")
const cp2 = new ContaPoupanca(maria, "cp2")
const cp3 = new ContaPoupanca(joao, "cp3")
const cp4 = new ContaPoupanca(marcelo, "cp4")

//criação das contas corrente
const cc1 = new ContaCorrente(angelo, "cc1")
const cc2 = new ContaCorrente(maria, "cc2")
const cc3 = new ContaCorrente(joao, "cc3")
const cc4 = new ContaCorrente(marcelo, "cc4")

console.log(cc4)
cc4.depositar(2733)
console.log(cc4)

console.log(cp4)
cp4.depositar(1733)
console.log(cp4)

Transferir.execute(cp4, cc4, 1000)
console.log(cc4)
console.log(cp4)

