
var ipLOGey = require('./auth/firstLog.js').ipcalcul();
const fL = require('./auth/firstLog.js');

var guy = [];
var vague = 2;
var zbbs = "";
var poszbbs = "";
var posIA = [];
var IApos = 1;
var bouclezomb;


module.exports = {



Init__Socklog : function(socapp, socserv, appsp, appspp) {
	const WebSocket = require('ws');
var ipLOGey = require('./auth/firstLog.js').ipcalcul();
var expressWs = require('express-ws');
var guy = [];

var zbbs = [];

var posIA = [];
var IApos = 1;
var bouclezomb;
const socket = new WebSocket.Server({
    server: socserv,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // See zlib defaults.
      chunkSize: 2024,
      memLevel: 7,
      level: 3
    },
    zlibInflateOptions: {
      chunkSize: 10 * 2024
    },
    // Other options settable:
    clientNoContextTakeover: true, // Defaults to negotiated value.
    serverNoContextTakeover: true, // Defaults to negotiated value.

    threshold: 2024 // Size (in bytes) below which messages
    // should not be compressed if context takeover is disabled.
  }
});


function envSockOne(IDENT, ws) {
	if (!ws) { ws = 0;};
socket.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
if (ws == 0) {
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




	socket.on('error', function ws (error)  {
console.log(error.toString());
});
	


socket.on('connection', function(ws, wss) {
	
  var domain = wss.headers.origin;
  console.log(domain);
  



ws.on('close', function(client) {

});


  ws.on('message', message => {
	  
	if (message.split("/")[1] == "") {

	} else {

    console.log(`Received message => ${message}`);
         var tut = message;
		 var turquoise = (
String(fL.slUse("/singlePage/"+tut.split("/")[1]+".js")).replace('<', '-_').replace('>', '_-')
);
    envSockOne(turquoise, ws);
	}
});



  });
  
  
 
  
  
  
  
}




};


