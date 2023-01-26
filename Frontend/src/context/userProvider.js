import UserContext from "./user.context";
import { useReducer } from "react";
import axios from "axios";
import userReducers from "./userReducer";


const UserProvider = ({children}) => {
   const [userState, dispatch ] = useReducer(userReducers,{token: null});


}