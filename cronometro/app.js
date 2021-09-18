//simplificamos el query selector y definimos uestras variables
const $ = e=> document.querySelector(e)

var cero = 0,
 ms = sec = min = sec2 = min2= hh = cero, interv, time2,  time 

//boton para iniciar
$('.btn_init2').addEventListener('click',e =>{
    newd ()
    intv()
})
//boton para dentener
$('.btn_stop2').onclick =  e =>{
    stop()
    ms = 0, sec = min = hh = ms
}

//funcion para iniciar el intervalo(el interv deve estar guardado en una variable para poder detenerlo)
function intv(){    interv = setInterval(cronometro, 10)}

//f para parar el intervalo
function stop(){   clearInterval(interv) }

//funcion para guardar la data tiene quer retornar el time
function newd (){ return time = new Date()}

//funcion para el cronometro
function cronometro(){
    time2 = new Date()-time
    ms  = time2%1000
    sec = time2/1000

    $('.hh').innerHTML = `hh:${hh}`
    $('.min').innerHTML = `min:${min}`
    $('.sec').innerHTML = `sec:${Math.trunc(sec)}`
    $('.ms').innerHTML = `ms:${ms}`
    
    if(sec >=59){min++, newd()}
    if(min >=59){hh++, min = 0}

}
