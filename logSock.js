const WebSocket = require('ws');
var ipLOGey = require('./auth/firstLog.js').ipcalcul();
const fL = require('./auth/firstLog.js');
const socket = new WebSocket.Server({ port: 8080, host: ipLOGey});
var guy = [];
var vague = 2;
var zbbs = "";
var poszbbs = "";
var posIA = [];
var IApos = 1;
var bouclezomb;


process.on('SIGINT', function() {
  socket.close();
  process.exit();
});

module.exports = {



Init__Socklog : function() {


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


