const stories = require('../controllers/storyController')
const users = require('../controllers/userController')
const router = require('express').Router()
const path = require('path')
const passport = require('passport')

isAuthed = (req,res,next) => {
  if(req.isAuthenticated()){
    return next()
  }
  console.log(req.isAuthenticated())
}

//Connect controller methods to their corresponding routes
router.route('/stories').get(stories.getAllStories)

router.route('/user').get(isAuthed, users.get)

router.route('/current').get(isAuthed, users.current)

router.route('/score').post(isAuthed, users.score)

router.route('/score').get(isAuthed, users.getScores)

router.route('/stories/:id').get(isAuthed, stories.joinStory, stories.getOneStory)

router.route('/stories').post(isAuthed,stories.createStory)

router.route('/stories/:id').put(stories.createNewLine)

router.route('/logout').get((req,res) => {
  req.logout()
  res.redirect('/')
})

router.route('/auth/facebook').get(passport.authenticate('facebook'))

router.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})

// facebook will call this URL
router.route('/auth/facebook/return').get(passport.authenticate('facebook', {
  failureRedirect: '/#/fail',
  successRedirect: '/#/',
}))
router.route('/').get((req,res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'))
})
module.exports = router
