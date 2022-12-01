var timer = document.querySelector("#timer");
var sec = 0;
var min = 0;
var clock;
var dateNow = new Date();
var secNow = dateNow.getSeconds();
var minNow = dateNow.getMinutes();

//O que acontecera quando o js carregar
window.onload = startTimer();

//setInteval define um timer infinito para executar qualquer
//função que estiver dentro
function startTimer() {
    clock = setInterval(() => {
        timer.innerHTML = minNow + ":" + secNow; 
        secNow++;  
        if(secNow == 60) {
            minNow++;
            secNow = 0;
        } 
    },1000); //1000 milissegundos = 1 segundo    
}

//Evento para pausar o timer
timer.addEventListener("mouseover", function(){
    //Define um atraso para executar apenas uma vez
    //a função que estiver dentro
    setTimeout(() => {
        clearInterval(clock);//Cancela o loop
    });
});

//Evento para retomar o timer
timer.addEventListener("mouseleave", function(){
    startTimer();
});

