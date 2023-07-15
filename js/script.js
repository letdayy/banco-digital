class Conta {
  constructor(numero, saldo) {
    this.numero = numero;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    alert(`Depósito de ${valor} realizado na conta ${this.numero}`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      alert(`Saque de ${valor} realizado na conta ${this.numero}`);
    } else {
      alert(`Saldo insuficiente na conta ${this.numero}`);
    }
  }
}

class ContaCorrente extends Conta {
  constructor(numero, saldo, limiteChequeEspecial) {
    super(numero, saldo);
    this.limiteChequeEspecial = limiteChequeEspecial;
  }

  sacar(valor) {
    if (valor <= this.saldo + this.limiteChequeEspecial) {
      this.saldo -= valor;
      alert(`Saque de ${valor} realizado na conta corrente ${this.numero}`);
    } else {
      alert(`Saldo insuficiente na conta corrente ${this.numero}`);
    }
  }
}

class ContaPoupanca extends Conta {
  calcularJuros(taxa) {
    const juros = this.saldo * taxa;
    this.saldo += juros;
    alert(`Juros de ${juros} aplicados na conta poupança ${this.numero}`);
  }
}

// Criando uma instância de ContaCorrente e atualizando os elementos HTML correspondentes
const contaCorrente = new ContaCorrente('1234', 1000, 500);
document.getElementById('cc-numero').textContent = contaCorrente.numero;
document.getElementById('cc-saldo').textContent = contaCorrente.saldo;
document.getElementById('cc-limite').textContent = contaCorrente.limiteChequeEspecial;

// Criando uma instância de ContaPoupanca e atualizando os elementos HTML correspondentes
const contaPoupanca = new ContaPoupanca('5678', 2000);
document.getElementById('cp-numero').textContent = contaPoupanca.numero;
document.getElementById('cp-saldo').textContent = contaPoupanca.saldo;

// Função para realizar depósito na conta corrente
function realizarDepositoCorrente() {
  const valor = parseFloat(document.getElementById('cc-deposito').value);
  if (!isNaN(valor)) {
    contaCorrente.depositar(valor);
    document.getElementById('cc-saldo').textContent = contaCorrente.saldo;
    document.getElementById('cc-deposito').value = '';
  }
}

// Função para realizar saque na conta corrente
function realizarSaqueCorrente() {
  const valor = parseFloat(document.getElementById('cc-saque').value);
  if (!isNaN(valor)) {
    contaCorrente.sacar(valor);
    document.getElementById('cc-saldo').textContent = contaCorrente.saldo;
    document.getElementById('cc-saque').value = '';
  }
}

// Função para realizar depósito na conta poupança
function realizarDepositoPoupanca() {
  const valor = parseFloat(document.getElementById('cp-deposito').value);
  if (!isNaN(valor)) {
    contaPoupanca.depositar(valor);
    document.getElementById('cp-saldo').textContent = contaPoupanca.saldo;
    document.getElementById('cp-deposito').value = '';
  }
}

function loading() {
  alert("Função indisponível no momento");
}