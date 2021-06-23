import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Registro from './Pages/Registro';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Producto from './Components/Producto';
import Menu from './Components/Menu';
import DetalleProducto from './Pages/DetalleProducto';


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route path="/" exact component={Home} />
      <Route path="/producto" exact component={DetalleProducto} />
      <Route path="/registro" exact component={Registro} />
      <Route path="/login" exact component={Login} />

   




    </BrowserRouter>
  );
}

export default App;
