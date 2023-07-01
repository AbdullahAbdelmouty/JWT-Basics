const { CustomAPIError } = require("../error/custom-error");
const jwt = require("jsonwebtoken");
const login = async (req,res)=>{
    const {username,password} = req.body;
    //to make vildation on data you can use one of three methodes
    //monogoos vildation
    //joi
    //check in controllers
    if(!username || !password){
        throw new CustomAPIError("Please provide name and password",400);
    }
    const id = new Date().getDate();
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:"30d"});
    res.status(200).json({msg:"user created",token});
}
const dashboard = async(req ,res)=>{
    // const authHeader = req.headers.authorization;
    // if(!authHeader || !authHeader.startsWith("Bearer ")){
    //     throw new CustomAPIError("No token provided",401)
    // };
    // const token = authHeader.split(' ')[1];
    // try {
    //     decoded = jwt.verify(token,process.env.JWT_SECRET)
    //     const randomNumber = Math.floor(Math.random(100));
    //     res.status(200).json({msg:`hellow ${decoded.username}`,sceret:`Here is you authorized data,this your lucky number ${randomNumber}`})
    // } catch (error) {
    //     throw new CustomAPIError("Not authorized to acess this route",401)
    // }

    const luckyNumber = Math.floor(Math.random() * 100)

    res.status(200).json({
      msg: `Hello, ${req.user.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    })

}

module.exports = {
    login,
    dashboard
}