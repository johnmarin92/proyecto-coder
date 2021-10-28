import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



const  App = () =>  {
  return (
   
    <div className="App">
     <NavBar />
     <ItemListContainer 
        titulo="Este es el encabezado principal y mi ItemListContainer"
     />
   </div>
  );
}

export default App;

