import { Router } from 'express'
import { createUsuario, signin, profile } from '../controllers/usuarios.controller.js'
import checkAuth from '../middleware/checkAuth.js'

const usuariosRouter = Router()


const baseURI = '/usuarios'
const baseURI2 = '/auth'

usuariosRouter.post( `${ baseURI2 }/signup`, createUsuario )
usuariosRouter.post(`${ baseURI2 }/signin`, signin)
usuariosRouter.get( baseURI, checkAuth, profile )




export default usuariosRouter