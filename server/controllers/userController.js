var db = require('../models/config')
var User = require('../models/user')

module.exports = {

  get: (req,res) => {
  var user = {
    id: req.user.facebookId,
    name: req.user.name,
    profileImage: req.user.profilePic
  }
  res.send(user)
},

  post: (req, res) => {
    var username =  req.body.username
    var password = req.body.password
    User.findOne({username: username})
    .then((user) => {
      if(!user) {
        var newUser = new User({
          username: username,
          password: password,
          sessions: uuid.v4()
        })
        newUser.save()
        .then((user) => {
          res.cookie('sessionId', user.sessions)
          res.redirect('/')
        })
      } else {
        var err = new Error({error: 'This username is already taken'})
        res.send(err)
      }
    })
  },

  verify: (req, res) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({username: username})
    .then((user) => {
      if(user){
        user.comparePassword(password, function(err, match) {
          if (match) {
            var session = uuid.v4()
            user.sessions = session
            user.save((data) => {
              res.cookie('sessionId', session)
              return res.redirect('/')
            },(err) => {
              return res.status(400).send('User could not be updated')
            })
          } else {
            return res.status(404).send('Password incorrect');
          }
        });
      } else {
        return res.status(404).send('User not found')
      }
    })
    .catch(function(err) {
      console.log(err);
      return res.status(500).send('idk lol');
    });   
  }

};
