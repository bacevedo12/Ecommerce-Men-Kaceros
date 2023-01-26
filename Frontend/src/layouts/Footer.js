import logo from "../components/imagenes/logo-removebg-preview.png"
import  "./footer.css"


const Footer = () => {
    return (
      <div>
            <footer className="footer py-4">
                <nav className="row  contenedorFooter"> 
                    <div className="col-xs-12 col-lg-3">
                    <img className="imagenLogo"alt="logo"src={logo} />
                    </div>
                    <div className='col-xs-12 col-lg-3'>
                        <h3 className="mb-4 fw-bolder">Menú Kceros</h3>
                        <p>Empresa familiar en Concepción, donde preparamos exquisitos Platos
                        Congelados 100% caseros,listos para calentar y servir. Sin preservantes ni colorantes.
                        </p>
             
                    </div>
                    <div className='col-xs-12 col-lg-3'>
                        <h3 className="fw-bolder mb-4 ">Contacto</h3>
                        <i className="fa-brands fa-whatsapp fs-2"></i><p>+569-82386395 </p>
                        <i className="fa-solid fa-envelope fs-2"></i><p>menu_kceros@gmail.com</p>
                    </div>

                    <div className='col-xs-12 col-lg-3'>
                        <h3 className="mb-4 fw-bolder">Siguenos</h3>
                        <i className="fa-brands fa-square-instagram me-3 fs-2"></i>
                        <i className="fa-brands fa-facebook me-3 fs-2"></i>
                        <i className="fa-brands fa-twitter fs-2"></i>
             
                    </div>
                   
                  
                  <div className='col-12 col-md-12 d-flex justify-content-center text-center'> 
                        <p className="text-center text-light mt-4">© 2023 by Bárbara y Camila</p>
                  </div>
                </nav>

            </footer>
        </div>
    );
  }
  
  export default Footer;
