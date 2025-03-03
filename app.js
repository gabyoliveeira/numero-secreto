let listadeNumerosSorteados=[];
let numeroLimite=50;
let numeroSecreto=gerarNumerAleatorio();
let tentativas=1;

function exibirTextonaTela(tag, texto){
    let campo=document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMenagemInicial(){
    exibirTextonaTela('h1', 'Jogo do número secreto');
    exibirTextonaTela('p', 'Escolha um número entre 1 e 50');
}
exibirMenagemInicial();

function verificarChute(){
    let chute=document.querySelector('input').value;
    if (chute==numeroSecreto){
        let palavraTentativa=tentativas>1?'tentativas':'tentativa';
        let mensagemTentativas=`Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextonaTela('h1', 'Parabéns!');
        exibirTextonaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute>numeroSecreto){
            exibirTextonaTela('p','Número secreto é menor.');
        }else{
            exibirTextonaTela('p', 'Número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumerAleatorio() {
    let numeroEscolhido=parseInt(Math.random()*numeroLimite+1);
    let quantidadeDeElementosNalista = listadeNumerosSorteados.length;
    if (listadeNumerosSorteados.length==numeroLimite){
        listadeNumerosSorteados=[];
    }
    if (listadeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumerAleatorio();
    } else{
        listadeNumerosSorteados.push(numeroEscolhido);
        console.log(listadeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value='';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumerAleatorio(); // Chama a função para gerar um novo número
    limparCampo();
    tentativas = 1;
    exibirMenagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); // true pq preciso que ele esteja desabilitado
}