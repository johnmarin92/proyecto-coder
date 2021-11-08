import React, {Fragment} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({titulo}) => {
    return(
        <Fragment>
            <p className = "encabezado">{titulo}</p>
        <ItemCount initial={0} stock={5}/>
        </Fragment>
    )

}

export default ItemListContainer