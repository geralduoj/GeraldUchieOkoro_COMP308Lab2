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
  "FavoriteSubject" : "FavoriteSubject", 
  "Numberoflanguages" : "Numberoflanguages",
  "Major" : "Major",
  "FavoriteSport" : "FavoriteSport",
  "FavoriteTeam" : "FavoriteTeam",
  "FavoriteActor" : "FavoriteActor",
  "FavoriteFood" : "FavoriteFood",
  "StrongestTechnicalSkill" : "StrongestTechnicalSkill",
  key: function(n) {
    return this[Object.keys(this)[n]];
  }
};


exports.displayRegPage = function (req, res) {

  generateTwoNumbers();
  
    var session = req.session;
    res.render('register', {
      randques1: questions[numberOne],
      randques2: questions[numberTwo],
      actualques1: dictOfQuestions.key(numberOne),
      actualques2: dictOfQuestions.key(numberTwo),
      errAdd: []
  });
};


exports.create = function(req, res, next) {
  generateTwoNumbers();
  var session = req.session;
	// Create a new instance of the 'User' Mongoose model
	const student = new Student(req.body);
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
          actualques1: dictOfQuestions.key(numberOne),
          actualques2: dictOfQuestions.key(numberTwo),
          errAdd: errAdd
        });
        
        //res.json(err);
    }else {
  // Use the 'response' object to send a JSON response
        session.student = student
        res.render("display", {
          studentObj: session.student,
          titlePage: "Student Comment",
        });
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