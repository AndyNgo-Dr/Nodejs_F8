class SiteController {
  home(req, res) {
    res.render("./home");
  }
  search(req, res) {
    res.render("./search");
  }
  contact(req, res) {
    res.send("Succeed!");
  }
}
module.exports = new SiteController();
