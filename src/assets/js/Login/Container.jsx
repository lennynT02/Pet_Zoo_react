import React from "react";

function Container() {
    return (
        <div className="container registrar">
            <div className="informacion">
                <div className="info">
                    <h2>Bienvenido a PetZoo</h2>
                    <p>Ingresa tus datos para iniciar sesión</p>
                    <input type="button" id="inicio" value="Iniciar Sesion" />
                </div>
            </div>
            <div className="login">
                <div className="login-form">
                    <h2>Crear una cuenta</h2>
                    <div className="icon">
                        <i className='bx bxl-facebook' ></i>
                        <i className='bx bxl-google'></i>
                        <i className='bx bxl-microsoft' ></i>
                    </div>
                    <p>o usa tu correo para registrarte</p>
                    <form action="" className="form">
                        <label>
                            <i className='bx bx-user' ></i>
                            <input type="text" placeholder="Nombre Completo" />
                        </label>
                        <label>
                            <i className='bx bx-envelope' ></i>
                            <input type="email" placeholder="Correo Electronico" />
                        </label>
                        <label>
                            <i className='bx bx-lock ' ></i>
                            <input type="password" placeholder="Contraseña" />
                        </label>
                        <input type="submit" value="Registrarse" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Container;