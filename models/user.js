var mongoose = require('mongoose');

// Mongoose Schema definition
var schema = mongoose.Schema;
var userSchema = new schema({
    username: {type: String, unique: true},
    password: String,
});

//Register Function
userSchema.statics.register = function(data, cb){

    var new_user = new user({
        username: data.username,
        password: data.password,
    });

    new_user.save(function(err){
        if(!err){
            cb(true);
        }else{
            cb(false);
        }
    });
};


// Mongoose Model definition
var user = mongoose.model('users', userSchema);

module.exports = user;