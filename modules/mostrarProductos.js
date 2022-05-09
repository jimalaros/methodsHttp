export function mostrarProductos(objeto, contenedor) {
    contenedor.innerHTML = ""
    objeto.forEach(function(producto){
        const { img, id, nombreProducto, precio } = producto;
        contenedor.innerHTML += `
            <div id=${id} class="m-auto hijos mb-3 text-dark">
                <img width="150px" src=${img} />
                <p>${nombreProducto}</p>
                <p>${precio}</p>
            </div>       
        `
    })
}
