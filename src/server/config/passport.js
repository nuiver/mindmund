'use strict'

const bCrypt = require('bcrypt-nodejs')
const passport = require('passport')
const { Strategy } = require('passport-local')
let User = null

const LocalLoginStrategy = new Strategy(
  {
    passReqToCallback: true
  },
  (req, username, password, done) => {
    User = req.app.get('models').User
    const isValidPassword = (entered, stored) => {
      return bCrypt.compareSync(stored, entered);
    };
    User.findOne({ where: { username }})
      .then(user => {
      if (!user) {
        return done(null, false, {
          message: "Can't find a user with those credentials. Please try again"
        })
      }
      if (!isValidPassword(user.password, password)) {
        return done(null, false, {
          message: 'Incorrect password.'
        })
      }
      const userInfo = user.get();
      return done(null, userInfo);
    })
  }
)

const RegistrationStrategy = new Strategy(
  {
    passReqToCallback: true
  },
  (req, username, password, done) => {
    User = req.app.get('models').User
    const generateHash = entered => {
      return bCrypt.hashSync(entered, bCrypt.genSaltSync(8))
    }
    User.findOne({
      where: { username }
    }).then(user => {
      if (user) {
        return done(null, false, {
          message: 'That username is already taken'
        })
      } else {
        const userPassword = generateHash(password)
        const data = {
          username,
          password: userPassword,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email
        }
        User.create(data).then(newUser => {
          if (!newUser) {
            return done(null, false, {
              message: 'Error creating new user'
            })
          }
          if (newUser) {
            return done(null, newUser)
          }
        })
      }
    })
  }
)

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(({ id }, done) => {
  User.findById(id).then(user => {
    if (user) {
      done(null, user.get())
    } else {
      done(user.errors, null)
    }
  })
})

passport.use('local-signUp', RegistrationStrategy)
passport.use('local-signIn', LocalLoginStrategy)
