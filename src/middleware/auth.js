const passport = require('passport');
const { Strategy, ExtractJwt }  = require('passport');

const User = require('../models/userModel');

const jwt_secret = "#!€${a%%sA?s#$&13"

const strategy = new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwt_secret
    },
    
    async (payload, done) => {
        try {
            const user = await User.findById({userId: payload.id});
            if (!user) {
                const error = new Error ({message: 'User not found'});
                console.error(error);
            }
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    }
);

passport.use(strategy);

const initialize = () => {
    return passport.initialize();
}

const authenticate = () => {
    return passport.authenticate('jwt', {session: false});
}


module.exports = {
    initialize,
    authenticate,
}


