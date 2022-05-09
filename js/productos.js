import { getData } from "../helpers/getData.js"
import { navbarDos } from "../modules/navbarDos.js";
import { footer } from "../modules/footer.js";
import { showProducts } from "./showProducts.js";

let contenedorNavbar = document.getElementById('containerNav'); 
let contenedorFooter = document.getElementById('containerFooter');



document.addEventListener('DOMContentLoaded', async () =>{
    
    navbarDos(contenedorNavbar);
    footer(contenedorFooter);
    
    let productos = await getData();
    showProducts(productos);
});

document.addEventListener('click', ({target}) => {
    if(target.classList.contains('btn-outline-dark')){
        let id = target.id;
        localStorage.setItem('idProducto', id);

        window.location.href = './producto.html'
    }
})