// guardamos nuestras constantes para traer facilmente nuestros elementos
const $ = e =>{
    return document.querySelector(e)
}
const gid = e=>{
    return document.getElementById(e)
}
//traemos el loader  y el contenedor donde volcaremos la respuesta de nuestra peticion
const respuesta = gid('res')
const loader = $('.loader')

//funcion para que cuando se haga click en el boton
$('.btn').onclick = function(e){
    
    e.preventDefault()// no se recargue
    loader.classList.toggle('visible') //nuestro loader se vuelva visible

    //ahora llamamos a nuestra libreria axios para hacer una peicion post en axios(recomiendo leer la documentacion)
    // se puede hacer con fetch pero con axios es mas facil

    //aca vamos a pedir lo que contiene un archivo un archivo txt 
    // despues usamos .then paraejecutar la siguiente funcion flecha para obtener los datos
    // la variable 3 nos va a devolver lo que se obtuvo en la peticion

    axios("axios.txt").then(e=>{
        //esperamos 2000 milisegundos(no es necesario, es porque el archo txt se obtiene rapido)
        setTimeout( e=>{alert("peticion enviada"), 2000})

        console.log(e)
        //guardamos el estatus escribiendo en la consola se va a imprimir tdos los metodos
        var st = e.status
        //y si el status es 200 el loader se vuelve invisile nuevamente(recomiendo leer sobre los status)
        if (st == 200){
            loader.classList.toggle('visible')
            respuesta.innerHTML = "<div class='blue'>" + e.data + "</div>"
        }
    })

}
//lo mismo de arriapero con fetch
$('.btn1').onclick = function(e){
    loader.classList.toggle('visible')
    e.preventDefault()// no se recargue

    fetch('axios.txt')
    .then( e => e.text()
    )
    .then( data => {
        console.log(data)
        setTimeout(alert("peticion enviada"), 2000)
        loader.classList.toggle('visible')
        respuesta.innerHTML = "<div class='red'>" + data + "</div>"
    })
}