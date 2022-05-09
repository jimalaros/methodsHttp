let template = document.getElementById('template').content;
let fragment = document.createDocumentFragment();
let contenedorProductos = document.getElementById("containerProductos");

export const showProducts = (array) => {
    array.forEach(item=> {
        const { id, nombreProducto, img, precio } = item;

        template.querySelector('img').setAttribute('src', img );
        template.querySelector('img').setAttribute('alt', nombreProducto);
        template.querySelector('p').textContent = precio;
        template.querySelector('a').textContent = nombreProducto;
        template.querySelector('a').setAttribute('id', id);

        let clone = template.cloneNode(true);
        fragment.appendChild(clone);

    })

    contenedorProductos.appendChild(fragment);
}