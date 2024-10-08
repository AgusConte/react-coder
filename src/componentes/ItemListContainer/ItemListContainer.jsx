import "./itemlistcontainer.css"

const ItemListContainer = ({prop}) => {

    return(
        <div className="item-list-container">
            <h2>{prop}</h2>
        </div>
    )
}

export default ItemListContainer