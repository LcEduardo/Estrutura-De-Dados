let list = [10, 3, 4, 1, 7, 9];

function buscaMenor(arr) {
    let menor = arr[0];
    let menor_indice = 0;

    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] < menor) {
            menor = arr[i];
            menor_indice = i;
        }
    }

    return menor_indice;
}


let indice = buscaMenor(list);
console.log(`Índice do menor valor: ${indice}`);


