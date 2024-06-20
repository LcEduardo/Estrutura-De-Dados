
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

function ordenacaoPorSelecao(arr){
    let newArray = [];
    let copiaArray = arr.slice();
    let tamanho = arr.length;

    for(let i = 0; i < tamanho; i++){
        let menor = buscaMenor(copiaArray);
        newArray.push(copiaArray.splice(menor, 1)[0]);
    }

    return newArray;
} 

const arrayDesordenado = [10, 3, 4, 1, 7, 9];
const arrayOrdenado = ordenacaoPorSelecao(arrayDesordenado);

const menorElemento = buscaMenor(arrayDesordenado);


console.log(`Array desordenado: ${arrayDesordenado}`);
console.log(`Array ordenado: ${arrayOrdenado}`);




