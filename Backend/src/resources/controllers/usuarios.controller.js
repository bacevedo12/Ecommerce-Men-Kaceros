import { usuarioModel } from '../model/usuarios.model.js';
import generateId from "../../../auth/generateId.js";
import { getToken } from '../../../auth/jwt.js';



export const createUsuario = async ( req, res ) => {
 // revisar esta parte 
    // const { username } = req.body;
    // const userExists = await User.findOne({ username });

    // if(userExists) {
    //     const error = new Error('Usuario ya registrado');
    //     return res.status(400).json({ msg: error.message });
    // } 
//
    try{
      const user  = new usuarioModel(req.body);
      user.token = generateId();
      user.hashPassword(req.body.password);
      let resultado;
      await user.save().then((data) => resultado = data);
      return res.json ({
        success: true,
        msg: "persona creada",
        details: resultado,
        userId: user._id
      });
    }catch (error) {
      console.log(error);
      return res.json({
      success: false,
       msg: "ocurrio un error",
       details: error.message
      });
   } 
  }

  export const getUsuarios = async ( req, res ) => {
    try {
      const usuarios = await usuarioModel.find()
      res.json({usuarios});
    }catch (e) {
      return res.json ({
        msg: "error",
        details: e.message
      });
    }
    
  }


    
export const signin = async (req, res) => {
    try {
      const filter = {
        username: req.body.username,
        // password: req.body.password,
        //active: true
      }
      console.log (req.body)
      const u = await usuarioModel.findOne(filter);
      if (u && u?.validPassword(req.body.password)) {
        return res.json({
          success: true,
          msg: "ok",
          token: getToken(req.body.username),
        });
      } else {
        console.warn("intento de ingreso no autorizaado!! ");
        return res.status(401).json({
          msg: "unauthorized",
          details: "this user is not authorized for this endpoint"
        })
      }
    } catch (error) {
      return res.json({
        success: false,
        msg: "error en autenticación",
        details: error.message
      })
    }
  }
  
//     const { username, password } = req.body;
//     const user = await usuarioModel.findOne({ username });
//     if(!user) {
//         const error = new Error('Usuario y/o clave incorrecta');
//         return res.status(404).json({ msg: error.message });
//     }

//     if(await user.validPassword(password)) {
//         res.json({
//             _id: user._id,
//             name: user.name,
//             token: getToken(req.body.username)
//         })
//     } else {
//         const error = new Error('Usuario y/o clave incorrecta');
//         return res.status(403).json({ msg: error.message });
//     }
// }





export const confirmed = async (req, res) => {
    const { token } = req.params;
    const userConfirm = await usuarioModel.findOne({ token });

    if(!userConfirm) {
        const error = new Error('Token no válido');
        return res.status(403).json({ msg: error.message }); 
    }

    try {
        userConfirm.confirmed = true;
        userConfirm.token = '';
        await userConfirm.save();
        res.json({
            msg: "Usuario confirmado correctamente"
        })
    } catch (error) {
        console.log(error);
    }

}

export const profile = async (req, res) => {
    const { user } = req;
    res.json(user);
}
