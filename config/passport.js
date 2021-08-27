const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const extractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')

module.exports = passport.use(new jwtStrategy({
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETKEY //cambiar por secretorkey
}, (payload, done) => {
    User.findOne({ _id: payload._doc._id })
        .then((res) => {
            if (!res) {
                console.log('if passport')
                return done(null, false)
            } else {
                console.log('else passport')
                return done(null, res)
            }
        })
        .catch(error => done(error, false))
}))