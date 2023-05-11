const login = async (req,res)=>{
    res.status(200).send("welcom");
}
const dashboard = async(req ,res)=>{
    const randomNumber = Math.floor(Math.random(100));
    res.status(200).json({msg:`hellow abdullah`,sceret:`Here is you authorized data,this your lucky number ${randomNumber}`})
}

module.exports = {
    login,
    dashboard
}