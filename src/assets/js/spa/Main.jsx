import React from "react";

function Main() {
    return(
        <main>
      <div class="cuerpo_1">
        <figure class="pet">
          <video autoplay muted loop>
            <source src={process.env.PUBLIC_URL + '/video/pet.mp4'} type="video/mp4" />
          </video>
          <div class="spa">
            <h1 style={{fontSize: "30px"}}><strong>SPA Y CORTE</strong></h1>
            <p style={{fontSize: "25px"}}>
              Es muy importante el cuidado y salud de tu mascota. Encuentra en
              <strong>PETZOO</strong>, el mejor<br/>servicio de estética y aseo para
              tu mimado.
            </p>
          </div>
        </figure>
      </div>
      <div class="cuerpo_2">
        <h2>¡Agenda tu cita con anticipación!</h2>
        <a href="https://w.app/Petzoo" class="btn btn-success">AGENDAR CITA</a>
      </div>
      <div class="cuerpo_3">
        <div class="row titulo">
          <div class="col-md-1"></div>
          <div class="col-md-9">
            <h2>Servicio de Spa</h2>
            <hr/>
          </div>
          <div class="col-md-2"></div>
        </div>
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-3">
            <h3><strong>Corte de Raza</strong></h3>
            <p>Cada raza tiene su estilo único y es importante que mantengas siempre su buena imagen. Contamos con el personal profesional indicado y capacitado, para hacer que tu mascota luzca siempre impresionante.</p>
            <br/>
            <h3><strong>Desparasitación</strong></h3>
            <p>La salud de tu mascota es muy importante y es esencial que esté al día con la desparasitación. Recuerda desparasitarla cada periodo para que se mantenga saludable.</p>
          </div>
          <div class="col-md-3">
            <h3><strong>Aseo y Baño</strong></h3>
            <p>El aseo regular es esencial para la salud de tu mascota. Usamos productos especiales y de calidad que se adaptan y cuidan la piel de tu mimado, logrando que su pelaje se vea increíble y su piel se mantenga saludable.</p>
            <br/>
            <h3><strong>Antipulgas</strong></h3>
            <p>Es muy molestoso cuando se encuentran con pulgas o garrapatas. Por eso es importante realizar su servicio de aseo periódicamente y adicional colocar un antipulgas como prevención.</p>
          </div>
          <div class="col-md-3">
            <h3><strong>Baño Medicado</strong></h3>
            <p>Para mascotas con piel sensible o heridas en la piel, contamos con productos especiales de la mejor calidad para realizar baños medicados y cuidar la piel de tu mimado.</p>
            <br/>
            <h3><strong>Transporte</strong></h3>
            <p>Llegamos a varios sectores y transportamos a tu mascota con todas las medidas de seguridad. Contamos con personal capacitado para llevar a tu mascota segura.</p>
          </div>
          <div class="col-md-2"></div>
        </div>
      </div>
    </main>
    )
};

export default Main;