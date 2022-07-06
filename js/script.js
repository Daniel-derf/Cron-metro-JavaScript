const relogio = document.getElementById("relogio").innerHTML;

var i = 0;

var y = 0;


function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

async function inicio(){
    
    while (i <=60){

        document.getElementById("relogio").innerHTML = y+":"+i;

        await waitforme(1000);

        i++; 

        if (i == 60){

            i=0;
        
            y++;
        }


    }

    

   



}

function reset(){
    
    var i = 0;
    var y = 0;

    document.getElementById("relogio").innerHTML = y+":"+i;


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