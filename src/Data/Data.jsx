const productos = [
    {
        id: "aa11",
        nombre: "Remera horda",
        stock: 2,
        precio: 5000,
        img: ["/img/remerawow.webp", "/img/remerawowa.webp", "/img/remerawowb.jpg"],
        categoria: "remeras",
        descripcion:"Remera de la faccion de la Horda de World of Warcraft",
    },

    {
        id: "aa12",
        nombre: "Remera alianza",
        stock: 5,
        precio: 5000,
        img: ["/img/remerawow2.webp", "/img/remerawow2a.jpg", "/img/remerawow2b.jpg"],
        categoria: "remeras",
        descripcion:"Remera de la faccion de la Alianza de World of Warcraft",
    },

    {
        id: "ab11",
        nombre: "Gorra wow",
        stock: 3,
        precio: 4000,
        img: ["/img/gorrawow.jpeg", "/img/gorrawowa.webp", "/img/gorrawowb.jpg"],
        categoria: "gorras",
        descripcion:"Gorra con el logo de World of Warcraft",
    },

    {
        id: "ab12",
        nombre: "Gorra alianza",
        stock: 5,
        precio: 4000,
        img: ["/img/gorrawow2.jpg", "/img/gorrawow2a.jpg", "/img/gorrawow2b.jpg"],
        categoria: "gorras",
        descripcion:"Gorra con el logo de la faccion de la Alianza de World of Warcraft",
    },

    {
        id: "ac11",
        nombre: "Humano pala/warrior",
        stock: 5,
        precio: 6000,
        img: ["/img/muñecowow.png", "/img/muñecowowa.webp", "/img/muñecowowb.webp"],
        categoria: "articulos",
        descripcion:"Muñeco de un humano paladin / guerrero de World of Warcraft",
    },

    {
        id: "ac12",
        nombre: "Elfo druida/rogue",
        stock: 5,
        precio: 6000,
        img: ["/img/muñecowow2.webp", "/img/muñecowow2a.jpg", "/img/muñecowow2b.webp"],
        categoria: "articulos",
        descripcion:"Muñeco de un elfo de la noche druida / picaro de World of Warcraft",
    },
]

const getProductos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}

export {getProductos}