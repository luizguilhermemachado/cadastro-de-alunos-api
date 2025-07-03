import Aluno from '../models/Aluno.js'
import Foto from '../models/Foto.js'

class AlunoController{
  index = async (req, res)=>{
    const alunos = await Aluno.findAll({
      attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename']
      }
    })
    res.json(alunos)
  }

  store = async (req, res)=> {
    try {
     const aluno = await Aluno.create(req.body)
     res.json(aluno)
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err)=> err.message)
      })

    }
  }

  show = async (req, res)=> {
    try {
      const {id} = req.params
      if(!id) {
        return res.status(400).json({
        errors: ['Missing Id']
        })
      }

      const aluno = await Aluno.findByPk(id, {
      attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename']
      }
    })

      if(!aluno) {
        return res.status(400).json({
        errors: ['Aluno não existe']
        })
      }

      return res.json(aluno)
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err)=> err.message)
      })

    }
  }

  update = async (req, res)=> {
    try {
      const {id} = req.params
      if(!id) {
        return res.status(400).json({
        errors: ['Missing Id']
        })
      }

      const aluno = await Aluno.findByPk(id)

      if(!aluno) {
        return res.status(400).json({
        errors: ['Aluno não existe']
        })
      }
      const alunoAtualizado = await aluno.update(req.body)
      return res.json(alunoAtualizado)
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err)=> err.message)
      })

    }
  }

  delete = async (req, res)=> {
    try {
      const {id} = req.params
      if(!id) {
        return res.status(400).json({
        errors: ['Missing Id']
        })
      }

      const aluno = await Aluno.findByPk(id)

      if(!aluno) {
        return res.status(400).json({
        errors: ['Aluno não existe']
        })
      }
      await aluno.destroy()
      return res.json('Aluno apagado')
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err)=> err.message)
      })

    }
  }
}

export default new AlunoController()
