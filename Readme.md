# Estrutura de Dados em JS:

Esse portifólio foi baseado no Livro: [Entendendo algoritimos](https://www.amazon.com.br/Entendendo-Algoritmos-Ilustrado-Programadores-Curiosos/dp/8575225634)

## CAP 1:

### Pesquisa Binária: 

Se precisarmos encontrar uma pessoa chamada Lucas De Laviano, podemos adotar diferentes estratégias de busca. Uma abordagem seria começar do início da lista e seguir até encontrar o nome desejado. Alternativamente, poderíamos abrir a lista telefônica na metade, sabendo que a letra L está aproximadamente no meio.

Essa última estratégia se baseia na pesquisa binária, um algoritmo de busca eficiente que divide a lista ordenada repetidamente ao meio para localizar a posição do item desejado. Cada iteração elimina metade dos possíveis locais, acelerando significativamente o processo de busca.

### Notação Big O:

Normalmente, utilizamos algoritmos desenvolvidos por outras pessoas e, nesse caso, precisamos saber o tempo de execução deles, se são rápidos ou não, e se ocupam muito espaço. Nesse contexto, entra a notação Big O: ela não determina o tempo em segundos ou minutos, mas sim a quantidade de operações que aquele algoritmo realizará conforme a lista de elementos aumente.

Por exemplo, a pesquisa binária é O(log n), indicando um tempo de execução logarítmico. Já a pesquisa linear é O(n), indicando um tempo de execução linear.


