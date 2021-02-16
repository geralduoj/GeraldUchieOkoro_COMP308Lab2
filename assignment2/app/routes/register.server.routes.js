module.exports = function (app) {
    //load the controller(s)
    var index = require("../controllers/index.server.controller");
    var register = require("../controllers/register.server.controller");
  
    //register route url
     
    app.get('/register', register.displayRegPage);
    app.post('/register_student', register.create);

    
  };