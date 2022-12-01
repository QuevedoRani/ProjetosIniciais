var idCalc = document.getElementById("id-calc");  
var idName;
var idWeight;
var idHeight;
var imc;

idCalc.addEventListener("click", function(){
     idName = document.getElementById("id-name").value;  
     idHeight = Number(document.getElementById("id-height").value);  
     idWeight = Number(document.getElementById("id-weight").value);  

    imc = idWeight / Math.pow(idHeight, 2);
    console.log(idName)
    console.log(imc);
    result(imc);
});

function result(imcValue) {
        if (imcValue < 18.5){
             console.log("Abaixo do peso.");
        } else if (imcValue >= 18.5 && imcValue < 25){
             console.log("Peso normal.");
        } else if (imcValue >= 25 && imcValue < 30){
            console.log("acima do peso.");
        } else if (imcValue >= 30 && imcValue < 35){ 
            console.log("Obesidade.");
        } else if (imcValue >= 35){
             console.log("Obesidade excessiva.");
        }

        var minIdeal = Math.pow(idHeight, 2) * 18.5;
        var maxIdeal = Math.pow(idHeight, 2) * 24.9;
        
        console.log("Faixa de peso ideal para altura informada: ");
        console.log("Entre " + minIdeal.toFixed(3) + "Kg e " + maxIdeal.toFixed(3) +"Kg");
    
}