let mago = new Heroi("Laxus", "18", "Mago")
let guerreiro = new Heroi("Tanker", "28", "Guerreiro")
let monge = new Heroi("Aang", "12", "Monge")
let ninja = new Heroi("Naruto", "15", "Ninja")

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque

    if (this.tipo === "Mago") {
      ataque = "magia"
    }else if (this.tipo === "Guerreiro") {
      ataque = "espada"
    }else if (this.tipo === "Monge") {
      ataque = "artes marciais"
    }else if (this.tipo === "Ninja") {
      ataque = "shuriken"
    }
    console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }

  }