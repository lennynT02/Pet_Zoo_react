import React, { useState, useEffect } from "react";
import 'boxicons';

function Hidder() {

    const [showRegistro, setShowRegistro] = useState(true);
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const images = ['/img/peluqueria1.png', '/img/peluqueria2.png', '/img/peluqueria3.png', '/img/peluqueria4.png']

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundIndex((backgroundIndex + 1) % images.length)
        }, 5000);
        return () => clearInterval(interval);
    }, [backgroundIndex, images.length])

    return (
        <div className="body" style={{backgroundImage: `url(${images[backgroundIndex]})` }}>
            <div className={`container registrar ${showRegistro ? '' : 'hide'}`}>
                <div className="informacion">
                    <div className="info">
                        <h2>Bienvenido a PetZoo</h2>
                        <p>Ingresa tus datos para iniciar sesión</p>
                        <input type="button" id="inicio" value="Iniciar Sesion" onClick={() => setShowRegistro(false)}/>
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
            <div className={`container iniciar  ${showRegistro ? 'hide' : ''}`}>
                <div className="informacion">
                    <div className="info">
                        <h2>Bienvenido nuevamente</h2>
                        <p>Para unirte a nosotros, registrate con tus datos</p>
                        <input type="button" id="registro" value="Registrarse" onClick={() => setShowRegistro(true)}/>
                    </div>
                </div>
                <div className="login">
                    <div className="login-form">
                        <h2>Iniciar Sesion</h2>
                        <div className="icon">
                            <i className='bx bxl-facebook' ></i>
                            <i className='bx bxl-google'></i>
                            <i className='bx bxl-microsoft' ></i>
                        </div>
                        <p>o Iniciar Sesion con una cuenta</p>
                        <form action="" className="form">
                            <label>
                                <i className='bx bx-envelope' ></i>
                                <input type="email" placeholder="Correo Electronico" />
                            </label>
                            <label>
                                <i className='bx bx-lock ' ></i>
                                <input type="password" placeholder="Contraseña" />
                            </label>
                            <input type="submit" value="Iniciar Sesion" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hidder;