import { useEffect, useState } from 'react';
import React from 'react';
import Button from 'react-bootstrap/Button';
import { getUsers } from '../api/Api';
import "./Miperfil.css"
// import { Usuario } from './usuario';
// import { UsuarioItem } from './usuarioItems';


const Miperfil = () => {
 
  // const [usuario, setUsuario]= useState([])
    
  // useEffect(()=> {
      
  //     const getUsers = async() => {
  //         const result = await fetch(`${url_api}/usuarios`);
  //         const usuario = await result.json();
          
          
  //         console.log(usuario)
  //         setUsuario(usuario)
  //       }
  //       getUsuario();
  // }, []);


        // const [usuario, setUsuario] = useState([]);
      
        // useEffect(() => {
        //   getUsers()
        //     .then((data) => {
        //       setUsuario(data);
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        // getUsers()
        // });
      
      
         
     
      
   


    return (
      <div className="App">


   

   
    <section className="container-fluid miPerfil">
       <h1 className="pt-5 mb-5 fs-1 fw-bolder text-light tituloPerfil">Información de mi cuenta</h1>   
    <div className="seccionPerfil row">
    <div className="col-6 border-end">
    <div className="mb-5 miPerfil">
       <i className="fa-sharp fa-solid fa-user fs-1 mt-5 me-3 mb-2 text-light logoPerfil"></i>
       <p className="textoPerfil fs-2 pb-4 fw-bolder text-light border-bottom">Mi Perfil</p>
    </div>
    <div className="text-start">
        <ul className="text-aling-start">
        <li className="mb-4 fs-4">Actualización de mis datos </li>
        <li className="mb-4 fs-4">Mi carrito de compras</li>
        <li className="mb-4 fs-4">Pagos pendientes</li>
        <li className="mb-5 fs-4">Mis últimos pedidos</li>

        </ul>
    </div>
    </div>
    <div className="col-6">
    <div>
        <h3 className="mt-5 mb-4 fs-2 fw-bolder misDatos text-light">Mis Datos</h3>
    </div>
    {/* <Usuario>
        {
          usuario.map((usuario) => (
            <UsuarioItem
              key={usuario._id}
              nombre={usuario.nombre}
              apellido={usuario.apellido}
              direccion={usuario.direccion}
              telefono={usuario.telefono}
              email={usuario.email}
            />

          ))
        }
      </Usuario> */}
    <div>
        <label className="me-3 mt-3 mb-3">Nombre(s)</label>
        <input></input>
    </div>
    <div>
        <label className="me-3 mb-3">Apellido(s)</label>
        <input></input>
    </div>
    <div>
        <label className="me-3 mb-3">Dirección</label>
        <input></input>
    </div>
    <div>
       <label className="me-3 mb-3">Teléfono</label>
       <input></input>
    </div>
    <div>
       <label className="me-4 mb-3">Email</label>
       <input></input>
    </div>
    <div>
    <Button className='mt-4 mb-4' variant="secondary">Actualizar datos</Button>
    </div>
    </div>
    </div>
    </section>  
    </div>
    )
}
        
        


        
    


export default Miperfil
