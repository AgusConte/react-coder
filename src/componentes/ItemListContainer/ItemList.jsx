import Item from "./item"
const ItemList = ({productos}) => {
    return(
        <div className="item">
            {
                productos.map((producto) => (
                    <Item producto={producto} key={producto.id}/>
                ))
            }
        </div>
    )
}

export default ItemList