var express = require('express');
var app = express();

var bodyParser = require('body-parser');
//app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  return a / b;
}

app.post('/soma', function (req, res) {
  console.log('Dados recebidos:', req.body); // Adicione este log para verificar os dados recebidos
  var body = req.body;
  var dado1 = body.dado1;
  var dado2 = body.dado2;
  console.log('Dado1:', dado1); // Adicione este log para verificar o valor de dado1
  console.log('Dado2:', dado2); // Adicione este log para verificar o valor de dado2

  var resultado = soma(Number(dado1), Number(dado2));
  res.send(`O resultado da soma de ${dado1} e ${dado2} é ${resultado}`);
});

app.post('/subtracao', function (req, res) {
  console.log('Dados recebidos:', req.body); // Adicione este log para verificar os dados recebidos
  var body = req.body;
  var dado1 = body.dado1;
  var dado2 = body.dado2;
  console.log('Dado1:', dado1); // Adicione este log para verificar o valor de dado1
  console.log('Dado2:', dado2); // Adicione este log para verificar o valor de dado2

  var resultado = subtracao(Number(dado1), Number(dado2));
  res.send(`O resultado da subtração de ${dado1} e ${dado2} é ${resultado}`);
});

app.post('/multiplicacao', function (req, res) {
  console.log('Dados recebidos:', req.body); // Adicione este log para verificar os dados recebidos
  var body = req.body;
  var dado1 = body.dado1;
  var dado2 = body.dado2;
  console.log('Dado1:', dado1); // Adicione este log para verificar o valor de dado1
  console.log('Dado2:', dado2); // Adicione este log para verificar o valor de dado2

  var resultado = multiplicacao(Number(dado1), Number(dado2));
  res.send(`O resultado da multiplicação de ${dado1} e ${dado2} é ${resultado}`);
});

app.post('/divisao', function (req, res) {
  console.log('Dados recebidos:', req.body); // Adicione este log para verificar os dados recebidos
  var body = req.body;
  var dado1 = body.dado1;
  var dado2 = body.dado2;
  console.log('Dado1:', dado1); // Adicione este log para verificar o valor de dado1
  console.log('Dado2:', dado2); // Adicione este log para verificar o valor de dado2

  var resultado = divisao(Number(dado1), Number(dado2));
  res.send(`O resultado da divisão de ${dado1} e ${dado2} é ${resultado}`);
});



app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log("Servidor iniciado...");
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

