const http = require('https');
const fs = require('fs');
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


var server = http.createServer({ 
cert: fs.readFileSync("cert.pem"),
key: fs.readFileSync("key.pem"),
requestCert: false,
rejectUnauthorized: false },
 apps );
 
 server.listen(4321, "127.0.0.1");
 
logSock.Init__Socklog(apps, server, Routerers, "");




          
