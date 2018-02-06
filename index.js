'use strict';
var listeningport = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
const app = express();
var cont = 0;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(listeningport, function () {
  console.log('BOT listening at ...' + listeningport);
});
// **************************
// Webhook
// DGonzalez, RLara
// 01/02/2018
// ChatBot Communyty Manager V1
// **************************
app.post('/queja', (req, res) => {  
  cont ++;  
  console.log(cont);
  console.log(req.body.result.action);
  if (req.body.result.action === 'a_fetch_user_details') {
    if (req.body.result.parameters['email'] != '' ) {
      cont = 0;
      var http = require('http');
      var postData = req.body.result.parameters;
      console.log(req.body.result.parameters);
      request.post({
        uri: 'http://172.20.2.11:8080/gyt-api-ws/rs/public/complaints/request',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        json: true,
        body: postData
      }, function (error, response, body) {
        console.log(body.message);
        if (!error && response.statusCode == 200) {
          return res.json({
            speech: body.message
          });
        } else {
          return res.json({
            speech: "En este momento no es posible procesar su solicitud, intenta de nuevo"
          });
        }
      });
    }
  }
});
// **************************
