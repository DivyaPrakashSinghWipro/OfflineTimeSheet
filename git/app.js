var express=require('express');
var app=express();
var router = express.Router();

const bootstrap = require("./bootstrap");
bootstrap(app, router);

var bodyParser =require("body-parser");
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);


var server=app.listen(4000,function() {
	console.log("sever shuru ho gaya");
});