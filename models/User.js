const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema= new Schema({name: String, email:String});
const User= mongoose.model('users', UserSchema);
module.exports=User;

/*const user_resource=new User({name: 'John Doe', email:'john@doe.com'});

user_resource.save((error)=>{
	if (error)
	  console.log(error);
	res.send({success:true, code:200, msg:"User added!"})}); 

User.find({}, 'name email', function (error, users){
	if (error){console.error(error);}
	res.send({users: users})});

User.find({}, 'name email')
  .then(users => {
    res.send(users);
  })
  .catch(error => {
    console.error(error);
  });*/

 
