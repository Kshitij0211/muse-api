class AuthController {
  async login(req, res, next) {
    console.log("Login");
    res.send("login");
  }
}

export default new AuthController();
