"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/global", function(req, res) {
  console.log("inicio");
  console.log(req.body.result.parameters);
  console.log(req.body.result.parameters.email);
  
  restService.post("http://172.20.1.174:8380/gyt-api-ws/rs/public/complaints/request", function(req.body.result.parameters, res) {
    console.log(res);
  });  
  
  
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "http://portal.gyt.com.gt/gyt-api-crm-web/rs/public/crm/client/insured/carne?P_IDEPOL=1570346&P_IDEASEG=12095773&codProd=GTVG&numPol=197721&hash=44a5d4645a1caafe1f973e7a52482517";
  console.log("Sale a servicio Global");
  return res.json({
                   speech: "Queja Creada",
                   displayText: "Queja.. ",
                   followupEvent : {
                       name : "e_Pizza_Invalid",
                       data: { prompt: "I am sorry, thats not a valid pizza size"}
                    },
                    source: "from our WS"
                });
});
 
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
