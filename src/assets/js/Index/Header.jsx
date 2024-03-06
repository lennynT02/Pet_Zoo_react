import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="row cb1">
                <div className="col col-md-6">
                    <h6 style={{margin: "0px"}}>
                        <strong>ATENCIÓN DE LUNES A DOMINGO 10:00 AM A 7:00 PM</strong>
                    </h6>
                </div>
                <div className="col col-md-6">
                    <ul>
                        <a href="#" className="linea" style={{fontWeight: "bold"}}><strong>PETZOO</strong></a>
                        <a href="spa.html" className="linea">Spa</a>
                        <a href="#" className="linea">Tienda</a>
                        <a href="#">Contacto</a>
                        <a href="" className="red"><i className="fab fa-facebook-f"></i></a>
                        <a href="" className="red"><i className="fab fa-instagram" style={{fontWeight: "bold"}}></i></a>
                        <a href="" className="red"><i className="fas fa-phone" style={{transform: "rotate(90deg)"}}></i></a>
                    </ul>
                </div>
            </div>
            <div className="row cb2">
                <div className="col col-md-4 d-flex align-items-center justify-content-center">
                    <a href="" style={{display: "flex", alignItems: "center"}}>
                        <i className="fas fa-bars" style={{fontSize: "25px", marginRight: "5px"}}></i>
                        <span>Menu</span>
                    </a>
                </div>
                <div className="col col-md-4">
                    <a href="">
                        <i className="fas fa-dog" style={{fontSize: "59px"}}></i>
                        <h1 style={{display: "inline-block"}}><strong>PETZOO</strong></h1>
                    </a>
                </div>
                <div className="col col-md-4">
                    <Link to="/login"><i className="fas fa-user linea2" style={{fontSize: "20px"}}></i></Link>
                    <a href=""><i className="fas fa-search linea2" style={{fontSize: "20px", paddingLeft: "9px"}}></i></a>
                    <a href=""><i className="fas fa-shopping-basket" style={{fontSize: "20px", paddingLeft: "9px"}}></i></a>
                </div>
            </div>
        </header>
    );
}

export default Header;