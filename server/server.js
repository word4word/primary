var express  = require("express")
var app = express()
var server = require("http").createServer(app)
var io = require('socket.io').listen(server)
var users = require('./controllers/userController')
var path = require("path")
var middleware = require("./config/middleware")
var port = process.env.PORT || 3000
var authFacebook = require('./config/passport.js')
var passport = require("passport")
var sockets = require("./config/sockets")



sockets(io)
authFacebook(passport,app)
middleware(app,express)

isAuthed = (req,res,next) => {
  if(req.isAuthenticated()){
    return next()
  }
}


app.get("/",function (req,res) {
	res.sendFile(path.join(__dirname,"../dist/index.html"))
})

app.get("/movies",function(req,res){
	console.log("movies")
})

app.get("/user",isAuthed,users.get)




server.listen(port)
console.log("listening on " + port);

