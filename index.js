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

  
    var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "Orden nomero 1234";
  console.log("Sale a servicio Global");
  return res.json({
    speech: speech,
    displayText: "Carnet Asegurado",
    source: "webhook-gyt-ws"
  });
});
 
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
