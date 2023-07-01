const { BadRequestError } = require("../error");
const jwt = require("jsonwebtoken");
const login = async (req,res)=>{
    const {username,password} = req.body;
    //to make vildation on data you can use one of three methodes
    //monogoos vildation
    //joi
    //check in controllers
    if(!username || !password){
        throw new BadRequestError("Please provide name and password");
    }
    const id = new Date().getDate();
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:"30d"});
    res.status(200).json({msg:"user created",token});
}
const dashboard = async(req ,res)=>{
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({
      msg: `Hello, ${req.user.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`
    })

}

module.exports = {
    login,
    dashboard
}