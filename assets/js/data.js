// Datos de productos y noticias
const productosData = {
    juegos: [
        {
            id: 1,
            nombre: "Elden Ring",
            precio: 490.00,
            precioViejo: 590.00,
            descuento: 15,
            imagen: "img/Elden.png",
            rating: 4,
            categoria: "juegos"
        },
        {
            id: 2,
            nombre: "God of War Ragnarok",
            precio: 650.00,
            precioViejo: 700.00,
            descuento: 20,
            imagen: "img/God.png",
            rating: 5,
            categoria: "juegos"
        },
        {
            id: 3,
            nombre: "Cuphead",
            precio: 250.00,
            precioViejo: null,
            descuento: null,
            imagen: "img/Cuphead.png",
            rating: 4,
            categoria: "juegos"
        },
        {
            id: 4,
            nombre: "Halo Infinite",
            precio: 499.99,
            precioViejo: null,
            descuento: null,
            imagen: "img/Haloo.png",
            rating: 3,
            categoria: "juegos"
        }
    ],
    articulos: [
        {
            id: 5,
            nombre: "Xbox Series X",
            precio: 449.99,
            precioViejo: 499.99,
            descuento: 10,
            imagen: "img/xboxx.png",
            rating: 4,
            categoria: "consolas"
        },
        {
            id: 6,
            nombre: "Silla Gamer Pro",
            precio: 199.99,
            precioViejo: 249.99,
            descuento: 25,
            imagen: "img/SillaGamer.png",
            rating: 4.5,
            categoria: "accesorios"
        },
        {
            id: 7,
            nombre: "PC Gaming Ryzen 7",
            precio: 1199.99,
            precioViejo: 1399.99,
            descuento: 15,
            imagen: "img/PC_Gamer.png",
            rating: 4,
            categoria: "computadoras"
        },
        {
            id: 8,
            nombre: "Auriculares 7.1",
            precio: 89.99,
            precioViejo: null,
            descuento: null,
            imagen: "img/audifonos.png",
            rating: 4.5,
            categoria: "accesorios"
        }
    ]
};

const noticiasData = [
    {
        id: 1,
        titulo: "Los mejores juegos del 2023",
        fecha: "15 Diciembre 2023",
        imagen: "img/Mejores.png",
        descripcion: "Repasamos los títulos más destacados del año que está por terminar, desde aventuras hasta experiencias indie que han marcado tendencia.",
        categoria: "noticias"
    },
    {
        id: 2,
        titulo: "Nuevas consolas en camino",
        fecha: "10 Diciembre 2023",
        imagen: "img/Nintendo.png",
        descripcion: "Analizamos los rumores y confirmaciones sobre las próximas generaciones de consolas y qué podemos esperar de los principales fabricantes en los próximos años.",
        categoria: "noticias"
    },
    {
        id: 3,
        titulo: "Guía de regalos para gamers",
        fecha: "5 Diciembre 2023",
        imagen: "img/Targetas_regalo.png",
        descripcion: "Encuentra el regalo perfecto para los amantes de los videojuegos. Desde periféricos hasta suscripciones y los últimos lanzamientos, tenemos recomendaciones para todos los presupuestos.",
        categoria: "noticias"
    }
];