
class HomeController{
  index = async (req, res)=>{
    res.json('Index')
  }
}

export default new HomeController()
