// Load the 'Student' Mongoose model
const Student = require('mongoose').model('Student');

var numberOne = 0;
var numberTwo = 0;
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

var dictOfQuestions = { 
  FavoriteSubject : "Favorite subject:", 
  Numberoflanguages : "Number of languages:",
  Major : "Major:",
  FavoriteSport : "Favorite Sport:",
  FavoriteTeam : "Favorite Team:",
  FavoriteActor : "Favorite Actor:",
  FavoriteFood : "Favorite Food:",
  StrongestTechnicalSkill : "Strongest Technical Skill:",
};

exports.displayRegPage = function (req, res) {

  generateTwoNumbers();
  
    var session = req.session;
    res.render('register', {
      randques1: questions[numberOne],
      randques2: questions[numberTwo],
      errAdd: []
  });
};

exports.create = function(req, res, next) {
  generateTwoNumbers();
	// Create a new instance of the 'User' Mongoose model
	const student = new Student(req.body);

	// Use the 'User' instance's 'save' method to save a new user document
	student.save((err) => {
        if(err)
        {
            var errAdd = [];
            for (field in err.errors) {
                errAdd.push(err.errors[field].message); 
                console.log(errAdd);
            }
            res.render('register', {
              randques1: questions[numberOne],
              randques2: questions[numberTwo],
              errAdd: errAdd
            });
            
            //res.json(err);
        }else {
			// Use the 'response' object to send a JSON response
			res.json(student);
		}
	});
};

function generateTwoNumbers() {
  numberOne = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
  numberTwo = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
  if((numberOne == numberTwo) && ((numberOne == 7) || (numberOne == 0))){
      if(numberOne == 7){
      	 numberTwo--;
      }
      else if(numberOne == 0){
      	numberTwo++;
      }
  }
  else if(numberOne == numberTwo){
  	numberTwo++;
  }
}