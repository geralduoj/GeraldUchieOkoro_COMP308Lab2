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

exports.displayPage = function (req, res) {

  var session = req.session;
  if (!session.username){
    //display the ejs page
    res.redirect('/');
  }
  else{
    res.render("display", {
      username: session.username,
      stdComments: "Student Comment",
    });
  }

  //show the display.ejs page and pass username to it
  /*res.render("display", {
    username: session.username,
    stdComments: "Student Comment",
  });
  */
  
};
exports.makeComment = function (req, res) {
  //get user input using request object
  var username = req.body.username;
  var coursecode = req.body.coursecode;
  var coursename = req.body.coursename;
  var comments = req.body.comments;
  //make a reference to the session object
  var session = req.session;
  //store the username in session object
  session.username = username;
  console.log("username in session: " + session.username);
  //show the display.ejs page and pass username to it
  res.render("thankyou", {
    username: username,
    stdComments: "Thank you",
    comments: comments,
  });
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
