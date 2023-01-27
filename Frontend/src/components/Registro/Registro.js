import Button from 'react-bootstrap/Button';
import "./registro.css"
import React, { useState } from "react";
// import Swal from 'sweetalert2';
const url_api = 'http://localhost:3005';



const Registro = () => {
 
    const valorInicial = {
        nombre:'',
        apellido:'',
        direccion:'',
        telefono:'',
        email:'',
        username:'',
        password:''
    }

    const [usuario, setUsuario] = useState(valorInicial);

    const capturarInputs = (e) => {
        const {name, value} = e.target;
        setUsuario({...usuario, [name]:value})
    }

    const guardarDatos = async (e) => {
        e.preventDefault();

        console.log(usuario);
        try {
            let config = {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(usuario)
            }

            let res = await fetch (`${url_api}/auth/signup`, config)
            let json = await res.json()

            console.log(json)
        }catch (error){
            console.error(error)

        }

    }




    return(
        <section className="seccionRegistro">
         <main >
            <div className="formularioregistro ">
            <h1 className="m-6 tituloReserva mt-3" >Regístrate</h1>
            <br />
            <form onSubmit={guardarDatos} className="text-white bg-light mb-4 ">
                <div>
                <input className="mb-3 p-1" type="text" id="nombre" name="nombre" placeholder="Nombre"
                 onChange={capturarInputs} value={usuario.nombre}/>
                </div>
                <div>
                <input className="mb-3 p-1" type="text" id="apellido" name="apellido" placeholder="Apellido"
                 onChange={capturarInputs} value={usuario.apellido}/>
                </div>
                <div>
                <input className="mb-3 p-1" type="text" id="direccion" name="direccion" placeholder="Dirección"
                 onChange={capturarInputs} value={usuario.direccion}/>
                </div>
                <div>
                <input className="mb-3 p-1" type="numer" id="telefono" name="telefono" placeholder="Teléfono"
                 onChange={capturarInputs} value={usuario.telefono}/>
                </div>
                <div>
                <input className="mb-3 p-1" type="email" id="email" name="email" placeholder="Email"
                 onChange={capturarInputs} value={usuario.email} />
                </div>
                <div>
                <input className="mb-3 p-1" type="text" id="username" name="username" placeholder="username"
                 onChange={capturarInputs} value={usuario.username} />
                </div>
                <div>
                <input className="mb-3 p-1" type="password" id="password" name="password" placeholder="password"
                 onChange={capturarInputs} value={usuario.password} />
                </div>
                <div>
                <Button className='mt-4 mb-4' variant="secondary" type="submit">Guardar</Button>
                </div>
            </form>
            </div>
        </main>
        </section>
    )
    }
    
    


export default Registro