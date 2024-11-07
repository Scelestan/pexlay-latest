const https = require('http');
const crypto = require('crypto');
const fs = require('fs');
const express = require('express');
const Cty = require('./Log.js');
const fL = require('./auth/firstLog.js');
//const logSock = require('./logSock.js');

const querystring = require("querystring");

var Routerer = express.Router();

var ipLOGey2 = fL.ipcalcul();
var ipLOGey = fL.ipcalcul2();

//logSock.Init__Socklog();

module.exports = {


SlaSh_ : function(port, inscription, connexion, Accueil) {

Routerer.get(Accueil, function (req, res, next) {
res.set({ 'content-type': 'text/html; charset=utf-8' });
res.write(fL.PageLogin().replace("LINKinscription", "https://"+ipLOGey + port + "/" + inscription).replace("LINKconnexion", "https://"+ipLOGey + port + "/" + connexion));
res.end();
});
return Routerer;
},


LoadLog_ : function(port, inscription, Accueil, authent, valueOF) {

if (!valueOF) {
valueOF = 0;
console.log("authentificator creation done");
}

Routerer.post('/map', function (req, res) {
res.set({ 'content-type': 'text/javascript; charset=utf-8' });
var PoignetDePorte = false;

var pourcentage;
var userN;
var mapping;
req.setEncoding("utf8");
        req.addListener("data", function(postDataChunk) {
            
          
if (PoignetDePorte == false) {

userN = querystring.parse(postDataChunk).name;
mapping = querystring.parse(postDataChunk).map;
writeResis();

PoignetDePorte = true;

}





function writeResis() {

if (PoignetDePorte == false) {
res.set({ 'content-type': 'text/html; charset=utf-8' });

var html = new Buffer.from('<!DOCTYPE html>' +
"<html>" +
"<head>" +
"<title>Accueil</title>" +
'<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />' +
"<script src ='jquery'></script>" +
fs.readFileSync(__dirname + "/auth/Doss/head.html").toString().replace(/lliieenn/g, "https://"+fs.readFileSync(__dirname + "/auth/" + "lien.txt").toString()) +
"</head>" +
"<body>" +
"<div style='z-index:1; width   : 100%; height  : 100%; position:absolute'>" +
fs.readFileSync(__dirname + "/auth/Doss/body.html").toString().replace(/MAPPING/g, mapping).replace(/lliieenn/g, "https://"+fs.readFileSync(__dirname + "/auth/" + "lien.txt").toString()) +
`<div style='z-index:10; position:absolute; width   : 100px; height  : 100px;' onclick='function youaish() {
	
	if (document.getElementById("canvas").style.zIndex == 9) {
	document.getElementById("canvas").style.zIndex = -9;
	} else {
	document.getElementById("canvas").style.zIndex = 9;
	}
} youaish()' >Value=CHAt</div>" +
"<div style='z-index:2; position:absolute'>` +
"<h1 id='h1'>" +
userN +
"</h1><br/><input type='text' id='xv' row='15'/><div id='pourcentaa' style='top:0px; left:250px; width   : 350px; height  : 500px; position:absolute;'><div id='pourcent' style='line-height:25px; background-color:rgba(1,1,1,0); font-size: 24px;'></div></div><br/>" +
"<div style='margin:left; position:relative'>Bonjour, " +
userN +
"__</div>" +
"<input type='button' value='Chat send' id='selection'/>" +
"</div>" +
"</div>" +
"</body>" +
"</html>");
res.write(html);
res.end();

}

}






		});

})


Routerer.get('/' + inscription, function (req, res) {
res.set({ 'content-type': 'text/javascript; charset=utf-8' });
res.write(fL.PageInscription().replace("LINKinscription", 'https://'+ipLOGey + port + '/' + Accueil));
res.end();

}).post('/' + Accueil, function (req, res, next) { if (req.get("referrer") == ("https://"+ipLOGey+ port + "/")) {
	next();
	} else {
res.write("<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'></head><body><a id='pow' href='https://"+ipLOGey+ port + '/' + "'>Annulation de la connexion</a><script>document.getElementById('pow').click();</script></body></html>");
	res.end();
	} }, function (req, res, next) {






var PoignetDePorte = false;

var pourcentage;
var Namae;

req.setEncoding("utf8");
        req.addListener("data", function(postDataChunk) {
            
          
if (PoignetDePorte == false) {

Namae = querystring.parse(postDataChunk).name;
pourcentage = sha1(querystring.parse(postDataChunk).password);
var tesssk = querystring.parse(postDataChunk).pages;
writeResis(tesssk, valueOF);

PoignetDePorte = true;

}





function writeResis(Pge, lili) {

if (PoignetDePorte == false) {
res.set({ 'content-type': 'text/html; charset=utf-8' });
var One;
if (authent) {
One = Cty.authCty(Namae, pourcentage);
} else {
One = Cty.coCty(Namae, pourcentage, lili);
}
quedal();
function quedal() {
if (One != "Quedal") {
	
	res.write(One);

res.end();
} else if (One == "Quedal") {
	
	One = Cty.authCty(Namae, pourcentage);
	
	
	
	
	
	

res.write("<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'></head><body><a href='https://"+ipLOGey+ port + "/'>OK</a><a id='pow' href='https://"+ipLOGey+ port + '/' + "'>OK</a><script>document.getElementById('pow').click();</script></body></html>");
res.end();



}

}

}
}




		});









});


},


}

function sha1( data ) {
     var generator = crypto.createHash('sha1');
     generator.update( data )  ;
     return generator.digest('hex') ;
};
function sha256( data ) {
     var generator = crypto.createHash('sha256');
     generator.update( data )  ;
     return generator.digest('hex') ;
};







          