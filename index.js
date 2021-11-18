const express = require('express');
const app = express();
const path = require('path')
const PORT =  5001

app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}

app.use(express.static('build'));

app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://192.168.0.106:8080"); 
  // res.header("Access-Control-Allow-Origin", "http://www.datazo.info");
  // res.header("Access-Control-Allow-Origin", "http://datazo.info");
  // res.header("Access-Control-Allow-Origin", "https://datazo.herokuapp.com");
  res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header("Access-Control-Allow-Origin", "https://datazo-workernode-3.herokuapp.com");
  // res.header("Access-Control-Allow-Origin", "http://192.168.0.106:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// Prueba
app.get('/hola', (req, res) => {
  var mensaje = "HOaaaLA";
  res.json(mensaje);
});




var server = app.listen(PORT, console.log("Server running at " + PORT));
