const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../error');

const authenticationMiddleware = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    //check if token exist or not
    if(!authHeader || !authHeader.startsWith("Bearer")){
        throw new UnauthenticatedError("No token provided")
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        req.user = { id, username }
        next();
    } catch (error) {
        throw new UnauthenticatedError("No token provided")
    }
}

module.exports = authenticationMiddleware;