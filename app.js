var express = require('express');
var app = express();
var fs = require('fs')

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	//res.send('<h1>Hello again</h1>');
    res.render('index', {
               title: 'Home',
                subtitle: 'Home Page for the mandatory assignment',
                text: 'This is some text i chose to put in the paragraph'
               });
}); 

app.get('/about', function(req, res){
    
    //Asyncronous way of reading object
    fs.readFile('about.json', 'utf-8', function(err, data) 
    {
        res.render('index', JSON.parse(data));
    });

});


app.listen(3000);