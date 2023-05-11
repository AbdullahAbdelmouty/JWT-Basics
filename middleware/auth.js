const jwt = require('jsonwebtoken');
const { CustomAPIError } = require('../error/custom-error');

const authenticationMiddleware = async(req,res,next)=>{
    const authHeader = req.headers.authorization;
    //check if token exist or not
    if(!authHeader || authHeader.startsWith("Bearer")){
        throw new CustomAPIError("No token provided",401)
    }
    const token = authHeader.split(' ')[1];
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const {id,user} = decode;
        req.user = {id,user};
        next();
    } catch (error) {
        throw new CustomAPIError("No token provided",401)
    }
}

module.exports = authenticationMiddleware;