import React, { useState } from 'react'
import './ItemCount.css'


const ItemCount = ({stock, initial}) => {

    const [num, setNum] = useState(initial)

    const incNum = () => {
        num < stock ?  setNum(num + 1) : alert('Superaste el limite')
    }

    const decNum = () => {
        num > initial ?  setNum(num - 1) :   alert('Stock no disponible')
    }
    
    const onAdd = () => {
        if(num >= 1 ) alert(`Agregaste ${num} productos`)
    }
    
    return (  
        <>
            <div className="main_div">
            <div className="center_div"> 
            <h2> Cantidad: {num} </h2>
            <div className = "btn_div">
                
                <button onClick={incNum}> + </button>
                
                {/* <label> Cantidad: {num}</label> */}
                
                <button onClick={decNum}> - </button>

                <button className="btn btn-outline-secondary" onClick={onAdd}>Agregar</button>
               </div>
            </div>
        </div>
        </>
    );
}
 
export default ItemCount; 