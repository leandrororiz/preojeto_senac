//SENAC - TAGUATINGA
//PROGRAMAÇÃO WEB COM JS
//CONHECENDO VARIAVEIS EM JS

let minhaidade = 28 //number
let meunome = "Leandro" // string
let souEstudante = true // boolean
let valorNulo = null // null
let valorIndefinido = // não vamos atribuir nenhum valor por enquanto
let minhaDataDeNascimento = new Date (1995,7,25);// objetivo


//ESTRUTURA DE CONTROLE
let idade2 =18;
if (idade >=18){
    console.log("você pode votar");
}else if (idadee ==17){
    console.log("Você pode votar no proximo ano")
}
let idade = 15;
if (idade > 18){
    console.log("Pode votar!")
} else if(idade == 17){
    console.log("Você pode votar no proximo ano")
} else {
    console.log("Você ainda nao pode votar")
}
let dia = 2;
switch(dia){
    case 1:
        console.log("segunda - feira");
        break;
        case 2:
            console.log("terça - feira");
            break;
            default:
            console.log("ola invalido");
}
// ESTRUTURA DE CONTROLE: Loop

for( let d = 0;d <5; d ++){
    console.log(d);
}

let j = 1;
while(j<5){
    console.log(j);
    j++;
}
let j =0;
do{
    console.log(i);
    i++;
}while(i<5);

// CONVERSÃO DE TIPOS DE DADOS

let num = 10;
let str = "20"
console.log(num + str); // Resultara em 1020 
str = Number(str);
console.log(num + str); // Resultara na (soma)
 
// Operadores Arentimeticos

let a = 15;
let b = "5";
let c;
c=a+b;

console.log(c);// Resultara em 20

c=a-b;
console.log(c);// Resultara em 10

c=a*bç
console.log(c);// Resultara em 75

c=a/b;
console.log(c);// Resultara em 3

//FUNÇAO EM JS

function nomeDafuncao(nome){
    console.log("ola," + nome + 1 "!");    
}

let cor = "vermelho"; // Variavel Global
function mostrarcor(){
    console.log(cor)
}
 function mostrarcarro(){
    let carro = 'ferrari'; // Variavel Local
    console.log(carro)
 }
 mostrarcarro()//imprime 'ferrari'
 console.log(carro); //Erro carro is not define

 const numero = [1,2,3,4,5];
 const quadrados = numeros.map(function(n)){
    return n*n;
 ));
 console.log(quadrados); // imprime[1,2,3,4,5]

 function comprimentar(calback){
    console.log(`ola`);
    
 }
 }
   

