import { getDataById } from "../helpers/getDataById.js";
import { navbarDos } from "../modules/navbarDos.js";

let sectionMain = document.getElementById('main');
let modalButton = document.querySelector('.btn-primary');
let contentModal = document.querySelector('.modal-content');
let item;

const contenedorNavbar = document.getElementById('containerNav');



document.addEventListener('DOMContentLoaded', async () => {
    
    navbarDos(contenedorNavbar);
    
    let idProducto = localStorage.getItem('idProducto');
    item = await getDataById(idProducto);

    const {img} = item;

    sectionMain.style.backgroundImage = `url(${img})`
})

modalButton.addEventListener('click', () => {
    const { img, nombreProducto, precio} = item;
    contentModal.innerHTML = `
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${nombreProducto}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body justify-content-center align-items-center text-center">
            <img src=${img} width="150px" height="200px"/>
            <div>
                <p>${precio}</p>
            </div>
        </div>
    `
})