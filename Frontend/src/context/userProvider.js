import UserContext from "./user.context";
import { useReducer } from "react";
import axios from "axios";
import userReducers from "./userReducer";


const UserProvider = ({children}) => {
   const [userState, dispatch ] = useReducer(userReducers, {token: null});
   const URL = "http://localhost:3005";

const crearUsuario = async(user) => {
    try {
        const respuesta = await axios.post(`${URL}/auth/signup`, user);
        if (respuesta.data.success){
            dispatch({type:"REGISTER", payload:respuesta.data.token})

        }
    } catch (error) {
        console.log(error.message)
    }
}

const iniciarSesion = async(user) => {
    try {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                "Content-Type": "application/json",
                 Authorization: `${token}`
            }
        }
        const respuesta = await axios.post(`${URL}/auth/signin`, user, config);
        if (respuesta.data.success){
            dispatch({type:"REGISTER", payload: {token: respuesta.data.token}}) 
        }
        localStorage.setItem('token', userState.token)
    
    } catch (error) {
        console.log(error.message)    
    }
}

const logout = () => {
    dispatch({ type: 'LOGOUT'})
    
}

const validateToken = async() => {
    const token = localStorage.getItem('token')
    if (token) {
        const respuesta = await axios.get(`${URL}/auth/signin`,{
            headers:{
                Authorization: token
            }
        })
        if (respuesta.data.success) {
            dispatch({type: 'REGISTER', payload: token})
        }
    }
}
return (
    <UserContext.Provider value={{ userState, crearUsuario, logout, iniciarSesion, validateToken}}>
        {children}
    </UserContext.Provider>

)

}


export default UserProvider