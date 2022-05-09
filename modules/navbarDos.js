export const navbarDos = (container) => {
    container.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="../../index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./pages/productos.html">Productos</a>
                    </li>   
                    <li class="nav-item">
                        <a class="nav-link" href="./pages/nuevoProducto.html">Agregar</a>
                    </li>
                </ul>
            </div>
        </nav>
    `
};
