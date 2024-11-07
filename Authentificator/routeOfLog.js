const http = require('http');
const crypto = require('crypto');
const fs = require('fs');
const express = require('express');
const fileUpload = require('express-fileupload');
const Cty = require('./Log.js');
const fL = require('./auth/firstLog.js');
//const logSock = require('./logSock.js');

const querystring = require("querystring");

var Routerer = express.Router();

var ipLOGey2 = fL.ipcalcul();
var ipLOGey = fL.ipcalcul2();

//logSock.Init__Socklog();
Routerer.use(fileUpload({
safeFileNames: true, 
preserveExtension: 7
}));

module.exports = {

createGET_ : function (getfirst, first) {
if (!getfirst || !first) {
console.log("Create_Get error");
} else {

Routerer.get(getfirst, function (req, res) {

res.sendFile(__dirname + first, function() {

});
});

}
},
addStaff : function () {
Routerer.post('/add', function (req, res, next) {
console.log(req.files);
  if (req.get("referrer") == ("http://"+ipLOGey + ":4321/staff")) {
	  WriteRes();
  } else {
	  res.write(new Buffer.from('<!DOCTYPE html>' +
"<html>" +
"<head>" +
'<meta https-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
"<title>transf</title>" +
"</head>" +
"<body>" +
'<form action="' +
"http://localhost:4321/"+ 
'" method="get">' +
'<input type="submit" id="val" value="OK"/>'+
'</form>' +
"</body>" +
"</html>"));
res.end();
  }
function WriteRes() {
	

var tr = 0;
if (!req.files) {
    console.log('File not uploaded!');
	tr = 2;
}
if (tr != 2) {
	 var fileName = req.files.sampleFile.name;
	 var ContentNameCN = fileName.replace(/.txt/g , "");
  
 if (tr == 0) {
	 if (fs.existsSync(__dirname + '/auth/carnet/' + ContentNameCN)) {
  console.log('The path exists already.');
} else {
  fs.mkdir(__dirname + '/auth/carnet/' + ContentNameCN, (err) => {
    if (err) console.log(err);
  });
}
req.files.sampleFile.mv(__dirname + '/auth/carnet/' + ContentNameCN + '/' + fileName, function(err) {
    if (err) console.log(err);
	
	
	
	
	suite();
	
        
	});
	
function suite() {
	
	
	var parsingOK = fs.readFileSync(__dirname + '/auth/carnet/' + ContentNameCN + '/' + fileName).toString();
	
	var charge = parsingOK.split("<Chapitre>");
	for (var t = 0; t < charge.length; t++) {
		var textC = "function C() { var choice = ";
		textC += '"'+ charge[t].split("<lien>")[1] + '";'
		textC += "var texting = " + '`' + charge[t].split("<lien>")[2] + '`;';
		textC += `var ok = prog("page1-1", 1, (0.05*(texting.split("<br/>").length)));
var ajoue = ok.cadreGeometry("Cadre");
ajoue.changeCouleur("Cadre", "rgb(241,241,241)");
ajoue.plusItem("item1", 10, 100-(texting.split("<br/>").length*3), 80, -20+(texting.split("<br/>").length*3));
ajoue.changeCouleur("item1", "white"); 
ajoue.definirContour("item1", "mouse*030_rgba(50,50,50,1)_page1-1");
ajoue.changeOrdre("item1", "160");
var triag = "";
for (var a = 0; a < choice.split("*").length; a++) {
	triag += "<br/><button style='font-size: 38px; font-family: Helvetica;' onclick='suite(this, "+ '"' + choice.split("*")[a].split("#")[1] + '"' +")'>" + choice.split("*")[a].split("#")[0] + "</button>";
}
ajoue.utiliserHTML("item1", "<div style='font-size: 24px; font-family: Helvetica;' >" + texting + "</div><div style='position:fixed; bottom:0; right:50%'>" + triag + "</div>");
ok.ajouterGeometry("page1-1", ajoue.GeoString());
 var charge = ok.Activer(); 
charge.ChargerPage("DIV030", "page1-1", true, false); 
ok.autoZoom(false);
charge.autoRedimention(false, "page1");document.getElementById("DIV7").click();`
		textC += "}";
		enrrr(textC, charge[t].split("<lien>")[0]);
		

	}
	function enrrr(textC, spl) {
	fs.writeFile(__dirname + '/auth/singlePage/' + spl + '.js', new Buffer.from(textC), (err) => {
  if (err) console.log(err);
	console.log("add by staff");	
			
		});
	}
	 res.write(new Buffer.from('<!DOCTYPE html>' +
"<html>" +
"<head>" +
'<meta https-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
"<title>transf</title>" +
"</head>" +
"<body>" +
'<form action="' +
"http://localhost:4321/"+ 
'" method="get">' +
'<input type="submit" id="val" value="OK"/>'+
'</form>' +
"</body>" +
"</html>"));
res.end();
 
}
 } else {
	 res.write(new Buffer.from('<!DOCTYPE html>' +
"<html>" +
"<head>" +
'<meta https-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
"<title>transf</title>" +
"</head>" +
"<body>" +
'<form action="' +
"http://localhost:4321/"+ 
'" method="get">' +
'<input type="submit" id="val" value="Ce nom de projet existe déjà."/>'+
'</form>' +
"</body>" +
"</html>"));
res.end();
 }
} else {
	 res.write(new Buffer.from('<!DOCTYPE html>' +
"<html>" +
"<head>" +
'<meta https-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
"<title>transf</title>" +
"</head>" +
"<body>" +
'<form action="' +
"http://localhost:4321/"+ 
'" method="get">' +
'<input type="submit" id="val" value="Vous devez selectionner un fichier."/>'+
'</form>' +
"</body>" +
"</html>"));
res.end();
 }
}
	});
},
useRoute : function() {

return Routerer;

},
SlaSh_ : function(port, inscription, connexion, Accueil) {

Routerer.get(Accueil, function (req, res, next) {
res.set({ 'content-type': 'text/html; charset=utf-8' });
res.write(fL.PageLogin().replace("LINKinscription", "http://"+ipLOGey + port + "/" + inscription).replace("LINKconnexion", "http://"+ipLOGey + port + "/" + connexion));
res.end();
});
return Routerer;
},


LoadLog_ : function(port, inscription, Accueil, authent, valueOF) {

if (!valueOF) {
valueOF = 0;
console.log("authentificator creation done");
}




Routerer.get('/' + inscription, function (req, res) {
res.set({ 'content-type': 'text/javascript; charset=utf-8' });
res.write(fL.PageInscription().replace("LINKinscription", 'http://'+ipLOGey + port + '/' + Accueil));
res.end();

}).post('/' + Accueil, function (req, res, next) { if (req.get("referrer") == ("http://"+ipLOGey+ port + "/" + Accueil)) {
	next();
	} else {
res.write("<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'></head><body><a id='pow' href='http://"+ipLOGey+ port + '/' + "'>Annulation de la connexion</a><script>document.getElementById('pow').click();</script></body></html>");
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
	
	
	
	
	
	

res.write("<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'></head><body><a href='http://"+ipLOGey+ port + "/'>OK</a><a id='pow' href='http://"+ipLOGey+ port + '/' + "'>OK</a><script>document.getElementById('pow').click();</script></body></html>");
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







          