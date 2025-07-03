import User from '../models/User.js'

class UserController{
  store = async (req, res)=>{
    try {
      const novoUser = await User.create(req.body)
      const {id, nome, email} = novoUser
      return res.json({id, nome, email})
    } catch (error) {

      res.status(400).json({errors: error.errors.map(err => err.message)})
    }
  }

  index = async(req, res)=>{
    try {
      const users = await User.findAll({attributes: ['id', 'nome', 'email']})
      return res.json(users)
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return res.json(null)
    }
  }

  show = async(req, res)=>{
    try {
      const user = await User.findByPk(req.params.id)
      const {id, nome, email} = user
      return res.json( {id, nome, email})
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return res.json(null)
    }
  }

  update = async (req, res) => {
    try {
      const user = await User.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ errors: ['Usuário não encontrado'] });
      }

      const { nome, email, password } = req.body;
      const updatedUser = await user.update({ nome, email, password }); // 👈 Atualiza apenas campos permitidos
      return res.json(updatedUser);

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return res.status(500).json({ errors: ['Erro interno'] });
    }
};

  delete = async(req, res)=>{
    try {
      const user = await User.findByPk(req.userId);
      if(!user){
        return res.status(400).json({
          errors: ['Usuário não existe']
        })
      }
      await user.destroy()
      return res.json(null)

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      return res.json(null)
    }
  }
}

export default new UserController()
