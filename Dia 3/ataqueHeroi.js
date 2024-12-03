/* O código cria um sistema simples para gerar heróis aleatórios com diferentes tipos e comportamentos
    de ataque. Além disso, a classe heroi define como cada herói se comporta ao atacar. */



function numRadom(min,max) {
    const numSorte = Math.floor(Math.random() * (max - min)) + 1 + min;
    if (numSorte === 1){
        return "mago";
    } else if (numSorte === 2) {
        return "guerreiro";
    } else if (numSorte === 3) {
        return "monge";
    } else if (numSorte === 4) {
        return "ninja";
    }
}

class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar(){
        if (this.tipo === "mago") {
            return `${this.nome} atacou usando mágia`
        } else if (this.tipo === "guerreiro") {
            return `${this.nome} atacou usando espada`
        } else if (this.tipo === "monge") {
            return `${this.nome} atacou usando artes marciais`
        } else if (this.tipo === "ninja") {
            return `${this.nome} atacou usando shuriken`
        } else {
            return `Erro de parâmetros`
        }
    }
}

const heroiConst = new heroi("Gleidson", 24, numRadom(0,4))


console.log(heroiConst.atacar())