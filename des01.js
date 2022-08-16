// Declarar uma variável chamada `myvar`, sem valor.
var myvar;//certo

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;// errado, o correto seria "var myvar=10"

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = (15+8);//certo

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma = soma++; //meio certo

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma=soma * 3;//certo

// Qual é o valor da variável `soma` até aqui?
console.log(soma); //errado

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;//certo

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ['Arroz', 'feijão', 'ovo'];//certo

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1]);//meio certo

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
soma===myvar;//certo

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
myvar < soma;//errado, o correto seria "myvar <=soma"

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
//nem tentei porem, segue correção;
function divisao(){
    7/9;
    return 7/9;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
divisao(10,2)
