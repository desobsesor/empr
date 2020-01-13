//Iniciando la configuración del servidor
var port = process.env.PORT || /*Puerto de la aplicacion*/ 5021;

//#region DEPENDENCIAS
const express = require('express');
var app = express();

const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
//const engine = require('ejs-locals');
const cors = require('cors');
const methodOverride = require('method-override');
//#endregion

//#region SANITIZER pruebas
var fs = require('fs');
var sanitizer = require('sanitizer');
//#endregion

//engine  = require 'ejs-locals';
//app.engine('ejs', engine)

var http = require('http');
app.use(cookieParser());
app.use(express.static(__dirname));
//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '20mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '20mb', extended: true}))

/*var engines = require('consolidate');
app.engine('html', engines.mustache);*/

// Middleware
//app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine', 'html');
//app.set('views', path.join(__dirname, '/app/views'));
//#region SANITIZER
//parse application/json
//app.use(bodyParser.json());
app.use(cors());
//#endregion

//#region CONTRASEÑAS
//const bcrypt = require('bcrypt');
/*bcrypt.hash('myPassword', 10, function (err, hash) {
	// Store hash in database
});
bcrypt.compare('somePassword', hash, function (err, res) {
	if (res) {
		// Passwords match
	} else {
		// Passwords don't match
	}
});*/
//#endregion

//#region MONGODB
const MongoStore = require('connect-mongo')(session); // Se usa par aguardar las sessiones en mongodb
const conn = require('./config/conexionMongoDB');
const urlMongo = conn.urlMongo;

app.use(session({
    secret: 'keyscip2019',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
        mongooseConnection: conn,
    })
}));
//#endregion

//app.set('view engine', 'hbs');
//const VIEWS = path.join(__dirname, './public');

//#region Arrancando Servidor
require('./app/routes/routes.js')(app);

//index.html routing
app.get('/', function (req, res) {
    res.render("./public/index.html");
});

// Handle 404
app.use(function (req, res) {
    res.status(400);
    res.render('./public/404.html', {title: '404: Archivo no encontrado'});
});
// Handle 500
app.use(function (error, req, res, next) {
    res.status(500);
    console.log('error:', error);
    res.render('./public/500.html', {title: '500: Error interno del servidor', error: error});
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST, OPTIONS');
    res.header("Access-Control-Allow-Headers", "content-type, Authorization, Content-Length, X-Requested-With, Origin, Accept");
    next();
});
//#endregion

//#region ARRANCANDO EL SERVIDOR NODE PARA LA APLICACIÓN
var server = http.createServer(app);
server.listen(process.env.PORT || port, function () {
    console.log('App iniciada en el puerto: ' + port);
});
//#endregion

