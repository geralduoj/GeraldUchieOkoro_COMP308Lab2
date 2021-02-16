// using the ref to reference another document
//
// Load the Mongoose module and Schema object
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define a new 'StudentSchema'
const StudentSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        // Set an email index
        index: true,
        // Validate the email format
        match: /.+\@.+\..+/
    },
    
    password: {
        type: String,
        // Validate the 'password' value length
        validate: [
            (password) => password.length >= 6,
            'Password Should Be Longer'
        ]
    },
    randomques1: String,
    randomques2: String,
    randomques3: String,
    randomques4: String,
    randomques5: String,
    randomques6: String,
    randomques7: String
    
});

// Create the 'Student' model out of the 'StudentSchema'
mongoose.model('Student', StudentSchema);