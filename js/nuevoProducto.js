import { getData } from "../helpers/getData.js";
import { botonEliminar } from "../modules/botonEliminar.js";
import { navbarDos } from "../modules/navbarDos.js";

let contenerdorNavbar = document.getElementById('containerNav'); 
let form = document.getElementById('formulario');
let contenedorProductos = document.getElementById('containerProducts');

document.addEventListener('DOMContentLoaded',async () => {
    navbarDos(contenerdorNavbar);
    let data = await getData();

    botonEliminar(data, contenedorProductos )
}) 

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let data = await getData();

    const img = document.getElementById("imagenProducto").value;
    const nombreProducto = document.getElementById("nombreProducto").value;
    const categoria = document.getElementById("categoriaProducto").value;
    const precio = document.getElementById("precioProducto").value;

    const id = data.length + 1;
    console.log(id);

    let nuevoProducto = {
        id,
        img,
        nombreProducto,
        categoria,
        precio
    }

    fetch('http://localhost:4000/datos', {
        method: 'POST',
        body: JSON.stringify(nuevoProducto),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then( ()=> {
        alert("información guardada")
    })
    .catch(() => {
        alert("Hubo un error")
    })
})

document.addEventListener('click', ({target}) => {
    if(target.classList.contains('btn-danger')){
        let id = target.id;
        fetch(`http://localhost:4000/datos/${id}`, {
            method: "DELETE",
            header:{
                "Content-type": "application/json"
            }
        })
        .then(() => {
            alert("Elemto eliminado");
            window.location.reload();
        })
    }
})