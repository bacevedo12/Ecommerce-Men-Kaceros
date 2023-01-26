import './Product_Details.css';

// import Imagen_Fondo from '../imagenes/foto-comidaadomicilio.jpg'
//const platoCasero = menu.filter((element) => element.category === "Casero");
//console.log (platoCasero)

const ProductDetails = () => {
 
    return (
        <div className="fondo">
             <div className='container p-0'>
                               
                <div className='ContenidoPlatos ImagenFondo'>
                    <div className=''>
                    <h1 className='Titulo'>Instrucciones</h1>
                    <hr></hr>
                       
                    <hr></hr>
                    </div>
                    <h1 className='Titulo'>Platos Caseros</h1>
                    <div >                 
                        <div className='d-flex justify-content-center'>            
                            
                        </div> 
                    </div> 
                    <h1 className='Titulo'>Legumbres</h1>
                    <div >                 
                        <div className='d-flex justify-content-center'>            
                            
                        </div> 
                    </div> 
                    <h1 className='Titulo'>Vegetarianos</h1>
                    <div >                 
                        <div className='d-flex justify-content-center'>            
                           
                        </div> 
                    </div>      
              </div>  
            </div>
        </div>
    )
}

export default ProductDetails