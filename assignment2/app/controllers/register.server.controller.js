exports.displayRegPage = function (req, res) {

    var questions = [
      "Favorite subject:",
      "Number of languages:",
      "Major:",
      "Favorite Sport:",
      "Favorite Team:",
      "Favorite Actor:",
      "Favorite Food:",
      "Strongest Technical Skill:"
    ];
  
    var session = req.session;
    res.render("register");
};