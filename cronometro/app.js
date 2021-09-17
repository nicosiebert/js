//simplificamos el query selector y definimos uestras variables
const $ = e=> document.querySelector(e)

var ms = 0, sec = 0, min = 0, inter
// funcion para iniciar un cronometro
var cro = e=>{  

    
    if (ms == 99){sec++, ms = 0}
    if(sec == 59){min++, sec = 0}

    $('.ms').innerHTML = ms++
    $('.sec').innerHTML = sec
    $('.min').innerHTML = min
}

// boton para iniciar("puede ser cualquier evento")
$('.btn_init').onclick =  e =>{

    inter = setInterval(cro, 10)
}
//boton para dentener
$('.btn_stop').onclick =  e =>{
    clearInterval(inter)
    ms = 0, sec = 0, min = 0 
}
// detener el cronometro en 60 minutos
if(min == 60){
    clearInterval(inter)
}
