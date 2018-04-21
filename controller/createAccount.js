//modules
var generator = require('generate-password');
var sendEmail = require('./sendEmail.js');
var bcrypt = require('bcrypt');
const saltRounds = 11; //number of salt rounds for encryption

//check if a valid floor and building were selected
exports.verifyFloor = function (floor, building) {
    console.log("floor: " + floor + " building: " + building);
    //floors in Fischer
    if (building == "Fischer") {
        //West floors
        if (floor == "1 West" || floor == "2 West" || floor == "3 West" || floor == "4 West" || floor == "5 West") {
            return true;
        } //South floors
        else if (floor == "3 South" || floor == "4 South" || floor == "5 South") {
            return true;
        } //East floors
        else if (floor == "2 East" || floor == "3 East" || floor == "4 East" || floor == "5 East") {
            return true;
        } else return false;
    } //floors in Smith-Traber
    else if (building == "Smaber") {
        //South floors
        if (floor == "1 South" || floor == "2 South" || floor == "3 South") {
            return true;
        } //East floors
        else if (floor == "2 East" || floor == "3 East") {
            return true;
        } //Traber floors
        else if (floor == "Traber 2" || floor == "Traber 3" || floor == "Traber 4" || floor == "Traber 5" || floor == "Traber 6" || floor == "Traber 7") {
            return true;
        } else return false;
    }
    return false;
};

//create new user
exports.addAccount = function (con, email, role, dorm, floor, res) {
    var password = generator.generate();
    var unencrypted = password;

    //encrypt the password
    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
            res.send({
                "code": "400",
                "error": err
            });
            console.log("Error hashing password: " + err);
        } else {
            //send email with the temporary password
            sendEmail.emailPassword(email, unencrypted);
            //insert new user into the database
            var sql = `INSERT INTO t_users (email, password, role, floor, building) VALUES ('${email}', '${hash}', '${role}', '${floor}', '${dorm}')`;
            con.query(sql, function (err, result) {
                if (err) {
                    res.send({
                        "code": "400",
                        "failed": err
                    });
                } else {
                    res.send("Account added!");
                }
            });
        }
    });
};