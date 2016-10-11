
///Git repository: https://github.com/roije/MandatoryAssignment_1.git

var express = require('express');
var app = express();
var fs = require('fs')

//Home object.
var home = require('./home.js')

app.set('view engine', 'ejs');

//Save object as JSON object
var about = {
    title: 'About',
    subtitle: 'About Page for the Mandatory Assignment',
    text: 'This text comes from a json file !! :)'
}

//Synchronously writing it to a .json file.
var jsonObject = JSON.stringify(about, null, 4);
fs.writeFileSync('./about.json', jsonObject, 'utf-8')

    
app.get('/', function(req, res){
	//res.send('<h1>Hello again</h1>');
    res.render('index', home);
}); 

app.get('/about', function(req, res){
    
    //Asyncronous way of reading object
    fs.readFile('about.json', 'utf-8', function(err, data) 
    {
        res.render('index', JSON.parse(data));
    });

});


app.listen(3000);