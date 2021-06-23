import React from 'react';
import './Login.css';

function Login() {
    return (
        <div>
                <form autoComplete="off">
                    <h2>Inicia Sesión</h2>

                    <label> Email </label>
                    <input className="respuestas-form" type="email" required autoComplete="ÑÖcompletes"/>

                    <label> Contraseña </label>
                    <input className="respuestas-form" type="password" required autoComplete="ÑÖcompletes"/>

                    <input className="enviar" type="submit" id="login" value="LOGIN" />

                </form>
        </div>
    )
}




export default Login;