# Estrutura de Dados em JS:

Esse portifólio foi baseado no Livro: [Entendendo algoritimos](https://www.amazon.com.br/Entendendo-Algoritmos-Ilustrado-Programadores-Curiosos/dp/8575225634)

## CAP 1:

### Pesquisa Binária: 

Se precisarmos encontrar uma pessoa chamada Lucas De Laviano, podemos adotar diferentes estratégias de busca. Uma abordagem seria começar do início da lista e seguir até encontrar o nome desejado. Alternativamente, poderíamos abrir a lista telefônica na metade, sabendo que a letra L está aproximadamente no meio.

Essa última estratégia se baseia na pesquisa binária, um algoritmo de busca eficiente que divide a lista ordenada repetidamente ao meio para localizar a posição do item desejado. Cada iteração elimina metade dos possíveis locais, acelerando significativamente o processo de busca.

### Notação Big O:

Normalmente, utilizamos algoritmos desenvolvidos por outras pessoas e, nesse caso, precisamos saber o tempo de execução deles, se são rápidos ou não, e se ocupam muito espaço. Nesse contexto, entra a notação Big O: ela não determina o tempo em segundos ou minutos, mas sim a quantidade de operações que aquele algoritmo realizará conforme a lista de elementos aumente.

Por exemplo, a pesquisa binária é O(log n), indicando um tempo de execução logarítmico. Já a pesquisa linear é O(n), indicando um tempo de execução linear.

### Ordenação Por Seleção:

#### Listas Encadeadas x Arrays:
Arrays exigem que seus itens sejam armazenados sequencialmente na memória, ou seja, é necessário pré-definir a quantidade exata de espaços (endereços). A desvantagem é que, para inserir um novo item, é necessário realocar todos os itens presentes para uma área maior. A vantagem é que você pode acessar os elementos aleatoriamente, já que conhece o endereço de cada um.

Listas, por outro lado, não exigem que seus itens estejam armazenados sequencialmente, pois cada item contém o endereço do próximo. Assim, cada elemento aponta para o próximo, como em uma caça ao tesouro. A desvantagem é que, para acessar o último elemento, por exemplo, é necessário percorrer toda a lista, um por um (ao contrário dos arrays). A vantagem é que adicionar um item à lista é mais fácil, pois não há preocupação com a alocação contínua de espaço de memória.

Em conclusão, cada estrutura tem seus pontos fortes e fracos, e a escolha depende muito das funcionalidades necessárias. Muitos algoritmos utilizam arrays e listas como fundamentos, o que ressalta sua importância.



