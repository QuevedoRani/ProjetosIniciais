//funçoes de pop-up
/*
alert("Olá mundo!");
prompt("quantos anos você tem?");
confirm("Está gostando da aula?");
*/

//var x = 10; //Numérico
//var y = "10"; //String

//console.log(x + x);
//console.log(y + y);

var escolha = prompt(
    "digite:\n1 - Pedra.\n2 - Papel.\n3 - Tesoura."
    );

    console.log(escolha);

    if(escolha != 1 && escolha != 2 && escolha != 3){
        alert("entrada invalida!");
    }

    var escolhaCpu = Math.floor(Math.random() * 3 + 1);
    console.log(escolhaCpu);
    /*
    1-pedra
    2-papel
    3-tesoura
    1 ganha de 3
    2 ganha de 1
    3 ganha de 2
    */
   if(escolha == 1 && escolhaCpu == 3){
    alert("Ganhou!");
   } else if(escolha == 2 && escolhaCpu == 1)
    {
        alert("Ganhou!");
    } else if(escolha == 3 && escolhaCpu == 2){
        alert("Ganhou!");
    } else if(escolha == escolhaCpu){
        alert("Empatou!")
    } 
    else {
        alert("PERDEUUU...HAHAHAHAH!")
    }