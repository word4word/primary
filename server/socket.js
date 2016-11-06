var users = require("./controllers/userController")
var connections = []
var users = []
var gameData = {
  videos: {
    speech: [
     // {
     //    title: "Mambo No Five",
     //    id: 'EK_LN3XEcnw',
     //    start: 3,
     //    stop: 51,
     //    finalStop: 53,
     //    a: 'A little bit of Rita\'s all I need',
     //    b: 'A little bit of Tina\'s what I see',
     //    c: 'A little bit of Sandra in the sun',
     //    d: 'A little bit of Monica in my life',
     //    correct: 'd'
     //  },
     //   {
     //    title: "answer",
     //    id: 'EK_LN3XEcnw',
     //    start: 3,
     //    stop: 53,
     //    finalStop: 53,
     //    a: '',
     //    b: '',
     //    c: '',
     //    d: 'A little bit of Monica in my life',
     //    correct: 'd'
     //  },
     

         {
          title: 'Spice-Girls',
          id: 'gJLIiF15wjQ',
          start: 47,
          stop: 60,
          finalStop: 63,
          a: '..wanna Big Mac, extra pickles',
          b: '..wanna be my lover, you gotta get with my friends',
          c: 'really, really, really wanna zigazig ah',
          d: '..if you wanna get with me, better make it fast',
          correct: 'c'
      },
         {
          title: 'answer',
          id: 'gJLIiF15wjQ',
          start: 47,
          stop: 63,
          finalStop: 63,
          a: '',
          b: '',
          c: 'really, really, really wanna zigazig ah',
          d: '',
          correct: 'c'
      },
      { 
        title: 'Obama',
        id: 'xWx9zSy04uA',
        start: 18,
        stop: 27,
        finalStop: 37,
        a: 'that by working together, we can forge a new path to prosperity',
        b: 'that the principles upon which our nation were founded shall endure',
        c: 'that the state of our union is strong',
        d: 'that we will make America great again',
        correct: 'c'
     },
     { 
        title: 'answer',
        id: 'xWx9zSy04uA',
        start: 18,
        stop: 37,
        a: "",
        b: "",
        c: 'that the state of our union is strong',
        d: ""
     },
     // {
     //    title: 'MLK',
     //    id: '1UV1fs8lAbg',
     //    start: 732,
     //    stop: 750,
     //    finalStop: 770,
     //    a: 'that my four little children will one day live in a nation where they are judged not by the color of their skin, but by the content of their character',
     //    b: 'that one day this nation will rise up and live out the true meaning of its creed',
     //    c: 'that one day, even the state of Missisippi, a state sweltering with the heat of injustice ... will be transformed into an oasis of freedom and justice',
     //    d: 'that one day, I will save 15 percent on my car insurance by switiching to Geico',
     //    correct: 'b'
     // },
     
     {
        title: 'Reagan',
        id: 'YtYdjbpBk6A',
        start: 51,
        stop: 68,
        finalStop: 73,
        a: 'Who\'s your daddy?!',
        b: 'Tear down this wall!',
        c: 'Show me the money!',
        d: 'Open this gate!',
        correct: 'd'
     },
      {
         title: 'answer',
        id: 'YtYdjbpBk6A',
        start: 51,
        stop: 73,
        finalStop: 73,
        a: "",
        b: "",
        c: "",
        d: 'Open this gate!',
        correct: 'd'
     },
      {
        title: 'Bush',
        id: 'EMUPr28v_ao',
        start: 0,
        stop: 11,
        finalStop: 14,
        a: 'We\'ve had some sex',
        b: 'We\'ve had some setbacks',
        c: 'We\'ve had some disagreements',
        d: 'We\'ve lowered taxes',
        correct: 'a'
     },
           {
         title: 'answer',
        id: 'EMUPr28v_ao',
        start: 0,
        stop: 14,
        finalStop: 14,
        a: 'We\'ve had some sex',
        b: '',
        c: '',
        d: '',
        correct: 'a'
     },      
     {
        title: 'Lincoln',
        id: '9TCMHVmNc5w',
        start: 6,
        stop: 23,
        finalStop: 28,
        a: 'We are now met on a great battlefield of war',
        b: 'We are now testing whether that nation, or any nation, can long endure',
        c: 'Now we are engaged in a great Civil War',
        d: 'That government of the people, by the people, for the people, shall not perish from this Earth',
        correct: 'c'
     },
      {
        title: 'answer',
        id: '9TCMHVmNc5w',
        start: 6,
        stop: 28,
        finalStop: 28,
        a: '',
        b: '',
        c: 'Now we are engaged in a great Civil War',
        d: '',
        correct: 'c'
     },     
     {
        title: "Shake it off",
        id: 'nfWlot6h_JM',
        start: 0,
        stop: 41,
        finalStop: 44,    
        a: '\'Cause the haters gonna hate, hate, hate, hate, hate',
        b: '\'Cause the fakers gonna fake, fake, fake, fake, fake',
        c: '\'Cause the players gonna play, play, play, play, play',
        d: 'Baby, I\' m just gonna shake, shake, shake, shake, shake',
        correct: 'c'
      },
        {
        title: "answer",
        id: 'nfWlot6h_JM',
        start: 0,
        stop: 44,
        finalStop: 44,    
        a: '',
        b: '',
        c: '\'Cause the players gonna play, play, play, play, play',
        d: '',
      }
    ],
    music: [
      {
          title: 'Spice-Girls',
          id: 'gJLIiF15wjQ',
          start: 47,
          stop: 60,
          finalStop: 63,
          a: '..wanna Big Mac, extra pickles',
          b: '..wanna be my lover, you gotta get with my friends',
          c: 'really, really, really wanna zigazig ah',
          d: '..if you wanna get with me, better make it fast',
          correct: 'c'
      },
      {
        title: "Thriller",
        id: 'sOnqjkJTMaA',
        start: 281,
        stop: 311,
        finalStop: 515,
        a: '\'Cause this is Thiller!',
        b: 'you close your eyes, and hope that this is just imagination',
        c: 'but all the while, your hear a creature creepin up from behind',
        d: 'you\'re paralyzed',
        correct: 'd'
      },
      {
        title: "Mambo No Five",
        id: 'EK_LN3XEcnw',
        start: 3,
        stop: 51,
        finalStop: 53,
        a: 'A little bit of Rita\'s all I need',
        b: 'A little bit of Tina\'s what I see',
        c: 'A little bit of Sandra in the sun',
        d: 'A little bit of Monica in my life',
        correct: 'd'
      },
      {
        title: "Shake it off",
        id: 'nfWlot6h_JM',
        start: 0,
        stop: 41,
        finalStop: 44,    
        a: '\'Cause the haters gonna hate, hate, hate, hate, hate',
        b: '\'Cause the fakers gonna fake, fake, fake, fake, fake',
        c: '\'Cause the players gonna play, play, play, play, play',
        d: 'Baby, I\' m just gonna shake, shake, shake, shake, shake',
        correct: 'c'
      },
      {
        title: "What I've Done",
        id: '8sgycukafqQ',
        start: 0,
        stop: 59,
        finalStop: 70,    
        a: 'so let heaven come and wash away what I\'ve done',
        b: 'so let mercy come and wipe away what I\'ve done',
        c: 'so let mayhem come and erase away what I\'ve done',
        d: 'so let mercy come and wash away what I\'ve done',
        correct: 'd'
      }
    ],
    mix: [
      {
        title: 'Spice-Girls',
        id: 'gJLIiF15wjQ',
        start: 47,
        stop: 60,
        finalStop: 63,
        a: '..wanna Big Mac, extra pickles',
        b: '..wanna be my lover, you gotta get with my friends',
        c: 'really, really, really wanna zigazig ah',
        d: '..if you wanna get with me, better make it fast',
        correct: 'c'
      },
      {
        title: "Thriller",
        id: 'sOnqjkJTMaA',
        start: 281,
        stop: 311,
        finalStop: 515,
        a: '\'Cause this is Thiller!',
        b: 'you close your eyes, and hope that this is just imagination',
        c: 'but all the while, your hear a creature creepin up from behind',
        d: 'you\'re paralyzed',
        correct: 'd'
      },
      {
        title: 'Reagan',
        id: 'YtYdjbpBk6A',
        start: 51,
        stop: 68,
        finalStop: 73,
        a: 'Who\'s your daddy?!',
        b: 'Tear down this wall!',
        c: 'Show me the money!',
        d: 'Open this gate!',
        correct: 'd'
      },
      {
        title: 'Bush',
        id: 'EMUPr28v_ao',
        start: 0,
        stop: 11,
        finalStop: 14,
        a: 'We\'ve had some sex',
        b: 'We\'ve had some setbacks',
        c: 'We\'ve had some disagreements',
        d: 'We\'ve lowered taxes',
        correct: 'a'
      },    
      {
        title: 'Lincoln',
        id: '9TCMHVmNc5w',
        start: 6,
        stop: 23,
        finalStop: 28,
        a: 'We are now met on a great battlefield of war',
        b: 'We are now testing whether that nation, or any nation, can long endure',
        c: 'Now we are engaged in a great Civil War',
        d: 'That government of the people, by the people, for the people, shall not perish from this Earth',
        correct: 'c'
      }
    ]
  }
}

var currentUser = require("./models/currentUsers")
var totalScore = 0;
var speechLength = gameData.videos.speech.length
var speechIndex = 0
var askedQuestions = {speech:[],music:[],mix:[]}
var admins = ['10205631268421505']
var startTime = 0;




module.exports = function (io) {
   
  io.sockets.on("connection",function(socket){
    connections.push(socket)
    console.log(" %s user connected",connections.length);

    socket.on("signedIn",function(data){
      var user = {}
      admins.forEach(function(admin){
        if(data.id === admin){
          user.admin = true
        }
      })

      if(user['admin']){
        socket.emit("admin",true)
      }
      user.name = data.name
      user.avi = data.profileImage
      var currentUsers = new currentUser({
        name: user.name,
        profilePic: user.avi,
        socketId: socket.id
      })
      currentUsers.save()
      updateUsernames()
    })

    socket.on("createRoom",function(room){
      console.log(room)
      socket.join(room) 
      socket.emit("roomchange",room)
    })

    // socket.on("startGame",function(){
    //  socket.emit("gameStarted",true)
    // })

    socket.on("inLobby",function(){
      var roomname = getRoomName(socket)
      if(roomname!== "lobby"){
        console.log("notLobby",roomname)

      }
      console.log("Lobby",roomname)

    })



    socket.on("needQuestion",function(){
      var roomname =  getRoomName(socket)
      if(roomname != "lobby"){
        if(speechIndex === speechLength){
          io.to(roomname).emit("gameover",true)
          socket.leave(roomname)
        } else {
          io.to(roomname).emit('question',gameData.videos[roomname][speechIndex])
        }
      }
    })

    socket.on("answer",function(data){
      var roomname =  getRoomName(socket)
      console.log("datatime:",data.time,"startTime",startTime)
      var diff = data.time - startTime;
      var score = (20000 - diff)/20; 
      if (diff >= 20000){
        score = 0;
      }
      score = score || 0;

      totalScore += score;
      totalScore = Math.round(totalScore);
      io.to(roomname).emit('scoreUpdate', totalScore)
      
      console.log("score:",score)
    })
      
    socket.on("answerOver", function(){
      var roomname = getRoomName(socket)
      console.log("answer")
      setTimeout(function(){
        speechIndex++
        io.to(roomname).emit('question',gameData.videos[roomname][speechIndex])
      }, 1000);
    })

    socket.on("startTimer",function(time){
      var roomname = getRoomName(socket)
      startTime = time
      console.log("notAnswer")
      speechIndex++
      setTimeout(function(){
        io.to(roomname).emit('question',gameData.videos[roomname][speechIndex])
      }, 20000)
    })

  

      socket.on("disconnect",function (data) {
      console.log("disconnect")
      currentUser.findOne({'socketId': socket.id}).remove().then(function(e){
        console.log("deleted user")
      })

      // currentUser.collection.remove()
      connections.splice(connections.indexOf(socket),1)
      updateUsernames()
      console.log(" DISCONNECT: %s sockets connected",connections.length);  
    })

    var asked = function(userSocket){
      var roomname =  getRoomName(userSocket)

      if(roomname != "lobby"){
        // var gameDataLength = gameData.videos[roomname].length
        // var rand = Math.floor(Math.random() * gameDataLength)
        // if(askedQuestions[roomname].length === gameDataLength){
        //   askedQuestions[roomname] = []
        //   io.to(roomname).emit("gameover",true)
        //   userSocket.leave(roomname)
        //   return asked(userSocket) ;
        // }else if(askedQuestions[roomname].indexOf(rand) === -1){
        //   askedQuestions[roomname].push(rand)
        //   return rand;
        // }else{
        //   return asked(userSocket)
        // }
      
      }
    }

    var updateUsernames =  function() {
      var currentUsers = currentUser.find().then(function(user){

        var blah = user.map(function(x){
          var user = {name:x.name,profilePic:x.profilePic}
          console.log("^^^^^^^^^^^", user)
          return user
        })
        socket.emit('getUsers', blah) 
        console.log(blah)
      })
    }

    var getRoomName = function(socket){
      return socket.rooms["music"] ?
        'music'
      :
      socket.rooms['speech'] ?
       'speech'
      :
      socket.rooms['mix'] ?
        'mix'
      :
        "lobby"
    }

  })
}


