/* eslint-disable no-undef */
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

class TokenController{
  store = async (req, res)=>{
    const {email = '', password = ''} = req.body

    if(!email || !password){
      return res.status(401).json({
        errors: ['Credencias inválidas'],
      })
    }

    const user = await User.findOne({where: {email}})

    if(!user){
      return res.status(401).json({
        errors: ['Usuário inválido'],
      })
    }

    if(!(await user.passwordIsValido(password))){
      return res.status(401).json({
        errors: ['Senha inválida'],
      })
    }
    const {id} = user
    // eslint-disable-next-line no-undef
    const token = jwt.sign(
  { id, email },
  process.env.TOKEN_SECRET, // Garanta que isso está definido
  { expiresIn: process.env.TOKEN_EXPIRATION || '7d' } // Fallback
);
res.json({ token });
  }
}

export default new TokenController()
