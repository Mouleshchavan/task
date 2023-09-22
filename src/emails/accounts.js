const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

sgMail.send({
    to:'sample@gmail.com',
    from:'test@gmail.com',
    subject:'This is my first creation!',
    text:"I am HERE"
})


const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
        to:email,
        from:'GOODDay@gmail.com',
        subject:'Thanks for joining in!',
        text:`Welcome, ${name}`
    })
}

const sendCancellationEmail = (email, name) =>{
    sgMail.send({
        to:email,
        from:'BYBY@gmail.com',
        subject:'Sorry to see u go!',
        text:`Please come back, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}

