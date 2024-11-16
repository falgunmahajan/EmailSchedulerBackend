const { agenda } = require("../utils/agenda");

const  emailController =(req,res)=>{
    try {
        agenda.schedule("1 hour", "sent email after an hour",req.body); // schedule email to be sent after an hour
        return res.status(201).json({message:"Email scheduled successfully"});  
    } catch (error) {
        console.log(error)
    }

}
module.exports={emailController};