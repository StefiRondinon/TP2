import React, { useState, useEffect } from 'react';
import './Home.css';
import Producto from '../Components/Producto';
import ProductoP from '../Components/Producto';

function Home(props){

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({})

    useEffect(
        () => {
            fetch("https://jsonfy.com/items")
                .then(res => res.json())
                .then(data => {
                    console.log("data", data)
                    setLoading(false);
                    setProducto(data[0]);
                })
        },
        []
    )

    if (loading) {
        return (
            <div>
                Loading ...
            </div>
        )
    } else {
        return (
            <div>{Producto}</div>
            )
    }
    // return (
    //     <div className="productos">
    //         <div className="contenedor-productos">
    //             {setProducto(items => <Producto datos={items} />)}
    //         </div>
    //     </div>
    // )
}

{/* <div className="productos">
<div className="contenedor-productos">
    <h1>{producto.name}</h1>
    <h2>{producto.description}</h2>
    <h3>{producto.price}</h3>
    <img className="imagen" src={producto.photo_url}></img>
</div>
</div> */}



// class Home extends Component {
//     constructor() {
//         super()
//         this.state = {
//             producto: []
//         }
//     }

//     componentDidMount(prevProps, prevState) {
//         fetch("https://jsonfy.com/items")
//             .then(res => res.json())
//             .then(data => {
//                 this.setState({
//                     producto: data
//                 })
//             })
//     }

//     render() {

//         return (
//             <div className="productos">
//                 <div className="contenedor-productos">
//                     {this.state.producto.map(items=> <Producto datos={items} />)}
//                 </div>
//             </div>
//         )
//     }
// }



export default Home;