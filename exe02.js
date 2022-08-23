// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function funcaozinha(a, b){
    return a+b;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var acao = funcaozinha(2,5)+5;
console.log((acao))
// Qual o valor atualizado dessa variável?
//12

// Declare uma nova variável, sem valor.

var semValor= '';
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/function nValor(){
    semValor=10;
    return 'O valor da variavel agora é'+semValor;
}
console.log(nValor());

// Invoque a função criada acima.
console.log(nValor());

// Qual o retorno da função? (Use comentários de bloco).

//O valor da variavel agora é 10.
/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function corretamente (x,y,z){
    if (x === undefined, y===undefined, z===undefined){
        return 'Preencha corretamente todos os valores'
    }
    else {
        return (x*y*z)+2
    }
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(corretamente(2,2))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//preencha todos os valores corretamente
//Preencha todos os valores corretamente
// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(corretamente(2,10,2))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//42

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function recebe(t,r,p){
    if (r===undefined && p===undefined){
        return t;
    } else if (r!==undefined && p===undefined ){
        return t+r;
        }else if (t!==undefined && r!==undefined && p!==undefined){
            return (t+r)/p;
        }
            else if (t===undefined && r===undefined && p===undefined){
        return "false";
    }else {return "null"}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(recebe(2))//2
console.log(recebe(2,2))//4
console.log(recebe(2,2,4))//1
console.log(recebe())//undefined