/* O código que você forneceu define uma função chamada matchHouses,
    que calcula o número de palitos necessários para construir uma certa quantidade de casas,
    com base no número de etapas (ou "steps") fornecido como argumento. */

    function matchHouses(step) {
        let palitos = (step * 5) + 1;
    
        if (step === 0) {
            palitos = (step * 5);
        }
        return palitos;
    }
    
    console.log(matchHouses(0))