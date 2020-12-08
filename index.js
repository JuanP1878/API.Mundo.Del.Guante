const express = require("express");
const body_parser = require("body-parser");
const misrutas = require("./rutas/rutas");
const cors = require("cors");

const app = express(); //Crea el servidor
app.use(cors());
const port = process.env.PORT || 3000;

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

app.use("/", misrutas);

app.listen(port, () => {
  console.log("Listening in port " + port);
});
