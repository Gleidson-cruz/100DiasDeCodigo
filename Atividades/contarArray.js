function contarArray(string) {
    
    let caracteres = string.split("")
    console.log(caracteres.length + " Caracteres");
    
    let palavras = string.split(" ")
    console.log(palavras.length + " Palavras");
    
    let maiorPalavra = palavras[0];
    let menorPalavra = palavras[0];
    
    for(let i = 1; i < palavras.length; i++) {
        
        if (palavras[i].length > maiorPalavra.length) {
            maiorPalavra = palavras[i]
            
            if (palavras[i].length === maiorPalavra.length) {
                maiorPalavra = maiorPalavra
            }
        }
        
        if (palavras[i].length < menorPalavra.length) {
            menorPalavra = palavras[i]
            
            if (palavras[i].length === menorPalavra.length) {
                menorPalavra = menorPalavra
            }
        }
    }
    
    console.log("Maior palavra: " + maiorPalavra);
    console.log("Menor palavra: " + menorPalavra);
    
}

contarArray("Minha vida é andar por esse pais, pra ver se um dia descanso feliz")