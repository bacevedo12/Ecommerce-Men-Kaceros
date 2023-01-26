import Carrusel1 from '../imagenes/fotoCarrusel1.jpg'
import Carrusel2 from '../imagenes/fotoCarrusel4.jpg'
import Carrusel3 from '../imagenes/fotoCarrusel3.jpg'

function ControlledCarousel() {
    return (
  <div id="carouselExampleControls" className=" carrusel carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner justify-content-center ">
      <div className="carousel-item active">
        <img src={Carrusel1} className= "imag-responsive center-block" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={Carrusel2} className="imag-responsive center-block" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={Carrusel3} className="imag-responsive center-block" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    );
  }
  
  export default ControlledCarousel;