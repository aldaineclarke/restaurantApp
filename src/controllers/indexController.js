
class IndexController {

    constructor(){}
    getHomePage(req, res) {
        res.render('index',{title:"home"});
     }
    getLoginPage(req, res) {
        res.render("login",{title:"login"});
     }
    getAboutPage(req, res){
         res.render("about",{title:"about"});
     }
    getNewsPage(req, res){
         res.render("news",{title:"news"});
     }
    getContactPage(req, res){
         res.render("contact",{title:"contact"});
     }

    getCartPage(req, res){
         res.render("cart",{title:"cart"});
     }
     getCheckoutPage(req, res){
        res.render("checkout",{title:"checkout"});
    }
    logoutUser(req,res){
        delete req.session;
        res.redirect("/login");
    }

     
}

module.exports = new IndexController();