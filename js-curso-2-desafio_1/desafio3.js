let valoremDolar=parseInt(prompt('Digite o valor em dolares'));
let dolar=4.80;

function converterDolar(valoremDolar){
    let valoremReais=valoremDolar*dolar;
    return valoremReais.toFixed();
}
console.log(converterDolar(valoremDolar));


let altura=parseInt(prompt('Digite o valor da altura'));
let largura=parseInt(prompt('Digite o valor da largura'));

function calcularPerimetro(altura, largura){
    let perimetro=(altura*2)+(largura*2);
    return perimetro;
}
console.log(calcularPerimetro(altura, largura));


let raio=parseInt(prompt('Digite o valor do raio'));
calcularAreaePerimetro(raio);

function calcularAreaePerimetro(raio){
    let area=3.14*raio*raio;
    let perimetro=2*3.14*raio;
    console.log(`O valor da área éigual a ${area}`);
    console.log(`Ò valor do perímetro é igual a ${perimetro}`);
}


let numeroTabuada=parseInt(prompt('Digite um número'));

function calcularTabuada(numeroTabuada){
    for(i=1; i<=10; i++){
        let tabuada=numeroTabuada*i;
        console.log(`${numeroTabuada} x ${i} = ${tabuada}`);
    }        
}
calcularTabuada(numeroTabuada);