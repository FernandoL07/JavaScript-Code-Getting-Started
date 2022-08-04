var numeroAleatorio = Math.floor(Math.random() *100) + 1;
//Math.floor(x)=>retorna um numero inteiro menor dentro de (x)
//Math.random()=>Retorna um umero pseudo-aleatorio [0, 1[ Onde 0 é incluido e 1 nao é incluido.
var palpites = document.querySelector('.palpites');
var ultimoResultado=document.querySelector('.ultimoResultado');
var baixoOuAlto=document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpites = 1;
var botaoReinicio;
campoPalpite.focus();
//Nesse caso, servira para assim que a pagina for carregada. Voce ja ter como digitar no input. Sem precisar clicar caixa de texto.
//O elemento 'focus()' é o elemento que recebera eventos de teclado e similares por padrao.(Pode ter 'value' de 'options')
//=>'options' fornece funções para controlar os aspectos de processo de focagem. Podem conter as seguintes propriedades dentro de 'options'.
//*preventScroll*  Nesse caso, o navegador ira rolar o documento para exibir o elemento recem-focado. Um valor 'false' for 'preventScroll' (padrao) significa que o navegador rolara o elemento para vizualizar depois de focaliza-lo. Caso estiver definido como 'true', nao ocorrera a rolagem.
function conferirPalpite(){
    var palpiteUsuario = Number (campoPalpite.value);//converter a string inserida em number
        if (contagemPalpites === 1){//a var contagemPalpites passara a ter valor 1.
        palpites.textContent = 'Palpites anteriores: ';
 }
        palpites.textContent += palpiteUsuario + ' ';//ele ira colocar o texto padrao de palpites + o palpite que o usuario colocar.
    if (palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = 'Parabens! Voce acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    }else if (contagemPalpites ===10){
        ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    }else {
        ultimoResultado.textContent ='Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        if (palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent ='Seu palpite foi muito baixo burrao!';
        }else if(palpiteUsuario > numeroAleatorio) {
            baixoOuAlto.textContent ='Seu palpite foi muito alto burrao!';
        }
    }
    contagemPalpites++;
    campoPalpite.value = '';
    campoPalpite.focus();
}
envioPalpite.addEventListener ('click', conferirPalpite)//No caso, ele diz que quer que um evento aconteca. que é a execução é o evento click e a execução  do codigo quando o evento ocorrer.

function configFimDeJogo() {
    campoPalpite.disabled = true; //desabilita a a var campoPalpite
    envioPalpite.disabled = true; //desabilita a função de enviar o palpite
    botaoReinicio = document.createElement ('button'); //cria uma funcionalidade para a var botaoReinicio de criar um button a partir daqui.
    botaoReinicio.textContent = 'Iniciar novo Jogo'; //textContent =>define a remoção e substituição por um novo texto
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}
function reiniciarJogo() {
    contagemPalpites = 1;

    var reiniciarParas = document.querySelectorAll ('.resultadoParas p')
    for (var i = 0; i < reiniciarParas.length ; i++){
        // Nesse caso, temos um loop for. Seu conceito é permitir a execução de um pedaço do codigo repetidamente, ate que determinada condição seja satisafeita.
        //No caso, de "i < reiniciarParas.leigth" esse conceito consiste em que o loop nao parara de rodar enquanto i for menor que reiniciarParas.leigth.
        //No caso do 'i ++'. Ele serve para adicionar o numero 1 ao 'i'. O loop ira rodar uma vez cada valor de 'i' ate que 'i' seja alcançado o numero ou variavel em que ele é comparavel.
        //No nosso caso, ese codigo cria uma variavel contendo uma lista de todos os 'p' da div especificada e entao, faz um loop em cada um. Removendo o conteudo de textos dos mesmos.
    reiniciarParas[i].textContent = '';
    }
    botaoReinicio.parentNode.removeChild(botaoReinicio);
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();
    
    ultimoResultado.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random() *100) +1;
}