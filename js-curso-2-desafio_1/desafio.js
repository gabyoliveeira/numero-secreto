let titulo=document.querySelector('h1');
titulo.innerHTML='Hora do desafio';
function botaoConsole(){
    console.log('O botão foi clicado');
}
function botaoAlerta(){
    alert('Eu amo JS');
}
function botaoPrompt(){
    let cidade=prompt('Digite o nome de uma cidade brasileira');
    alert(`Estive em ${cidade} e lembrei de você!`);
}
function botaoSoma(){
    let numero1=parseInt(prompt('Digite um número inteiro'));
    let numero2=parseInt(prompt('Digite outro número inteiro'));
    soma=numero1+numero2
    alert(`A soma de ${numero1}+${numero2} é igual a ${soma}`);
}