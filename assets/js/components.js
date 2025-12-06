// Función para crear estrellas de rating
function crearEstrellas(rating) {
    let estrellasHTML = '';
    const estrellasLlenas = Math.floor(rating);
    const tieneMedia = rating % 1 !== 0;
    
    // Estrellas llenas
    for (let i = 0; i < estrellasLlenas; i++) {
        estrellasHTML += '<i class="fa-solid fa-star"></i>';
    }
    
    // Media estrella
    if (tieneMedia) {
        estrellasHTML += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    
    // Estrellas vacías
    const estrellasVacias = 5 - Math.ceil(rating);
    for (let i = 0; i < estrellasVacias; i++) {
        estrellasHTML += '<i class="fa-regular fa-star"></i>';
    }
    
    return estrellasHTML;
}

// Función para crear tarjeta de producto
function crearProductoHTML(producto) {
    return `
    <div class="card-product" data-id="${producto.id}">
        <div class="container-img">
            <img src="${producto.imagen}" alt="${producto.nombre}" />
            ${producto.descuento ? `<span class="discount">-${producto.descuento}%</span>` : ''}
            <div class="button-group">
                <span><i class="fa-regular fa-eye"></i></span>
                <span><i class="fa-regular fa-heart"></i></span>
                <span><i class="fa-solid fa-code-compare"></i></span>
            </div>
        </div>
        <div class="content-card-product">
            <div class="stars">
                ${crearEstrellas(producto.rating)}
            </div>
            <h3>${producto.nombre}</h3>
            <span class="add-cart">
                <i class="fa-solid fa-basket-shopping"></i>
            </span>
            <p class="price">
                $${producto.precio.toFixed(2)}
                ${producto.precioViejo ? `<span>$${producto.precioViejo.toFixed(2)}</span>` : ''}
            </p>
        </div>
    </div>
    `;
}

// Función para crear tarjeta de noticia
function crearNoticiaHTML(noticia) {
    return `
    <div class="card-blog">
        <div class="container-img">
            <img src="${noticia.imagen}" alt="${noticia.titulo}" />
            <div class="button-group-blog">
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
                <span><i class="fa-solid fa-link"></i></span>
            </div>
        </div>
        <div class="content-blog">
            <h3>${noticia.titulo}</h3>
            <span>${noticia.fecha}</span>
            <p>${noticia.descripcion}</p>
            <div class="btn-read-more">Leer más</div>
        </div>
    </div>
    `;
}