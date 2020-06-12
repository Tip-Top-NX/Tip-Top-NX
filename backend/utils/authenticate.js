const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const secretKey = '1234-5678';

exports.localPassport = passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.local = passport.authenticate('local');

exports.getToken = (user) => {
    return jwt.sign(user,secretKey);
}

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretKey;

exports.jwtPassport = passport.use(new JwtStrategy(opts,(jwt_payload,done) => {
    User.findOne({_id: jwt_payload._id}, (err,user) => {
        if(err){
            return done(err,false);
        }
        else if(user){
            return done(null,user);
        }
        else{
            //user not found
            return done(null,false);
        }
    })
}));

//middleware verify using jwt
exports.verifyUser = passport.authenticate('jwt', {session: false});