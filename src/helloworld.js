/** 
 "import" express javascript library
 Express is a framework package (or in JS terms, a "module"), which makes
 it easier for us to organize our web application
**/
const express = require('express');

const app = express(); 

<<<<<<< HEAD
app.use('/',express.static(__dirname + '/views'));
=======
//function used to "serve" or for the server to deliver a static html file, 
//which is stored in the views directory stated as "index.html". 
//first argument determines the address of which the server sends the file to.
//(in this example, it serves: localhost:3000/ , in the second it is localhost:3000/helloworld)
app.use('/',express.static(__dirname + '/views/login'));
app.use('/home',express.static(__dirname + '/views/homepage'));
>>>>>>> 1881b2a08bb5469249887b109904f446f26ddcf7


app.get('/test',function(req,res){	
	res.send('This is a test! I am testing to make sure that my tools work');
});

<<<<<<< HEAD
app.get('/test2',function(req,res){
	res.send('Other text to show function');
});
=======

>>>>>>> 1881b2a08bb5469249887b109904f446f26ddcf7
//the server is listening on port 3000. access in browser with localhost:3000
app.listen(3000, function(req,res){
	console.log('Listening on port 3000...');
});