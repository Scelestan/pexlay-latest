const http = require('http');
const express = require('express');
var apps = express();

const Routerers = require('./Authentificator/routeOfLog.js');
const logSock = require('./Authentificator/logSock.js');


process.on('uncaughtException', function (err) {
 console.log(err);
 //process.exit(1);
});
Routerers.addStaff();
//Routerers.LoadLog_(":4321", "", "done", true, 1);
Routerers.LoadLog_(":4321", "connexion", "staff", false, 0);
apps.use(Routerers.SlaSh_(":4321", "", "connexion", "/staff"));

Routerers.createGET_("/", "/auth/singlePage/userPage.html");
Routerers.createGET_("/logo", "/logo.png");
Routerers.createGET_("/favicon.ico", "/favicon.ico");
apps.use(Routerers.useRoute());
logSock.Init__Socklog();

http.createServer(apps, function (req, res) {
}).listen(8080, "127.0.0.1", function(e) {
	console.log("server listen");
});





          
