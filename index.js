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
  var speech =
    req.body.result &&
    req.body.result.parameters &&
    req.body.result.parameters.echoText
      ? req.body.result.parameters.echoText
      : "http://portal.gyt.com.gt/gyt-api-crm-web/rs/public/crm/client/insured/carne?P_IDEPOL=1570346&P_IDEASEG=12095773&codProd=GTVG&numPol=197721&hash=44a5d4645a1caafe1f973e7a52482517";
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
