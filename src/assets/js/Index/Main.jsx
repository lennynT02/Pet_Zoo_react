import React from "react";
import { Link } from "react-router-dom";

function Main() {
    return (
        <main>
            <div className="row cuerpo_1">
                <div className="col col-md-7">
                    <img src="/img/pet.png" alt="perro en peluqueria" />
                </div>
                <div className="col col-md-3">
                    <i className="fas fa-cut" style={{transform: 'rotate(-30deg)',fontSize: '50px' }}></i>
                    <br />
                    <h3>PetZoo Spa</h3>
                    <br /><br />
                    <p>
                        <strong>¿Deseas que tu mascota deslumbre con su apariencia?</strong>
                        Reserva una cita y nuestros expertos se encargarán de realzar la
                        belleza natural de tu querido compañero.
                    </p>
                    <span>
                        <a href="https://w.app/Petzoo" className="btn btn-success">Reservar</a>
                        <Link to="/Spa" className="btn btn-light">Informacion</Link>    
                    </span>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row cuerpo_2">
                <figure className="juguete">
                    <img src="/img/juguete.png" alt="perro" />
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <h5>PetZoo Spa</h5>
                            <h2><strong> Visita nuestro local</strong></h2>
                            <p>
                                Le brindamos el mejor servido a su mascota, en un lugar
                                agradeable y acogedor donde nuetros peludos se sientan comodos
                            </p>
                        </div>

                        <div className="col-md-4">
                            <a href="local.html" className="btn btn-primary">Como llegar</a>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </figure>
            </div>
            <div className="row cuerpo_3">
                <figure className="pet">
                    <img src="/img/pet1.png" alt="perro" />
                    <div className="spa">
                        <h1><strong>Conoce todos nuestros servicios</strong></h1>
                    </div>
                </figure>
            </div>
            <div className="row cuerpo_4">
                <div className="col-md-4">
                    <figure className="servicios ducha">
                        <img src="/img/pet2.png" alt="Perro en la bañera" />
                        <div className="spa">
                            <br /><br /><br /><br /><br /><br />
                            <h1><strong>SPA Y CORTE</strong></h1>
                            <p>
                                Es muy importante el cuidado y salud de tu mascota. Encuentra en
                                <strong>PETZOO</strong>, el mejor servicio de estética y aseo para
                                tu mimado.
                            </p><br /><br />
                            <a href="spa.html" className="btn btn-info">Conocer mas</a>

                        </div>
                    </figure>
                </div>
                <div className="col-md-4">
                    <figure className="servicios comida">
                        <img src="/img/comida.png" alt="Comida de perros" />
                        <div className="spa">
                            <br /><br /><br /><br /><br /><br />
                            <h1><strong>ALIMENTOS</strong></h1>
                            <p>
                                Encuentra en <strong>PETZOO</strong> los mejores alimentos para tu
                                mascota, con la mejor calidad y precio.
                            </p><br /><br />
                            <a href="#" className="btn btn-info">Conocer mas</a>
                        </div>
                    </figure>
                </div>
                <div className="col-md-4">
                    <figure className="servicios accesorio">
                        <img src="/img/accesorios.png" alt="Juguetes de perros" />
                        <div className="spa">
                            <br /><br /><br /><br /><br /><br />
                            <h1><strong>Accesorios</strong></h1>
                            <p>
                                En <strong>PETZOO</strong> encontrarás los mejores accesorios para
                                tu mascota, con la mejor calidad y precio.
                            </p><br /><br />
                            <a href="#" className="btn btn-info">Conocer mas</a>
                        </div>
                    </figure>
                </div>
            </div>
        </main>
    );
}

export default Main;