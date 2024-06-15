// Função de pesquisa binária
function pesquisaBinaria(array, valor) {
    let inicio = 0;
    let fim = array.length - 1;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);

        if (array[meio] === valor) {
            return meio; 
        }

        if (array[meio] < valor) {
            inicio = meio + 1; 
        } else {
            fim = meio - 1;
        }
    }

    return -1; 
}


const numeros = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const valorParaEncontrar = 7;
const resultado = pesquisaBinaria(numeros, valorParaEncontrar);

if (resultado !== -1) {
    console.log(`Valor ${valorParaEncontrar} encontrado no índice ${resultado}.`);
} else {
    console.log(`Valor ${valorParaEncontrar} não encontrado na lista.`);
}
