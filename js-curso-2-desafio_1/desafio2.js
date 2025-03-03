function olaNome(){
    let nome=prompt('Digite seu nome');
    console.log(`Olá, ${nome}`);
}
olaNome();

function dobroNumero(){
    let numero=prompt('Digite um número');
    dobro=numero*2;
    alert(`O dobro de ${numero} é igual a ${dobro}`);
}
dobroNumero();

function mediaabc(a,b,c){
    return (a+b+c)/3;
}
let media=mediaabc(2,3,4);
console.log(media);

function numeroMaior(){
    let a=prompt('Digite um número');
    let b=prompt('Digite outro número');
    return a>b?a:b;
}
console.log(`O número maior é ${numeroMaior()}`)

function potencia(){
    let numero=prompt('Digite um número');
    return numero**2;
}
console.log (potencia());
