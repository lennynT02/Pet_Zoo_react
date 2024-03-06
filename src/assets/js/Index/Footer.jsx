import React from "react";

function Footer() {
    return(
        <footer>
      <div className="row">
        <div className="col-md-6">
          <h5>CONTACTO</h5>
          <p>
            <a href=""><i className="fas fa-map-marker-alt"></i></a>
            <a href=""><i className="fas fa-phone"></i></a>
            <a href=""><i className="fas fa-envelope"></i></a>
          </p>
        </div>
        <div className="col-md-6">
          <h5><strong>REDES SOCIALES</strong></h5>
          <p>
            <a href=""><i className="fab fa-facebook-f"></i></a>
            <a href=""><i className="fab fa-instagram"></i></a>
            <a href=""><i className="fab fa-twitter"></i></a>
          </p>
        </div>
        </div>
      <p>&copy; 2024 PetZoo</p>
    </footer>
    )
}

export default Footer;