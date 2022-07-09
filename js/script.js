const relogio = document.getElementById("relogio").innerHTML;

var i = 0;

var y = 0;

var cliques = 0;


//start
var iniciar = document.getElementById("start");
iniciar.addEventListener("click", inicio);
iniciar.addEventListener("click", function(){
    cliques = cliques + 1;
});

//reset
var resetar = document.getElementById("reset");
resetar.addEventListener("click", reset);
resetar.addEventListener("click", function(){
    if (cliques > 0){
        cliques = cliques - 1;}
});

//pause
var pausa = document.getElementById("pause");
pausa.addEventListener("click", pause);
pausa.addEventListener("click", function(){
    if (cliques > 0){
        cliques = cliques - 1;}
});


function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

function reset(){

    document.getElementById("relogio").innerHTML = 0+":"+0;

}

function pause(){

    document.getElementById("pause").innerHTML = "PAUSED";

}

async function inicio(){

    
    while (i <=60){

        console.log(cliques);

        if (cliques == 1){
            console.log('If ativado');
            iniciar.disabled = true;
        }

        if (cliques != 1) {
            iniciar.disabled = false;
        }


        if ((i > 1) && (document.getElementById("relogio").innerHTML == 0+":"+0)){
            y = 0;
            i = 0;    
            break;
        }

        if ((i > 1) && (document.getElementById("pause").innerHTML == "PAUSED")){
    
            break;
        }

        document.getElementById("relogio").innerHTML = y+":"+i;

        await waitforme(1000);

        i++; 

        if (i == 60){

            i=0;
        
            y++;
        }

    }

    

   



}



/*
function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}
 
async function printy() {
    for (let i = 0; i < 10; ++i) {
        await waitforme(1000);
        console.log(i);
    }
    console.log("Loop execution finished!)");
}
*/ 