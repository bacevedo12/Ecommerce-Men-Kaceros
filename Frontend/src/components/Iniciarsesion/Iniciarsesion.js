// import { useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import axios from 'axios';
import "./iniciarsesion.css";
import { useNavigate} from "react-router-dom";
// const url_api = 'http://localhost:3005';


function Iniciarsesion() {

const navigate = useNavigate()

  const [datos, setDatos] = useState({
    username:"",
    password:""
  });


  const handleInputChange = (e) =>{
    let { name, value } = e.target;
    let newDatos = {...datos, [name]:value};
    setDatos(newDatos);
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!e.target.checkValidity()){
      console.log("no enviar");
    }else{
      let res = await axios.post("http://localhost:3005/auth/signin",datos);
      console.log(res.data);
      // return res;
      const token = res.data.token
      console.log(token)
      localStorage.setItem("user",token)
      navigate("/Miperfil")  
    }
  };

  // const saveToken = async (token) => {
  //   localStorage.setItem("token", token);
  // }
  // const readToken = async () => {
  //   return localStorage.getItem("token");
  // }
  
  // const login = async (username, password) => {
  //   console.log(username);
  //   console.log(password);
  //   const result = await signIn(username, password);
  //   console.log(result);
  //   if (result) {
  //     saveToken(result.data.token);
  //     return true;
  //   }
  //   return false;
  // };


  // const username = useRef(null);
  // const password = useRef(null);

  // const handleSubmit = () => {
  //   const u = username.current.value;
  //   const p = password.current.value;

  //   login(u, p);
  // };
  


  // const handleSubmito = async(e)=>{
  //   e.preventDefault();
  //   if(!e.target.checkValidity()){
  //     console.log("no enviar");
  //   }else{
  //     try{
  //       let res = await axios.post("http://localhost:3005/auth/signin",datos);
  //       console.log(res.data);
  //       navigate("/Miperfil");
        
  //     }catch (error){
  //       console.error(error)

  //     }
      
      
  //   }

    
  // };


//   const valorInicial = {
//     username:'',
//     password:''
// }

// const [usuario, setUsuario] = useState(valorInicial);

// const capturarInputs = (e) => {
//     const {name, value} = e.target;
//     setUsuario({...usuario, [name]:value})
// }

// const consultarDatos = async (e) => {
//     e.preventDefault();

//     console.log(usuario);
//     try {
//         let config = {
//             method:'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body:JSON.stringify(usuario)
//         }

//         let res = await fetch (`${url_api}/usuarios`, config)
//         let json = await res.json()

//         console.log(json)
//     }catch (error){
//         console.error(error)

//     }
// }





  return (
    <section className='seccionformulario'>
    <Form onSubmit={handleSubmit} className='formulario1'>
      <h1 className='mt-4 mb-4 text-light'>Iniciar Sesión</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleInputChange} value={datos.username}>
        <Form.Control type="text" placeholder="username" name="username"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handleInputChange} value={datos.password}>
        <Form.Control type="password" placeholder="Password" name="password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='mb-4' variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
    </section>
  );
}


export default Iniciarsesion;