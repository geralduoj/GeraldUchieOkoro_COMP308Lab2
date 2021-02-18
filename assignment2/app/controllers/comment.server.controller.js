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
		}
	});
  };