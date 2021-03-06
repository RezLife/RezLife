//modules
var nodemailer = require('nodemailer');

//email account settings
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'noreplyrezlife@gmail.com',
        pass: 'eK2BieN83'
    }
});

//email feedback
var feedbackTran = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'resappteam@gmail.com',
        pass: 'eK2BieN83'
    }
});

exports.emailFeedback = function (email, feedback, log) {
    //layout for the email
    var mailOptions = {
        from: 'resappteam@gmail.com',
        to: 'resappteam@gmail.com',
        subject: 'Feedback for WebApp',
        text: 'User who sent the feedback: ' + email + 
        '. Their comments:' + 
        feedback
    };

    //send the email with temporary password
    feedbackTran.sendMail(mailOptions, function (error, info) {
        if (error) {
            log.info("Error sending email: " + error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

exports.emailPassword = function (email, password, logger) {
    //layout for the email
    var mailOptions = {
        from: 'noreplyrezlife@gmail.com',
        to: email,
        subject: 'Resident Life App Password',
        text: 'This is your temporary password: ' + password + 
        '. Go to the Settings tab to update your password after logging in.' + 
        '- Rezlife App Team'
    };

    //send the email with temporary password
    transporter.sendMail(mailOptions, function (error, resp) {
        if (error) {
            logger.info("Error sending email: " + error);
            console.log("Error sending email: " + error);
        } else {
            console.log('Email sent: ' + resp.response);
        }
    });
};