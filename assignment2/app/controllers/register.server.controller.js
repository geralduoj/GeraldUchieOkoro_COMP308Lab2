// Load the 'Student' Mongoose model
//const User = require('mongoose').model('User');

var numberOne = 0;
var numberTwo = 0;

exports.displayRegPage = function (req, res) {

  generateTwoNumbers();

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
    res.render('register', {
      randques1: questions[numberOne],
      randques2: questions[numberTwo]
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