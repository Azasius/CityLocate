var express = require('express');

var hostname = 'localhost';
var port = 3000;

var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var myRouter = express.Router();


myRouter.route('/games')

    myRouter.route('/')

    .all(function(req,res){
        res.json({message : "Bienvenue sur local host ", methode : req.method});
    })

    myRouter.route('/play/games/')
    .post(function(req,res){
        res.json({message : "Lancement du jeu", methode : req.method});

    })

    myRouter.route('/play/games/:id')
    .get(function(req,res){
        res.json({message : "Information sur la partie",

            methode : req.method
        });
    })

    myRouter.route('play/games/:id')
    .put(function(req,res){
        res.json({message : "Mise à jour de la partie", methode : req.method});
    })

app.use(myRouter);

app.listen(port, hostname, function(){
    console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port);
});
