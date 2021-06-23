import React from 'react';
import './Registro.css';


function Registro() {
    return (
        <div>
                <form autoComplete="off">
                    <h2>¡REGISTRATE!</h2>

                    <label>Nombre </label>
                    <input className="respuestas-form" type="text" required autoComplete="ÑÖcompletes"/>

                    <label>Apellido </label>
                    <input className="respuestas-form" type="text" required autoComplete="ÑÖcompletes"/>

                    <label> Email </label>
                    <input className="respuestas-form" type="email" required autoComplete="ÑÖcompletes"/>

                    <label> Nombre de usuario </label>
                    <input className="respuestas-form" type="text" required autoComplete="ÑÖcompletes"/>

                    <label> Contraseña </label>
                    <input className="respuestas-form" type="password" required autoComplete="ÑÖcompletes"/>

                    <input className="enviar" type="submit"  value="LOGIN" />

                </form>
        </div>
    )
}




export default Registro;