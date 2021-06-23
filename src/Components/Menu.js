import {Link} from "react-router-dom";

function Menu() {
    return(
    <div>
        <ul><Link to="/">Inicio</Link></ul>
        <ul><Link to="/registro">Registro</Link></ul>
        <ul><Link to="/login">Login</Link></ul>



    </div>
    )
}

export default Menu;