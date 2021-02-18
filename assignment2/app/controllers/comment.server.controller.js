const { ObjectId } = require('mongodb');

// Load the 'Student' Mongoose model
const Comment = require('mongoose').model('Comment');

exports.makeComment = function (req, res) {

    var session = req.session;
    let student = session.student
    const comment = new Comment(req.body);
    comment.student = student;

    comment.save((err) => {
        if(err)
        {
            console.log(err);
        }else {
			// Use the 'response' object to send a JSON response
            console.log(comment);
            res.render("thankyou", {
                studentObj: session.student,
                titlePage: "Thank you for your comment"
            });
		}
	});
  };

exports.commentsPage = function (req, res) {

    var session = req.session;
    var studentID = session.student._id
    if (!session.student){
      //display the ejs page
      res.redirect('/');
    }
    else{
        Comment.find({student:ObjectId(studentID)}, (err, comments) => {
            if (err) {
                // Call the next middleware with an error message
                console.log(err);
            } else {
                //console.log(comments);
                // Use the 'response' object to send a JSON response
                res.render("comments", {
                    studentObj: session.student,
                    titlePage: "All Comments",
                    desc: "These are a list of all comments you have made below",
                    comments: comments
                });
            }
	    });
    }
};

exports.profilePage = function (req, res) {

    var session = req.session;
    if (!session.student){
      //display the ejs page
      res.redirect('/');
    }
    else{
      res.render("profile", {
        studentObj: session.student,
        titlePage: "Profile",
        desc: "Your Profile"
      });
    }
};