import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'



const  App = () =>  {
  return (
   
    <div className="App">
     <NavBar />
     <ItemListContainer 
        titulo="Este es el encabezado principal y mi ItemListContainer"
     />
     <ItemCount />
   </div>
  );
}

export default App;

