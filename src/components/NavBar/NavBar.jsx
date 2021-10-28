import './Nav.css'
import CartWidget from '../CartWidget'




const NavBar = () => {
    return(
        
        <nav>
            <CartWidget/>
            <div className="logo"><h1>My E-commerce</h1></div>
            
            <ul>
                <li>Home</li>
                <li>Tienda</li>
                <li>Galleria</li>
                <li>Formulario</li>
            </ul>
        </nav>

        

        
    )
}
export default NavBar