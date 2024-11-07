


process.on('SIGINT', function() {
 // socket.close();
  process.exit();
});

module.exports = {



Init__Socklog : function(socapp, socserv, zoneMap) {
	const WebSocket = require('ws');
var ipLOGey = require('./auth/firstLog.js').ipcalcul();
var expressWs = require('express-ws');
var guy = [];
var vague = 2;
var zbbs = "";
var poszbbs = "";
var posIA = [];
var IApos = 1;
var bouclezomb;
const socket = new WebSocket.Server({
    server: socserv,
	path: '/' + zoneMap
});
//expressWs(socapp, socserv);
//socapp.ws('/', function(socket, reqz) {
console.log(socket);
var exo2 = 0;
function envSockAll (IDENT) {
	
socket.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {

        

var variable = IDENT;
client.send(variable);





      

} 

	  });

}
function envSockOne(IDENT, ws) {
	if (!ws) { ws = 0;};
socket.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
if (ws == 0 && client == ws) {
var variable = IDENT;
client.send(variable);
} else
        if (client == ws) {

var variable = IDENT;
client.send(variable);
}




      

} 

	  });

}
function SocklogParseXMLAll (guguu) {
var exo = Number(guy.length);
var latBG = '<?xml version="1.0" encoding="iso-8859-1"?>' +
'<carnet>';
   
//console.log(exo + "EXO");

for (var o = 0; o <= Number(guy.length)-1; o++) {
var IDENT2 = o;
if ("Disconnect" == guy[IDENT2][0][3]) {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[o][0][2] + 
'</Xavier>' +
'<Yvan>' + 
"Disconnect" + 
'</Yvan>' +
'<Volant>' + 
guy[o][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';

//console.log("Disconnect =");


} else if ("Connect" == guy[IDENT2][0][2]) {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[IDENT2][0][2] + 
'</Xavier>' +
'<Yvan>' + 
guy[IDENT2][0][3] + 
'</Yvan>' +
'<Volant>' + 
muraille.toString() + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';
if (guy[IDENT2][0][2] == "Connect") {
guy[o][0][2] = "1";
}
//console.log("connect =");

} else if ("Adjyru" == guy[IDENT2][0][3]) {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[o][0][2] + 
'</Xavier>' +
'<Yvan>' + 
"refresh" + 
'</Yvan>' +
'<Volant>' + 
guy[o][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';
guy[IDENT2][0][3] = "refresh";
//console.log("refresh =");

} else if (guy[IDENT2][0][2] != guy[IDENT2][0][3]) {
	
if (guy[IDENT2][0][3] == "Adjyru" || guy[IDENT2][0][3] == "refresh") {
guy[IDENT2][0][3] = "1";
}

latBG += '<personne id="' + 
guy[IDENT2][0][1] + 
'">' +
        '<nom>' + 
guy[IDENT2][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[IDENT2][0][2] + 
'</Xavier>' +
'<Yvan>' + 
guy[IDENT2][0][3] + 
'</Yvan>' +
'<Volant>' + 
guy[IDENT2][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[IDENT2][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[IDENT2][0][6] + 
'</PosY>' +
    	'</personne>';
		if (guy[IDENT2][0][2] == 'z' || guy[IDENT2][0][2] == 'q' || guy[IDENT2][0][2] == 's' || guy[IDENT2][0][2] == 'd' || guy[IDENT2][0][2] == 'none' || guy[IDENT2][0][2] == 'ce' || guy[IDENT2][0][2] == 'cec' || guy[IDENT2][0][2] == 'ccecL') {
			guy[IDENT2][0][2] = "zqsd";
		}


//console.log(" =");

} else {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] + 
'</nom>' +
	'<Xavier>' + 
guy[o][0][2] + 
'</Xavier>' +
'<Yvan>' + 
guy[o][0][3] + 
'</Yvan>' +
'<Volant>' + 
guy[o][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';
		if (guy[IDENT2][0][2] == 'z' || guy[IDENT2][0][2] == 'q' || guy[IDENT2][0][2] == 's' || guy[IDENT2][0][2] == 'd' || guy[IDENT2][0][2] == 'none' || guy[IDENT2][0][2] == 'ce' || guy[IDENT2][0][2] == 'cec' || guy[IDENT2][0][2] == 'ccecL') {
			guy[IDENT2][0][2] = "zqsd";
		}
		
 //console.log(String(o));
if (o == Number(exo-1)) {


}
}
}
latBG += '</carnet>';

return(latBG);

}
function SocklogParseXML(gugu, Me) {
var exo = Number(guy.length);
var latBG = '<?xml version="1.0" encoding="iso-8859-1"?>' +
'<carnet>';
   
//console.log(exo + "EXO");

var o = gugu;
var IDENT2 = o;
if ("Disconnect" == guy[IDENT2][0][3]) {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[o][0][2] + 
'</Xavier>' +
'<Yvan>' + 
"Disconnect" + 
'</Yvan>' +
'<Volant>' + 
guy[o][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';

//console.log("Disconnect =");

} else if ("Connect" == guy[IDENT2][0][2]) {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[IDENT2][0][2] + 
'</Xavier>' +
'<Yvan>' + 
guy[IDENT2][0][3] + 
'</Yvan>' +
'<Volant>' + 
muraille.toString() + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';
if (guy[IDENT2][0][2] == "Connect") {
guy[o][0][2] = "1";
}
//console.log("connect =");

} else if (!gugu || Number(gugu) == o) {
	if ("Adjyru" == guy[IDENT2][0][3]) {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[o][0][2] + 
'</Xavier>' +
'<Yvan>' + 
"refresh" + 
'</Yvan>' +
'<Volant>' + 
guy[o][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';
guy[IDENT2][0][3] = "refresh";
//console.log("refresh =");

} else if (guy[IDENT2][0][2] != guy[IDENT2][0][3] && (!Me || Me == 0)) {
	if (guy[IDENT2][0][2] == 'muraille') {
		muraille[Number(guy[IDENT2][0][3].split("*")[0])][Number(guy[IDENT2][0][3].split("*")[1])] = guy[IDENT2][0][4];
	}
if (guy[IDENT2][0][3] == "Adjyru" || guy[IDENT2][0][3] == "refresh") {
guy[IDENT2][0][3] = "1";
}

latBG += '<personne id="' + 
guy[IDENT2][0][1] + 
'">' +
        '<nom>' + 
guy[IDENT2][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[IDENT2][0][2] + 
'</Xavier>' +
'<Yvan>' + 
guy[IDENT2][0][3] + 
'</Yvan>' +
'<Volant>' + 
guy[IDENT2][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[IDENT2][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[IDENT2][0][6] + 
'</PosY>' +
    	'</personne>';
		if (guy[IDENT2][0][2] == 'muraille' || guy[IDENT2][0][2] == 'z' || guy[IDENT2][0][2] == 'q' || guy[IDENT2][0][2] == 's' || guy[IDENT2][0][2] == 'd' || guy[IDENT2][0][2] == 'none' || guy[IDENT2][0][2] == 'ce' || guy[IDENT2][0][2] == 'cec' || guy[IDENT2][0][2] == 'ccecL') {
			guy[IDENT2][0][2] = "zqsd";
			guy[o][0][4] = "false";
		}


//console.log(" =");

} else {

latBG += '<personne id="' + 
guy[o][Me][1] + 
'">' +
        '<nom>' + 
guy[o][Me][0] + 
'</nom>' +
	'<Xavier>' + 
guy[o][Me][2] + 
'</Xavier>' +
'<Yvan>' + 
guy[o][Me][3] + 
'</Yvan>' +
'<Volant>' + 
guy[o][Me][4] + 
'</Volant>' +
'<PosX>' + 
guy[o][Me][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][Me][6] + 
'</PosY>' +
    	'</personne>';
		if (guy[IDENT2][Me][2] == 'z' || guy[IDENT2][Me][2] == 'q' || guy[IDENT2][Me][2] == 's' || guy[IDENT2][Me][2] == 'd' || guy[IDENT2][Me][2] == 'none' || guy[IDENT2][Me][2] == 'ce' || guy[IDENT2][Me][2] == 'cec' || guy[IDENT2][Me][2] == 'ccecL') {
			guy[IDENT2][Me][2] = "zqsd";
			guy[o][Me][4] = "false";
		}
		
 //console.log(String(o));
if (o == Number(exo-1)) {


}
}
}

latBG += '</carnet>';

return(latBG);

}
var acttio = 20;
function moveZombies() {
	
var posalea = IApos;
acttio += 1;
if (acttio > 20) {
	acttio = 0;
posalea = Number(Math.random()*240)-180;
}
//IApos = posalea;
clearInterval(bouclezomb);

var bouclezomb2 = setInterval(moveZombies2, 100);

function moveZombies2() {
	clearInterval(bouclezomb2);
	if ((guy.length > 0)) {
	moveZombies();
	}
}
var oomp = poszbbs;
	poszbbs = "";
	var TTuuTT = "Alive";
	var ltut = 0;
for (var o = 0; o < vague*10; o ++) {
	var posimgX10 = false;
		var posimgY10 = false;
		var posimgX01 = false;
		var posimgY01 = false;
		if (oomp.split("*")[o] != "dead" && zombiez[o] != "dead" && (!Number(oomp.split("*")[o].split("_")[0]) || !Number(oomp.split("*")[o].split("_")[1]))) {
			if (o != 0) {
		poszbbs += "*"+(22*32).toString()+"_"+(26*32).toString();
	
	} else {
		poszbbs += (22*32).toString()+"_"+(26*32).toString();
		
	}
			
		} else if (zombiez[o] == "alive") {
		var Rotations = IApos*Number(zbbs.split("_")[o]);
		
			
			var mathPosPersoX = Math.round((((Number(oomp.split("*")[o].split("_")[0])+(8.33*(Math.sin(2*Math.PI*(IApos*Number(zbbs.split("_")[o])))))))-24)/32);
						var mathPosPersoY = Math.round((((Number(oomp.split("*")[o].split("_")[1])+(8.33*(Math.cos(2*Math.PI*(IApos*Number(zbbs.split("_")[o])))))))-24)/32);
						
						if (Number(muraille[(mathPosPersoX)][(mathPosPersoY)]) <= 8 && Number(muraille[(mathPosPersoX)][(mathPosPersoY)]) >= -1) {
							posimgY10 = true;
							posimgY01 = true;
						} else {
							posimgY10 = false;
							posimgY01 = false;
						}
						
						if (Number(muraille[(mathPosPersoX)][(mathPosPersoY)]) <= 8 && Number(muraille[(mathPosPersoX)][(mathPosPersoY)]) >= -1) {
							posimgX01 = true;
							posimgX10 = true;
						} else {
							posimgX01 = false;
							posimgX10 = false;
						}
						
					
			 var IAposo = 0;
		var IAposo2 = 0;
            if ((((Rotations <= 90 && Rotations >= 0) || (Rotations >= -270 && Rotations <= -180)) && posimgX01) || ((Rotations >= -180 && Rotations <= 0) && posimgX10)) {
				IAposo = (8.33*(Math.sin(2*Math.PI*(IApos*Number(zbbs.split("_")[o])))));
			}
			if (((Rotations >= -270 && Rotations <= -90) && posimgY10) || ((Rotations >= -90 && Rotations <= 90) && posimgY01)) {
			IAposo2 = (8.33*(Math.cos(2*Math.PI*(IApos*Number(zbbs.split("_")[o])))));
			}
		
				
	if (o != 0) {
		poszbbs += "*"+Math.trunc(Number(oomp.split("*")[o].split("_")[0])+IAposo).toString()+"_"+Math.trunc(Number(oomp.split("*")[o].split("_")[1])+IAposo2).toString();
	
	} else {
		poszbbs += Math.trunc(Number(oomp.split("*")[o].split("_")[0])+IAposo).toString()+"_"+Math.trunc(Number(oomp.split("*")[o].split("_")[1])+IAposo2).toString();
		
	}
} else {
	//console.log(o);
	ltut += 1;
	if (o != 0) {
		poszbbs += "*dead";
	
	} else {
		poszbbs += "dead";
		
	}
	
}
}



var tut = '<?xml version="1.0" encoding="iso-8859-1"?>' +
'<carnet>';


tut += '<personne id="' + 
"-1" + 
'">' +
        '<nom>' + 
"zombies" +  
'</nom>' +
	'<option>' + 
posalea.toString() + 
'</option>' +
'<numm>' + 
poszbbs +
'</numm>' +
'<bool>' + 
"2" +
'</bool>' +
    	'</personne>';
		
 
	tut += '</carnet>';

//clearInterval(UNO);
IApos = posalea;
if (ltut == vague*10) { 
TTuuTT = "Alldeads";

}
if ((guy.length > 0) && TTuuTT == "Alive") {
	//console.log(tut);
	  envSockAll(tut);
	

} else if (TTuuTT == "Alldeads") {
	vague += 1;
 zombiez = [];
var zzo = "";
	poszbbs = "";
for (var o = 0; o < vague*10; o ++) {
	var omz = Math.random()*1.3+0.8;
	
	if (o != 0) {
		poszbbs += "*"+(22*32).toString()+"_"+(26*32).toString();
	zzo += "_" + omz.toString();
	zombiez.push("alive");
	} else {
		poszbbs += (22*32).toString()+"_"+(26*32).toString();
		zzo += omz.toString();
		zombiez.push("alive");
	}
}
zbbs = zzo;
//console.log("zombies");
tut = '<?xml version="1.0" encoding="iso-8859-1"?>' +
'<carnet>';


tut += '<personne id="' + 
"-1" + 
'">' +
        '<nom>' + 
"zombies" +  
'</nom>' +
	'<option>' + 
zbbs + 
'</option>' +
'<numm>' + 
poszbbs +
'</numm>' +
'<bool>' + 
"-" +
(vague).toString() + 
'</bool>' +
    	'</personne>';
		
 
	tut += '</carnet>';
	
	envSockAll(tut);
//bouclezomb = setInterval(moveZombies, 5050);
}
 }
function unefois(tuty, Met) {



//clearInterval(UNO);
//clearInterval(zaap);
if ((guy.length > 0)) {
	if (tuty == "All") {
		envSockAll(SocklogParseXMLAll(tuty));
	} else {
	  envSockAll(SocklogParseXML(tuty, Met));
	}

}

 }
 function sendzombies(wsss) {

var tut = '<?xml version="1.0" encoding="iso-8859-1"?>' +
'<carnet>';


tut += '<personne id="' + 
"-1" + 
'">' +
        '<nom>' + 
"zombies" +  
'</nom>' +
	'<option>' + 
zbbs + 
'</option>' +
'<numm>' + 
poszbbs +
'</numm>' +
'<bool>' + 
"-" +
(vague).toString() + 
'</bool>' +
    	'</personne>';
		
 
	tut += '</carnet>';
if ((guy.length > 0)) {
	
		envSockOne(tut, wsss);
	

}

 }
 var boolUno = false;
var UNO; 

	socket.on('error', function ws (error)  {
console.log(error.toString());
});
	
function fonstriasme(i) {


//var puis = guy.length;
/*
do {
puis -= 1;*/
/*
for (var puis = 0; puis <= Number(guy.length)-1; puis++) {
if (puis != Number(i)) {

} else {
*/
//guy[Number(guy.length-1)][0][1] = guy[puis][0][1];
GUY[guy[Number(i)][0][0]] = undefined;
guy[Number(i)] = guy[Number(guy.length-1)];
//guy[puis][0][1] = puis;
//guy[Number(guy.length-1)] = ["null","disconnect","disconnect","disconnect","null","null"];
if (guy.length > 1 && Number(i) != Number(guy.length-1)) {
GUY[guy[Number(i)][0][0]] = Number(i);
}
guy.pop();



//guy.length -= 1;
//identi -= 1;
//envSockAll(SocklogParseXML());



console.log("guy.L-1/disconnect by id :" + Number(i).toString());
//}
//}
/*
}
} while(0<=puis);
*/
};

function GUY(id, item) {
  GUY[item] = id;
}
var identi = 1;
socket.on('connection', function(ws, wss) {
	
  var domain = wss.headers.origin;
  //console.log(domain);
  
  if (domain != "") {

var IDENT = identi;
identi += 1;

ws.on('close', function(client) {
if (guy.length > 0) {
	
for (var totoo = 0; totoo < guy.length; totoo ++) {
if (guy[totoo][0][1] == IDENT) {
//console.log(String(totoo) + " : Close");
guy[totoo][0][3] = "Disconnect";
envSockAll(SocklogParseXMLAll(totoo));
fonstriasme(totoo);
break;
}
}
}
});


  ws.on('message', message => {
    console.log(`Received message => ${message}`);
         
   function lLsock() {
		
		
if (boolUno == false) {
	
	boolUno = true;
	
 
 var exo3 = 0;
      var perso = message.toString().split("/");    

var Character = perso;
var meta = Number(Character[0].split("%")[1]);
Character[0] = Character[0].split("%")[0];

	 if (!GUY[Character[0].toString()]) {
			exo2 = 0;
			
		} else {
exo2 = GUY[Character[0].toString()];
		}
	
	
if (guy.length == 0) {
	Maps();
	var zzo = "";
	poszbbs = "";
for (var o = 0; o < vague*10; o ++) {
	var omz = Math.random()*1.2+0.91;
	
	if (o != 0) {
		poszbbs += "*"+(22*32).toString()+"_"+(26*32).toString();
	zzo += "_" + omz.toString();
	zombiez.push("alive");
	} else {
		poszbbs += (22*32).toString()+"_"+(26*32).toString();
		zzo += omz.toString();
		zombiez.push("alive");
	}
}
zbbs = zzo;
//console.log("zombies");
bouclezomb = setInterval(moveZombies, 5050);
}
if (Character[3] == "Open") {
	
Init__Socklog(socapp, socserv, Character[4]);
fs.writeFile((__dirname + '/Wsocket') + ('.txt'), new Buffer.from((Math.random()*9999999).toString()), (err) => {
  if (err) console.log(err);
	console.log("one+");
  });
Character[1] = guy[GUY[Character[0].toString()]][0][1];
guy[GUY[Character[0].toString()]][meta] = Character;



exo2 = 0;
} else if (Character[3] == "Disconnect") {
	
if (guy.length > 0) {
	
for (var totoo = 0; totoo < guy.length; totoo ++) {
if (guy[totoo][0][1] == IDENT) {
//console.log(String(totoo) + " : Close");
guy[totoo][0][3] = "Disconnect";
envSockAll(SocklogParseXMLAll(totoo));
fonstriasme(totoo);
break;
}
}
}

} else if ((Character.length == 6 || Character.length == 7)) {
if (GUY[Character[0].toString()] == 0) {
		Character[1] = guy[GUY[Character[0].toString()]][0][1];
guy[GUY[Character[0].toString()]][meta] = Character;



exo2 = 0;
	} else if (!GUY[Character[0].toString()]) {
if (exo2 == 0) {
Character[1] = IDENT;
GUY(guy.length, Character[0].toString());
guy.push([Character]);
sendzombies(ws);

}
exo2 = 0;
} else {



//console.log(GUY[Character[0].toString()]);

Character[1] = guy[GUY[Character[0].toString()]][0][1];
guy[GUY[Character[0].toString()]][meta] = Character;



exo2 = 0;





}

//console.log(" name =" + String(Character[0]));
NbreJ = guy.length;
//console.log("zero = " + String(exo2));

ISS = NbreJ;
var guguss;


guguss = GUY[Character[0].toString()];



if (Character[2] == "Connect") {
	//console.log(guy);
unefois("All");
boolUno = false;
} else {
unefois(guguss, meta);
boolUno = false;
}
} else if (Character.length == 5 && Character[0].split("%")[0] == "zombies") {
	if (Character[4] == "dead") {
	console.log(Number(Character[3]));
	zombiez[Number(Character[3])] = "dead";
	}
	var latBG2 = '<?xml version="1.0" encoding="iso-8859-1"?>' +
'<carnet>';


latBG2 += '<personne id="' + 
Character[1] + 
'">' +
        '<nom>' + 
"zombies" +  
'</nom>' +
	'<option>' + 
"zzz" + 
'</option>' +
'<numm>' + 
Character[3] + 
'</numm>' +
'<bool>' + 
Character[4] + 
'</bool>' +
    	'</personne>';
	latBG2 += '</carnet>';
	
	envSockAll(latBG2);
	boolUno = false;
	
	
	
	
	
	
	}
  } else {
	  
	  console.log("false");
		 // lLsock();
	  
  }
  }
  
  
  lLsock();
});

  } else {
	  
	  ws.close();
	  
  }

  });
  
  
  /*
  function Maps() {

		var rrrhhhh = Math.round(Math.random()*30+5);
		muraille = [];
		
		var eau = -2;
		var h2o = -2;
		for (var fi=0; fi <= 51; fi++) {
			for (var ji=0; ji <= 44; ji++) {
				if ((ji == 0 || ji == 44) || (fi == 51 || fi == 0)) {
				var mapping = Math.round(Math.random()*(-6)-2);
					if (ji == 0) {
						muraille.push([]);
				muraille[fi].push(mapping.toString());
					} else {
						muraille[fi].push(mapping.toString());
					}
				
				} else {
					
				//var gotot = Math.round(Math.random()*9-2);
					
					
				
				//if (((ji >= 1 && ji <= 5) || (ji <= 43 && ji >= 38)) || ((fi <= 50 && fi >= 45) || (fi >= 1 && fi <= 5))) {
				if (ji > 0 && fi < 51 && ji < 44 && fi > 0 && (ji != rrrhhhh || fi != rrrhhhh)) {
				var gototo = Math.round(Math.random()*9-1);
				if (gototo == 1) {
					muraille[fi].push(Math.round(Math.random()*-6-2).toString());
				} else if (gototo == -1 || gototo == 0) {
					
					muraille[fi].push(Math.round(Math.random()*6+2).toString());
				} else {
					muraille[fi].push(gototo.toString());
				}
				
				} else {
					if (ji == rrrhhhh && fi == rrrhhhh) {
						muraille[fi].push("1");
					} else {
						
					muraille[fi].push("-1");
					}
				}
			}
		}
		}
		
		 }
  
  
  
  
  
  
}




};
var muraille = [];
*/

  function Maps() {

		
		muraille = [];
		
		var eau = -2;
		var h2o = -2;
		for (var fi=0; fi <= 51; fi++) {
			for (var ji=0; ji <= 44; ji++) {
				if ((ji == 0 || ji == 44) || (fi == 51 || fi == 0)) {
				var mapping = Math.round(Math.random()*(-5)-3);
					if (ji == 0) {
						muraille.push([]);
				muraille[fi].push(mapping.toString());
					} else {
						muraille[fi].push(mapping.toString());
					}
				
				} else {
					
				//var gotot = Math.round(Math.random()*9-2);
					
					/*
					if (eau == fi-1 || h2o == ji-1) {
						gotot = Math.round(Math.random()*5)+2;
						if (gotot > 4) {
						if (eau == -2) {
							h2o = -2;
						} else {
							eau = -2;
						}
					}
					}
				if (gotot == 2) {
					gotot = Math.round(Math.random()*81);
				}if ((gotot < -2) && eau == -2) {
					eau = fi;
					h2o = ji;
				}
				*/
				
				if (((ji >= 1 && ji <= 5) || (ji <= 43 && ji >= 38)) || ((fi <= 50 && fi >= 45) || (fi >= 1 && fi <= 5))) {
				
				var gototo = Math.round(Math.random()*4+4);
				if (gototo <= 2) {
					muraille[fi].push(Math.round(Math.random()*-5-3).toString());
				} else if (gototo == -1 || gototo == 0) {
					
					muraille[fi].push(Math.round(Math.random()*6+2).toString());
				} else {
					muraille[fi].push(gototo.toString());
				}
				
				} else {
					
					muraille[fi].push("-1");
					
				}
			}
		}
		}
		
						muraille[Math.round(Math.random()*31+10)][Math.round(Math.random()*24+10)] = "0";
					
						
		 }
  
  
  var muraille = [];

var zombiez = [];
  
  
//});
}




};
function Init__Socklog(socapp, socserv, zoneMap) {
	const WebSocket = require('ws');
var ipLOGey = require('./auth/firstLog.js').ipcalcul();
var expressWs = require('express-ws');
var guy = [];
var vague = 2;
var zbbs = "";
var poszbbs = "";
var posIA = [];
var IApos = 1;
var bouclezomb;
const socket = new WebSocket.Server({
    server: socserv,
	path: '/' + zoneMap
});
//expressWs(socapp, socserv);
//socapp.ws('/', function(socket, reqz) {
console.log(socket);
var exo2 = 0;
function envSockAll (IDENT) {
	
socket.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {

        

var variable = IDENT;
client.send(variable);





      

} 

	  });

}
function envSockOne(IDENT, ws) {
	if (!ws) { ws = 0;};
socket.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
if (ws == 0 && client == ws) {
var variable = IDENT;
client.send(variable);
} else
        if (client == ws) {

var variable = IDENT;
client.send(variable);
}




      

} 

	  });

}
function SocklogParseXMLAll (guguu) {
var exo = Number(guy.length);
var latBG = '<?xml version="1.0" encoding="iso-8859-1"?>' +
'<carnet>';
   
//console.log(exo + "EXO");

for (var o = 0; o <= Number(guy.length)-1; o++) {
var IDENT2 = o;
if ("Disconnect" == guy[IDENT2][0][3]) {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[o][0][2] + 
'</Xavier>' +
'<Yvan>' + 
"Disconnect" + 
'</Yvan>' +
'<Volant>' + 
guy[o][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';

//console.log("Disconnect =");


} else if ("Connect" == guy[IDENT2][0][2]) {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[IDENT2][0][2] + 
'</Xavier>' +
'<Yvan>' + 
guy[IDENT2][0][3] + 
'</Yvan>' +
'<Volant>' + 
muraille.toString() + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';
if (guy[IDENT2][0][2] == "Connect") {
guy[o][0][2] = "1";
}
//console.log("connect =");

} else if ("Adjyru" == guy[IDENT2][0][3]) {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[o][0][2] + 
'</Xavier>' +
'<Yvan>' + 
"refresh" + 
'</Yvan>' +
'<Volant>' + 
guy[o][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';
guy[IDENT2][0][3] = "refresh";
//console.log("refresh =");

} else if (guy[IDENT2][0][2] != guy[IDENT2][0][3]) {
	
if (guy[IDENT2][0][3] == "Adjyru" || guy[IDENT2][0][3] == "refresh") {
guy[IDENT2][0][3] = "1";
}

latBG += '<personne id="' + 
guy[IDENT2][0][1] + 
'">' +
        '<nom>' + 
guy[IDENT2][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[IDENT2][0][2] + 
'</Xavier>' +
'<Yvan>' + 
guy[IDENT2][0][3] + 
'</Yvan>' +
'<Volant>' + 
guy[IDENT2][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[IDENT2][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[IDENT2][0][6] + 
'</PosY>' +
    	'</personne>';
		if (guy[IDENT2][0][2] == 'z' || guy[IDENT2][0][2] == 'q' || guy[IDENT2][0][2] == 's' || guy[IDENT2][0][2] == 'd' || guy[IDENT2][0][2] == 'none' || guy[IDENT2][0][2] == 'ce' || guy[IDENT2][0][2] == 'cec' || guy[IDENT2][0][2] == 'ccecL') {
			guy[IDENT2][0][2] = "zqsd";
		}


//console.log(" =");

} else {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] + 
'</nom>' +
	'<Xavier>' + 
guy[o][0][2] + 
'</Xavier>' +
'<Yvan>' + 
guy[o][0][3] + 
'</Yvan>' +
'<Volant>' + 
guy[o][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';
		if (guy[IDENT2][0][2] == 'z' || guy[IDENT2][0][2] == 'q' || guy[IDENT2][0][2] == 's' || guy[IDENT2][0][2] == 'd' || guy[IDENT2][0][2] == 'none' || guy[IDENT2][0][2] == 'ce' || guy[IDENT2][0][2] == 'cec' || guy[IDENT2][0][2] == 'ccecL') {
			guy[IDENT2][0][2] = "zqsd";
		}
		
 //console.log(String(o));
if (o == Number(exo-1)) {


}
}
}
latBG += '</carnet>';

return(latBG);

}
function SocklogParseXML(gugu, Me) {
var exo = Number(guy.length);
var latBG = '<?xml version="1.0" encoding="iso-8859-1"?>' +
'<carnet>';
   
//console.log(exo + "EXO");

var o = gugu;
var IDENT2 = o;
if ("Disconnect" == guy[IDENT2][0][3]) {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[o][0][2] + 
'</Xavier>' +
'<Yvan>' + 
"Disconnect" + 
'</Yvan>' +
'<Volant>' + 
guy[o][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';

//console.log("Disconnect =");

} else if ("Connect" == guy[IDENT2][0][2]) {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[IDENT2][0][2] + 
'</Xavier>' +
'<Yvan>' + 
guy[IDENT2][0][3] + 
'</Yvan>' +
'<Volant>' + 
muraille.toString() + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';
if (guy[IDENT2][0][2] == "Connect") {
guy[o][0][2] = "1";
}
//console.log("connect =");

} else if (!gugu || Number(gugu) == o) {
	if ("Adjyru" == guy[IDENT2][0][3]) {

latBG += '<personne id="' + 
guy[o][0][1] + 
'">' +
        '<nom>' + 
guy[o][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[o][0][2] + 
'</Xavier>' +
'<Yvan>' + 
"refresh" + 
'</Yvan>' +
'<Volant>' + 
guy[o][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[o][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][0][6] + 
'</PosY>' +
    	'</personne>';
guy[IDENT2][0][3] = "refresh";
//console.log("refresh =");

} else if (guy[IDENT2][0][2] != guy[IDENT2][0][3] && (!Me || Me == 0)) {
	if (guy[IDENT2][0][2] == 'muraille') {
		muraille[Number(guy[IDENT2][0][3].split("*")[0])][Number(guy[IDENT2][0][3].split("*")[1])] = guy[IDENT2][0][4];
	}
if (guy[IDENT2][0][3] == "Adjyru" || guy[IDENT2][0][3] == "refresh") {
guy[IDENT2][0][3] = "1";
}

latBG += '<personne id="' + 
guy[IDENT2][0][1] + 
'">' +
        '<nom>' + 
guy[IDENT2][0][0] +  
'</nom>' +
	'<Xavier>' + 
guy[IDENT2][0][2] + 
'</Xavier>' +
'<Yvan>' + 
guy[IDENT2][0][3] + 
'</Yvan>' +
'<Volant>' + 
guy[IDENT2][0][4] + 
'</Volant>' +
'<PosX>' + 
guy[IDENT2][0][5] + 
'</PosX>' +
'<PosY>' + 
guy[IDENT2][0][6] + 
'</PosY>' +
    	'</personne>';
		if (guy[IDENT2][0][2] == 'muraille' || guy[IDENT2][0][2] == 'z' || guy[IDENT2][0][2] == 'q' || guy[IDENT2][0][2] == 's' || guy[IDENT2][0][2] == 'd' || guy[IDENT2][0][2] == 'none' || guy[IDENT2][0][2] == 'ce' || guy[IDENT2][0][2] == 'cec' || guy[IDENT2][0][2] == 'ccecL') {
			guy[IDENT2][0][2] = "zqsd";
			guy[o][0][4] = "false";
		}


//console.log(" =");

} else {

latBG += '<personne id="' + 
guy[o][Me][1] + 
'">' +
        '<nom>' + 
guy[o][Me][0] + 
'</nom>' +
	'<Xavier>' + 
guy[o][Me][2] + 
'</Xavier>' +
'<Yvan>' + 
guy[o][Me][3] + 
'</Yvan>' +
'<Volant>' + 
guy[o][Me][4] + 
'</Volant>' +
'<PosX>' + 
guy[o][Me][5] + 
'</PosX>' +
'<PosY>' + 
guy[o][Me][6] + 
'</PosY>' +
    	'</personne>';
		if (guy[IDENT2][Me][2] == 'z' || guy[IDENT2][Me][2] == 'q' || guy[IDENT2][Me][2] == 's' || guy[IDENT2][Me][2] == 'd' || guy[IDENT2][Me][2] == 'none' || guy[IDENT2][Me][2] == 'ce' || guy[IDENT2][Me][2] == 'cec' || guy[IDENT2][Me][2] == 'ccecL') {
			guy[IDENT2][Me][2] = "zqsd";
			guy[o][Me][4] = "false";
		}
		
 //console.log(String(o));
if (o == Number(exo-1)) {


}
}
}

latBG += '</carnet>';

return(latBG);

}
var acttio = 20;
function moveZombies() {
	
var posalea = IApos;
acttio += 1;
if (acttio > 20) {
	acttio = 0;
posalea = Number(Math.random()*240)-180;
}
//IApos = posalea;
clearInterval(bouclezomb);

var bouclezomb2 = setInterval(moveZombies2, 100);

function moveZombies2() {
	clearInterval(bouclezomb2);
	if ((guy.length > 0)) {
	moveZombies();
	}
}
var oomp = poszbbs;
	poszbbs = "";
	var TTuuTT = "Alive";
	var ltut = 0;
for (var o = 0; o < vague*10; o ++) {
	var posimgX10 = false;
		var posimgY10 = false;
		var posimgX01 = false;
		var posimgY01 = false;
		if (oomp.split("*")[o] != "dead" && zombiez[o] != "dead" && (!Number(oomp.split("*")[o].split("_")[0]) || !Number(oomp.split("*")[o].split("_")[1]))) {
			if (o != 0) {
		poszbbs += "*"+(22*32).toString()+"_"+(26*32).toString();
	
	} else {
		poszbbs += (22*32).toString()+"_"+(26*32).toString();
		
	}
			
		} else if (zombiez[o] == "alive") {
		var Rotations = IApos*Number(zbbs.split("_")[o]);
		
			
			var mathPosPersoX = Math.round((((Number(oomp.split("*")[o].split("_")[0])+(8.33*(Math.sin(2*Math.PI*(IApos*Number(zbbs.split("_")[o])))))))-24)/32);
						var mathPosPersoY = Math.round((((Number(oomp.split("*")[o].split("_")[1])+(8.33*(Math.cos(2*Math.PI*(IApos*Number(zbbs.split("_")[o])))))))-24)/32);
						
						if (Number(muraille[(mathPosPersoX)][(mathPosPersoY)]) <= 8 && Number(muraille[(mathPosPersoX)][(mathPosPersoY)]) >= -1) {
							posimgY10 = true;
							posimgY01 = true;
						} else {
							posimgY10 = false;
							posimgY01 = false;
						}
						
						if (Number(muraille[(mathPosPersoX)][(mathPosPersoY)]) <= 8 && Number(muraille[(mathPosPersoX)][(mathPosPersoY)]) >= -1) {
							posimgX01 = true;
							posimgX10 = true;
						} else {
							posimgX01 = false;
							posimgX10 = false;
						}
						
					
			 var IAposo = 0;
		var IAposo2 = 0;
            if ((((Rotations <= 90 && Rotations >= 0) || (Rotations >= -270 && Rotations <= -180)) && posimgX01) || ((Rotations >= -180 && Rotations <= 0) && posimgX10)) {
				IAposo = (8.33*(Math.sin(2*Math.PI*(IApos*Number(zbbs.split("_")[o])))));
			}
			if (((Rotations >= -270 && Rotations <= -90) && posimgY10) || ((Rotations >= -90 && Rotations <= 90) && posimgY01)) {
			IAposo2 = (8.33*(Math.cos(2*Math.PI*(IApos*Number(zbbs.split("_")[o])))));
			}
		
				
	if (o != 0) {
		poszbbs += "*"+Math.trunc(Number(oomp.split("*")[o].split("_")[0])+IAposo).toString()+"_"+Math.trunc(Number(oomp.split("*")[o].split("_")[1])+IAposo2).toString();
	
	} else {
		poszbbs += Math.trunc(Number(oomp.split("*")[o].split("_")[0])+IAposo).toString()+"_"+Math.trunc(Number(oomp.split("*")[o].split("_")[1])+IAposo2).toString();
		
	}
} else {
	//console.log(o);
	ltut += 1;
	if (o != 0) {
		poszbbs += "*dead";
	
	} else {
		poszbbs += "dead";
		
	}
	
}
}



var tut = '<?xml version="1.0" encoding="iso-8859-1"?>' +
'<carnet>';


tut += '<personne id="' + 
"-1" + 
'">' +
        '<nom>' + 
"zombies" +  
'</nom>' +
	'<option>' + 
posalea.toString() + 
'</option>' +
'<numm>' + 
poszbbs +
'</numm>' +
'<bool>' + 
"2" +
'</bool>' +
    	'</personne>';
		
 
	tut += '</carnet>';

//clearInterval(UNO);
IApos = posalea;
if (ltut == vague*10) { 
TTuuTT = "Alldeads";

}
if ((guy.length > 0) && TTuuTT == "Alive") {
	//console.log(tut);
	  envSockAll(tut);
	

} else if (TTuuTT == "Alldeads") {
	vague += 1;
 zombiez = [];
var zzo = "";
	poszbbs = "";
for (var o = 0; o < vague*10; o ++) {
	var omz = Math.random()*1.3+0.8;
	
	if (o != 0) {
		poszbbs += "*"+(22*32).toString()+"_"+(26*32).toString();
	zzo += "_" + omz.toString();
	zombiez.push("alive");
	} else {
		poszbbs += (22*32).toString()+"_"+(26*32).toString();
		zzo += omz.toString();
		zombiez.push("alive");
	}
}
zbbs = zzo;
//console.log("zombies");
tut = '<?xml version="1.0" encoding="iso-8859-1"?>' +
'<carnet>';


tut += '<personne id="' + 
"-1" + 
'">' +
        '<nom>' + 
"zombies" +  
'</nom>' +
	'<option>' + 
zbbs + 
'</option>' +
'<numm>' + 
poszbbs +
'</numm>' +
'<bool>' + 
"-" +
(vague).toString() + 
'</bool>' +
    	'</personne>';
		
 
	tut += '</carnet>';
	
	envSockAll(tut);
//bouclezomb = setInterval(moveZombies, 5050);
}
 }
function unefois(tuty, Met) {



//clearInterval(UNO);
//clearInterval(zaap);
if ((guy.length > 0)) {
	if (tuty == "All") {
		envSockAll(SocklogParseXMLAll(tuty));
	} else {
	  envSockAll(SocklogParseXML(tuty, Met));
	}

}

 }
 function sendzombies(wsss) {

var tut = '<?xml version="1.0" encoding="iso-8859-1"?>' +
'<carnet>';


tut += '<personne id="' + 
"-1" + 
'">' +
        '<nom>' + 
"zombies" +  
'</nom>' +
	'<option>' + 
zbbs + 
'</option>' +
'<numm>' + 
poszbbs +
'</numm>' +
'<bool>' + 
"-" +
(vague).toString() + 
'</bool>' +
    	'</personne>';
		
 
	tut += '</carnet>';
if ((guy.length > 0)) {
	
		envSockOne(tut, wsss);
	

}

 }
 var boolUno = false;
var UNO; 

	socket.on('error', function ws (error)  {
console.log(error.toString());
});
	
function fonstriasme(i) {


//var puis = guy.length;
/*
do {
puis -= 1;*/
/*
for (var puis = 0; puis <= Number(guy.length)-1; puis++) {
if (puis != Number(i)) {

} else {
*/
//guy[Number(guy.length-1)][0][1] = guy[puis][0][1];
GUY[guy[Number(i)][0][0]] = undefined;
guy[Number(i)] = guy[Number(guy.length-1)];
//guy[puis][0][1] = puis;
//guy[Number(guy.length-1)] = ["null","disconnect","disconnect","disconnect","null","null"];
if (guy.length > 1 && Number(i) != Number(guy.length-1)) {
GUY[guy[Number(i)][0][0]] = Number(i);
}
guy.pop();



//guy.length -= 1;
//identi -= 1;
//envSockAll(SocklogParseXML());



console.log("guy.L-1/disconnect by id :" + Number(i).toString());
//}
//}
/*
}
} while(0<=puis);
*/
};

function GUY(id, item) {
  GUY[item] = id;
}
var identi = 1;
socket.on('connection', function(ws, wss) {
	
  var domain = wss.headers.origin;
  //console.log(domain);
  
  if (domain != "") {

var IDENT = identi;
identi += 1;

ws.on('close', function(client) {
if (guy.length > 0) {
	
for (var totoo = 0; totoo < guy.length; totoo ++) {
if (guy[totoo][0][1] == IDENT) {
//console.log(String(totoo) + " : Close");
guy[totoo][0][3] = "Disconnect";
envSockAll(SocklogParseXMLAll(totoo));
fonstriasme(totoo);
break;
}
}
}
});


  ws.on('message', message => {
    console.log(`Received message => ${message}`);
         
   function lLsock() {
		
		
if (boolUno == false) {
	
	boolUno = true;
	
 
 var exo3 = 0;
      var perso = message.toString().split("/");    

var Character = perso;
var meta = Number(Character[0].split("%")[1]);
Character[0] = Character[0].split("%")[0];

	 if (!GUY[Character[0].toString()]) {
			exo2 = 0;
			
		} else {
exo2 = GUY[Character[0].toString()];
		}
	
	
if (guy.length == 0) {
	Maps();
	var zzo = "";
	poszbbs = "";
for (var o = 0; o < vague*10; o ++) {
	var omz = Math.random()*1.2+0.91;
	
	if (o != 0) {
		poszbbs += "*"+(22*32).toString()+"_"+(26*32).toString();
	zzo += "_" + omz.toString();
	zombiez.push("alive");
	} else {
		poszbbs += (22*32).toString()+"_"+(26*32).toString();
		zzo += omz.toString();
		zombiez.push("alive");
	}
}
zbbs = zzo;
//console.log("zombies");
bouclezomb = setInterval(moveZombies, 5050);
}
if (Character[3] == "Open") {
	
Init__Socklog(socapp, socserv, Character[4]);
fs.writeFile((__dirname + '/Wsocket') + ('.txt'), new Buffer.from((Math.random()*9999999).toString()), (err) => {
  if (err) console.log(err);
	console.log("one+");
  });
Character[1] = guy[GUY[Character[0].toString()]][0][1];
guy[GUY[Character[0].toString()]][meta] = Character;



exo2 = 0;
} else if (Character[3] == "Disconnect") {
	
if (guy.length > 0) {
	
for (var totoo = 0; totoo < guy.length; totoo ++) {
if (guy[totoo][0][1] == IDENT) {
//console.log(String(totoo) + " : Close");
guy[totoo][0][3] = "Disconnect";
envSockAll(SocklogParseXMLAll(totoo));
fonstriasme(totoo);
break;
}
}
}

} else if ((Character.length == 6 || Character.length == 7)) {
if (GUY[Character[0].toString()] == 0) {
		Character[1] = guy[GUY[Character[0].toString()]][0][1];
guy[GUY[Character[0].toString()]][meta] = Character;



exo2 = 0;
	} else if (!GUY[Character[0].toString()]) {
if (exo2 == 0) {
Character[1] = IDENT;
GUY(guy.length, Character[0].toString());
guy.push([Character]);
sendzombies(ws);

}
exo2 = 0;
} else {



//console.log(GUY[Character[0].toString()]);

Character[1] = guy[GUY[Character[0].toString()]][0][1];
guy[GUY[Character[0].toString()]][meta] = Character;



exo2 = 0;





}

//console.log(" name =" + String(Character[0]));
NbreJ = guy.length;
//console.log("zero = " + String(exo2));

ISS = NbreJ;
var guguss;


guguss = GUY[Character[0].toString()];



if (Character[2] == "Connect") {
	//console.log(guy);
unefois("All");
boolUno = false;
} else {
unefois(guguss, meta);
boolUno = false;
}
} else if (Character.length == 5 && Character[0].split("%")[0] == "zombies") {
	if (Character[4] == "dead") {
	console.log(Number(Character[3]));
	zombiez[Number(Character[3])] = "dead";
	}
	var latBG2 = '<?xml version="1.0" encoding="iso-8859-1"?>' +
'<carnet>';


latBG2 += '<personne id="' + 
Character[1] + 
'">' +
        '<nom>' + 
"zombies" +  
'</nom>' +
	'<option>' + 
"zzz" + 
'</option>' +
'<numm>' + 
Character[3] + 
'</numm>' +
'<bool>' + 
Character[4] + 
'</bool>' +
    	'</personne>';
	latBG2 += '</carnet>';
	
	envSockAll(latBG2);
	boolUno = false;
	
	
	
	
	
	
	}
  } else {
	  
	  console.log("false");
		 // lLsock();
	  
  }
  }
  
  
  lLsock();
});

  } else {
	  
	  ws.close();
	  
  }

  });
  
  
  /*
  function Maps() {

		var rrrhhhh = Math.round(Math.random()*30+5);
		muraille = [];
		
		var eau = -2;
		var h2o = -2;
		for (var fi=0; fi <= 51; fi++) {
			for (var ji=0; ji <= 44; ji++) {
				if ((ji == 0 || ji == 44) || (fi == 51 || fi == 0)) {
				var mapping = Math.round(Math.random()*(-6)-2);
					if (ji == 0) {
						muraille.push([]);
				muraille[fi].push(mapping.toString());
					} else {
						muraille[fi].push(mapping.toString());
					}
				
				} else {
					
				//var gotot = Math.round(Math.random()*9-2);
					
					
				
				//if (((ji >= 1 && ji <= 5) || (ji <= 43 && ji >= 38)) || ((fi <= 50 && fi >= 45) || (fi >= 1 && fi <= 5))) {
				if (ji > 0 && fi < 51 && ji < 44 && fi > 0 && (ji != rrrhhhh || fi != rrrhhhh)) {
				var gototo = Math.round(Math.random()*9-1);
				if (gototo == 1) {
					muraille[fi].push(Math.round(Math.random()*-6-2).toString());
				} else if (gototo == -1 || gototo == 0) {
					
					muraille[fi].push(Math.round(Math.random()*6+2).toString());
				} else {
					muraille[fi].push(gototo.toString());
				}
				
				} else {
					if (ji == rrrhhhh && fi == rrrhhhh) {
						muraille[fi].push("1");
					} else {
						
					muraille[fi].push("-1");
					}
				}
			}
		}
		}
		
		 }
  
  
  
  
  
  
}




};
var muraille = [];
*/

  function Maps() {

		
		muraille = [];
		
		var eau = -2;
		var h2o = -2;
		for (var fi=0; fi <= 51; fi++) {
			for (var ji=0; ji <= 44; ji++) {
				if ((ji == 0 || ji == 44) || (fi == 51 || fi == 0)) {
				var mapping = Math.round(Math.random()*(-5)-3);
					if (ji == 0) {
						muraille.push([]);
				muraille[fi].push(mapping.toString());
					} else {
						muraille[fi].push(mapping.toString());
					}
				
				} else {
					
				//var gotot = Math.round(Math.random()*9-2);
					
					/*
					if (eau == fi-1 || h2o == ji-1) {
						gotot = Math.round(Math.random()*5)+2;
						if (gotot > 4) {
						if (eau == -2) {
							h2o = -2;
						} else {
							eau = -2;
						}
					}
					}
				if (gotot == 2) {
					gotot = Math.round(Math.random()*81);
				}if ((gotot < -2) && eau == -2) {
					eau = fi;
					h2o = ji;
				}
				*/
				
				if (((ji >= 1 && ji <= 5) || (ji <= 43 && ji >= 38)) || ((fi <= 50 && fi >= 45) || (fi >= 1 && fi <= 5))) {
				
				var gototo = Math.round(Math.random()*4+4);
				if (gototo <= 2) {
					muraille[fi].push(Math.round(Math.random()*-5-3).toString());
				} else if (gototo == -1 || gototo == 3) {
					
					muraille[fi].push(Math.round(-1).toString());
				} else {
					muraille[fi].push(gototo.toString());
				}
				
				} else {
					
					muraille[fi].push("-1");
					
				}
			}
		}
		}
		
						muraille[Math.round(Math.random()*31+10)][Math.round(Math.random()*24+10)] = "0";
					
						
		 }
  
  
  var muraille = [];

var zombiez = [];
  
  
//});
}

