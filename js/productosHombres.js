import { getDataByCategory } from "../helpers/getDataByCategory.js";
import { footer } from "../modules/footer.js";
import { navbarDos } from "../modules/navbarDos.js";
import { showProducts } from "./showProducts.js";

let containerNavbar = document.getElementById("containerNav");
let containerFooter = document.getElementById("containerFooter");

document.addEventListener('DOMContentLoaded', async () =>{

    navbarDos(containerNavbar);
    footer(containerFooter);

    let productos = await getDataByCategory("MASCULINO");
    showProducts(productos);
});