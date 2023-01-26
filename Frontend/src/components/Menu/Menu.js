import './Menu.css';

import Platos from "./Platos.js";
import Instrucciones from './Instrucciones.js';
import { useState, useEffect } from 'react';
 
import { url_api } from '../api/Api';
//import cartContext from './Context/ShoppingCartContext';



// import Imagen_Fondo from '../imagenes/foto-comidaadomicilio.jpg'
//const platoCasero = menu.filter((element) => element.category === "Casero");
//console.log (platoCasero)


const Menu = () => {

    
    const [menu, setMenu]= useState([])
    
    useEffect(()=> {
        
        const getMenu = async() => {
            const result = await fetch(`${url_api}/platos`);
            const menu = await result.json();
            
            
            console.log(menu.platos)
            setMenu(menu.platos)
          }
          getMenu();
    }, [])

    

    const platoCasero = menu.filter((element) => element.category === "Casero");
    const legumbres = menu.filter((element) => element.category === "Legumbres");
    const vvegetariano = menu.filter((element) => element.category === "Vegetariano");

    return (
    
        <div className="fondo">
             <div className='container p-0'>
                               
                <div className='ContenidoPlatos ImagenFondo'>
                    <div className=''>
                    <h1 className='Titulo'>Instrucciones</h1>
                    <hr></hr>
                        <Instrucciones/>
                    <hr></hr>
                    </div>
                    <h1 className='Titulo'>Platos Caseros</h1>
                    <div >                 
                        <div className='d-flex justify-content-center'>            
                            <Platos items={platoCasero}/>
                        </div> 
                    </div> 
                    <h1 className='Titulo'>Legumbres</h1>
                    <div >                 
                        <div className='d-flex justify-content-center'>            
                            <Platos items={legumbres}/>
                        </div> 
                    </div> 
                    <h1 className='Titulo'>Vegetarianos</h1>
                    <div >                 
                        <div className='d-flex justify-content-center'>            
                            <Platos items={vvegetariano}/>
                        </div> 
                    </div>      
              </div>  
            </div>
        </div>
    )
}

export default Menu