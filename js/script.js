const relogio = document.getElementById("relogio").innerHTML;

var i = 0;

var cont = 0;

var y = 0;

var parar = false;

function waitforme(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
    })
}

function reset(){

    document.getElementById("relogio").innerHTML = 0+":"+0;

}

async function inicio(){

    cont++;
    
    while (i <=60){

        if ((cont>1) && (y>0)){
            break;
        }

    

        if ((i > 1) && (document.getElementById("relogio").innerHTML == 0+":"+0)){


            y = 0;
            i = 0;

            
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