const express = require('express');
const app = express();
const path = require('path')
const PORT =  process.env.PORT || 5001

app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}

app.use(express.static('build'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
}); 

// Prueba
app.get('/hola', (req, res) => {
  var mensaje = "HOaaaLA";
  res.json(mensaje);
});




var server = app.listen(PORT, console.log("Server running at " + PORT));
