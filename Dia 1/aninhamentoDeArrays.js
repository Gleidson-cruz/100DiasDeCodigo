/*O código define uma função chamada canNest,
    que verifica se um array (ou lista) pode ser aninhado dentro de outro array.
    Em outras palavras, a função determina se todos os elementos de arr1
    são menores que todos os elementos de arr2 e, ao mesmo tempo,
    se todos os elementos de arr2 são maiores que todos os elementos de arr1.*/


function canNest(arr1, arr2) {
    let maior1 = arr1[0];
    let menor1 = arr1[0];
    let maior2 = arr2[0];
    let menor2 = arr2[0];
        
    for (i=1; i < arr1.length; i++) {
        if(arr1[i] > maior1) {
            maior1 = arr1[i];
        }
    }
    for (i=1; i < arr1.length; i++) {
        if(arr1[i] > maior2) {
            maior2 = arr2[i];
        }
    }
        
    for (i=1; i < arr2.length; i++) {
        if(arr2[i] < menor1) {
            menor1 = arr1[i];
        }
    }
        
    for (i=1; i < arr2.length; i++) {
        if(arr2[i] < menor2) {
            menor2 = arr2[i];
        }
    }
        
    if(menor1 > menor2 && maior1 < maior2) {
        return true;
    } else {
        return false;
    }
}
    
console.log(canNest([9, 9, 8], [8, 9, 10]))
    
