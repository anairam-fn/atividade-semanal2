## Resumo Semana 2:

- Primeiros comandos com o JavaScript no navegador -> usando prompts e alerts;

- Rodar o JavaScript fora do navegador -> com o NodeJs;

---

- Tipos de dados:
    * String -> é cadeia de caractéres em que se deve sempre começar com aspas
    simples (') ou duplas ("); 

        ```
        "Hello World"
        ```
    * Number -> tipo de dado que representa dados numéricos, que podem ser 
    inteiros ou decimais;
    
    * Boolean -> é um dado lógico e pode ter apenas dois valores: true ou false;
    * Null -> é um objeto vazio;
    
    * Undefined -> é um valor indefinido;
    
    * Object -> mapeamento entre chaves e valores;
       * Array -> são objetos iniciados com colchetes [  ] e suas entradas são
        separadas por vírgula. Boa para representação de listas e conjuntos;

            ```
            ["peanut butter", "jelly", "bread"]
            ```

        * Funções -> são objetos que dividem o código em partes reutilizáveis;

            ```
            function functionName() {
                console.log("Hello World");
            }
            ```

- Concatenação e Interpolação: para unir strings;
    * Concatenação -> pode-se construir strings a partir de outras. Para isso,
    utiliza-se o operador de concatenação +;

        ```
        console.log("Hello " + "World.") // Vai imprimir Hello World
        ```

    * Interpolação -> permite colocar os dados diretamente em uma string sem
    utilizar o operador de concatenação.

        ```
        const name = "Mariana";
        const lastName = "Nunes";
        console.log(`Hello ${name} ${lastName}`) // Vai imprimir Hello Mariana Nunes;
        ```

---

- Variáveis:
    * Permite que o computador armazene e manipule os dados de forma dinâmica;
    * Aponta-se um "rótulo" para se referir aos dados;
    * Qualquer dado pode ser armazenado;
    * Armazena-se um valor em uma variável com o operador =;
    * palavra reservada (let, const, var) identificador (nome da variável) = valor;
            
            ```
            const idade = 33;
            ```

    * Por ser case sensitive é importante utilizar nomes coerentes nas variáveis,
    não pode começar com número, não pode conter espaço e nem palavras reservadas;

---

* Operadores:

Aritméticos

| Operador | Descrição |
| --- | --- |
| `+` | Adição |
| `-` | Subtração |
| `*` | Multiplicação |
| `/` | Divisão |
| `%` | Módulo ou resto da divisão |
| `++` | Incremento|
| `--` | Decremento|
    
Atributivos

| Operador | Descrição |
| --- | --- |
| `=` | Atribuição |
| `+=` | Atribuição de soma |
| `-=` | Atribuição de subtração |
| `*=` | Atribuição de multiplicação |
| `/=` | Atribuição de divisão |
| `%=` | Atribuição de resto |

Comparativos:
    
| Operador | Descrição |
| --- | --- |
| `==` | Igual a |
| `===` | Igual a (tanto o valor quanto o tipo) |
| `!=` | Diferente de  |
| `>` | Maior que |
| `>=` | Maior ou igual a |
| `<` | Menor que |
| `<=` | Menor ou igual a |


###### OBSERVAÇÃO:
* O operador de igualdade == transforma o dado comparado;
* Já o operador de igualdade estrita === não transforma os dados;
    Então:

    ```
    "3" ==  3  // true
    "3" === 3  // false
    ```
Lógicos:
    
| Operador | Descrição |
| --- | --- |
| `&&` | E |
| ` || ` | Ou |
| `!` | Negação |