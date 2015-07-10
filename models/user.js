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
}

userSchema.statics.login = function(data, cb){

    user.findOne({username: data.username}, function(err, user){

        if(!err && user){
            if(user.password == data.password){
                user.save(function(err){
                    if(!err){
                        cb(user);
                    } else {
                        cb(false);
                    }
                });
            }    
        } else{
            cb(false);
        }
    });
}

// Mongoose Model definition
var user = mongoose.model('users', userSchema);

module.exports = user;