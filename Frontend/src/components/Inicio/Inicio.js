import "./Inicio.css"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import menusemanal from "../imagenes/foto-menusemanal.jpg";
import ControlledCarousel from './Carrusel'

const Home = () => {
    return (
        <div className="Container">
         <main className="row m-0">
            <div className="imagenInicio">
                <div className="seccionInicio">
                <h1 className="parrafoInicio mt-4 fw-bolder fs-1 text-dark">Comida casera a la puerta de tu casa</h1><br></br>
                <h2 className="parrafoInicio mt-5 fw-bolder text-dark">Escoge los platos que más te gusten </h2>
                <h3 className="parrafoInicio mt-3 fw-bolder text-dark"> ¡Y crea tu menú personalizado!</h3>
                <Button as={Link} to="/Menu" className="text-light m-5 " variant="info">Ver menú</Button>
                </div>
            </div>   
            <div className="col-m-6 col-s-12 c p-0">
                <img alt="logo"src={ menusemanal } className="imagenMenuSemanal"/>
            </div>
            <div className="reservaInicio col-m-6 col-s-12 align-items-center">
         <h1 className="parrafoReserva pt-5 mt-5">Registrate gratis</h1>
         <h3 className="parrafoReserva mt-3">Y recibe todas nuestras <br></br>promociones de menus!!!!</h3>
         <Button as={Link} to="/Registro"className="botonRegistrate text-light mt-5 mb-5" variant="info">Registrate Aquí</Button> 
      </div>
      
            </main>
            <div className="carousel">
            <ControlledCarousel/>
        </div>   
        </div>
         
    )
}

export default Home