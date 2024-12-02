// Esse sistema conta quantas vogais há em uma string

let vogais = ["a","e","i","o","u"];
let contagem = {

    a:0,
    e:0,
    i:0,
    o:0,
    u:0,

}

function contarVogais(string) {

    for (i = 0; i < string.length; i++) {
        const letra = string[i].toLowerCase()
        if (vogais.includes(letra)) {
            contagem[letra]++;
        }
    }
    return contagem;
}

console.log(contarVogais("5"))