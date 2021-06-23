import React, {Component} from 'react'; 
import './Producto.css';
import {Link} from "react-router-dom";



function Producto(props){
    
    return(
        <div className="contenedorItems">
            <div className="titulo">{props.datos.name}</div>
            <img className="imagen" src={props.datos.photo_url} alt="Imagen"></img>
            {/* <div>Descripción: {props.datos.description}</div>
            <div>Precio: {props.datos.price}</div> */}
           <button className="boton"><Link to={"/producto/"+props.datos.id}>Ver detalle</Link></button>

        </div>
    )
}

export default Producto;