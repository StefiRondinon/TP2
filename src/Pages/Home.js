import React, { Component } from 'react';
import './Home.css';
import Producto from '../Components/Producto';


class Home extends Component {
    constructor() {
        super()
        this.state = {
            producto: []
        }
    }

    componentDidMount(prevProps, prevState) {
        fetch("https://jsonfy.com/items")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    producto: data
                })
            })
    }

    render() {

        return (
            <div className="productos">
                <div className="contenedor-productos">
                    {this.state.producto.map(items=> <Producto datos={items} />)}
                </div>
            </div>
        )
    }
}



export default Home;