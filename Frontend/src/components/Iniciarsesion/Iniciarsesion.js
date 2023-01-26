import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useState, useEffect } from "react";
import "./iniciarsesion.css";
import { useNavigate} from "react-router-dom";
import UserContext from '../../context/user.context';



function Iniciarsesion() {

const navigate = useNavigate();
const state = useContext(UserContext)

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
    try {
      state.iniciarSesion(datos)
      navigate('/Miperfil')
    } catch (error) {
      console.log(error)
    }
    }
  

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