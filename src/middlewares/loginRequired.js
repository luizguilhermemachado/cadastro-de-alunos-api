import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' '); // Extrai o token (ignora o 'Bearer')

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);

    // Atribui os dados do usuário à requisição
    req.userId = dados.id;
    req.userEmail = dados.email;

    // Opcional: Verifica se o usuário ainda existe no banco
    const user = await User.findByPk(dados.id);
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não encontrado'],
      });
    }

    return next();
  } catch (error) {
    console.error('Erro na autenticação:', error.message);
    return res.status(401).json({
      errors: ['Token expirado ou inválido']
    });
  }
};
