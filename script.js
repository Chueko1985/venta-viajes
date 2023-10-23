import { barcelona, roma, paris, londres } from "./ciudades.js";

//obtener los elementos del dom
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let precioElemento = document.getElementById('precio')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

//agrego evento click por cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //remover activo, remover la clase "active" de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active')
        });
        //agregar activo al que corresponda, agregar la clase "active" al enlace actual
        this.classList.add('active')

        //traer la informaion del objeto correspondiente a la eleccion, obtener el contenido segun enlace
        let contenido = obtenerContenido(this.textContent)

        //mostrar el contido en el dom
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    })
})
//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Paris': paris,
        'Londres': londres
    }
    return contenido[enlace]
}
