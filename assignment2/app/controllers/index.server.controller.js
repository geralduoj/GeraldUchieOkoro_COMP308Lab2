// Load the 'Student' Mongoose model
const Student = require('mongoose').model('Student');

exports.displayInfo = function (req, res) {
  //get user input using request object
  
  //make a reference to the session object
  var session = req.session;
  //store the username in session object
  var username = req.body.username;
  session.username = username;

  if (session.username) {
    res.redirect('/display');
    console.log("username in session: " + session.username);
  }
  else {
    
    //display the ejs page
    res.render('index', {
        title: 'Login page'
    });
  }
};

exports.loginUser = function (req, res) {

  var email = req.body.email;
  var session = req.session;

	// Use the 'User' static 'findOne' method to retrieve a specific user
	Student.findOne({
		email: email //using the username instead of id
	}, (err, student) => {
		if (err) {
			// Call the next middleware with an error message
			console.log(err);
		} else {
			// Set the 'req.user' property
      session.student = student
      res.render("display", {
        studentObj: session.student,
        titlePage: "Student Comment",
      });
      console.log(session.student);
			// Call the next middleware
		}
	});
};

exports.displayPage = function (req, res) {

  var session = req.session;
  if (!session.student){
    //display the ejs page
    res.redirect('/');
  }
  else{
    res.render("display", {
      studentObj: session.student,
      titlePage: "Student Comment",
    });
  }

};

exports.logout = function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        res.redirect('/');
    }
  });
};
