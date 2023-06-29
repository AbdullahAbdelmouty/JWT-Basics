const { CustomAPIError } = require("../error/custom-error");

const login = async (req,res)=>{
    const {username,password} = req.body;
    //to make vildation on data you can use one of three methodes
    //monogoos vildation
    //joi
    //check in controllers
    if(!username || !password){
        throw new CustomAPIError("Please provide name and password",400);
    }
    res.send("Fake login or register")
}
const dashboard = async(req ,res)=>{
    const randomNumber = Math.floor(Math.random(100));
    res.status(200).json({msg:`hellow abdullah`,sceret:`Here is you authorized data,this your lucky number ${randomNumber}`})
}

module.exports = {
    login,
    dashboard
}