import React, { useState } from 'react'
import './ItemCount.css'


const ItemCount = () => {

    const [num, setNum] = useState(0)

    const incNum = () => {
        setNum(num + 1)
    }

    const decNum = () => {
        if(num > 0){
            setNum(num - 1)
        }else {
            alert('Agregue un producto')
           setNum(0) 
        }
        
    }
    
    
    return (  
        <>
            <div className="main_div">
            <div className="center_div"> 
            <h2> {num} </h2>
            <div className = "btn_div">
                <button onClick={incNum}> + </button>
                <button onClick={decNum}> - </button>
               </div>
            </div>
        </div>
        </>
    );
}
 
export default ItemCount; 