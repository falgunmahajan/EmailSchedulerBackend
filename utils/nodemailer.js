const nodemailer = require("nodemailer");
const {USER,PASS} = process.env;

// configuring nodemailer
const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    secure:true,
    port:465,
    auth:{
        user:USER,
        pass:PASS
    }
})


//function to send mails
const sendMAil=async({emailAddress, emailBody, subject})=>{
    const mailOptions = {
        from:USER,
        to:emailAddress,
        subject:subject,
        text:emailBody
    }
    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log(error);
    }
}

module.exports={sendMAil}