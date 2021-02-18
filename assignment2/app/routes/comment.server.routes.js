module.exports = function (app) {
    //load the controller(s)
    var comment = require("../controllers/comment.server.controller");

    app.post("/makeComment", function (req, res) {
        //use the controller function
        comment.makeComment(req, res);
      });
  
    
  };
  