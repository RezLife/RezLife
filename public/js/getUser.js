var userEmail = "testingEmail";
exports.setUser = function (email, callback) {
    userEmail = email;
    console.log(userEmail);
    callback();
};
function getUser() {
    return "test:" + userEmail;
};