class NewController {
  index(req, res) {
    res.render("./news");
  }
  show(req, res) {
    res.send("Succeed!");
  }
}
module.exports = new NewController();
