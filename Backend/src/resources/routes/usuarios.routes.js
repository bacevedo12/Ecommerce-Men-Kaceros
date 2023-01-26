import { Router } from 'express'
import { createUsuario, getUsuarios, signin, confirmed, profile } from '../controllers/usuarios.controller.js'
import checkAuth from '../../../checkAuth/checkAuth.js'

const usuariosRouter = Router()


const baseURI = '/usuarios'
const baseURI2 = '/auth'

usuariosRouter.post( baseURI, createUsuario )
usuariosRouter.post(`${ baseURI2 }/signin`, signin)
usuariosRouter.get( `${ baseURI }/:token`, confirmed )
usuariosRouter.get( baseURI, getUsuarios )
usuariosRouter.get( baseURI, checkAuth, profile )




export default usuariosRouter