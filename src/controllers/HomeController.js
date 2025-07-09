class HomeController {
  index = (req, res) => {
    return res.status(200).json({
      status: 'OK',
      message: 'API de Cadastro de Alunos está online.',
      versao: '1.0.0',
      endpoints: {
        usuarios: '/users',
        login: '/tokens',
        alunos: '/alunos',
        fotos: '/fotos'
      }
    });
  }
}

export default new HomeController();
