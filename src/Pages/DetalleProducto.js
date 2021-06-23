import React, {useState, useEffect} from 'react';
import Producto from '../Components/Producto';


function Detalle(props) {
   const id = props.match.params.id
   const [loading,setLoading] = useState(true);
   const [producto,setProducto] = useState({})
   useEffect(
       ()=>{ 
        fetch("https://jsonfy.com/items/"+id)
        .then(res => res.json())
        .then(data => {
            console.log("data",data)
            setLoading(false);
            setProducto(data[0]);
        })
       },
       []
   )

   if(loading){
    return(
        <div>
            Loading ...
        </div>
    )
   } else{
    return(
        <div>
           {Producto.name}
        </div>
    )
   }
   
}








export default Detalle;