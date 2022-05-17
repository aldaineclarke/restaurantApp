class IndexController {

    constructor(){}
    getHomePage(req, res) {
        res.render('index');
     }
    getLoginPage(req, res) {
        res.render("login");
     }
    getAboutPage(req, res){
         res.render("about");
     }
    getNewsPage(req, res){
         res.render("news");
     }
    getContactPage(req, res){
         res.render("contact");
     }
    getShopPage(req, res){
         res.render("shop");
     }
    getCartPage(req, res){
         res.render("cart");
     }
     
}

module.exports = new IndexController();