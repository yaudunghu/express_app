var User = require("../models/User");
module.exports.controller = (app)=>{
	//get users page
	app.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, 'name email');
    res.send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
});}

