const productos = [
    {
        id: "aa11",
        nombre: "Remera horda",
        stock: 2,
        precio: 5000,
        img: "/img/remerawow.webp",
        categoria: "remeras",
        descripcion:"Remera de la faccion de la Horda de World of Warcraft",
    },

    {
        id: "aa12",
        nombre: "remera alianza",
        stock: 5,
        precio: 5000,
        img: "/img/remerawow2.webp",
        categoria: "remeras",
        descripcion:"Remera de la faccion de la Alianza de World of Warcraft",
    },

    {
        id: "ab11",
        nombre: "Gorra wow",
        stock: 3,
        precio: 4000,
        img: "/img/gorrawow.jpeg",
        categoria: "gorras",
        descripcion:"Gorra con el logo de World of Warcraft",
    },

    {
        id: "ab12",
        nombre: "gorra alianza",
        stock: 5,
        precio: 4000,
        img: "/img/gorrawow2.jpg",
        categoria: "gorras",
        descripcion:"Gorra con el logo de la faccion de la Alianza de World of Warcraft",
    },

    {
        id: "ac11",
        nombre: "Humano pala/warrior",
        stock: 5,
        precio: 6000,
        img: "/img/muñecowow.png",
        categoria: "articulos",
        descripcion:"Muñeco de un humano paladin / guerrero de World of Warcraft",
    },

    {
        id: "ac12",
        nombre: "Elfo druida/rogue",
        stock: 5,
        precio: 6000,
        img: "/img/muñecowow2.webp",
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