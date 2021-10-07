require('dotenv').config();
const chalk = require('chalk');
const express = require('express');

const port = process.env.PORT;
const app = express()

// post, put, delete, patch
app.get('/', function (request, response) {
  console.log(__dirname + '/public/index.html')
  response.sendFile(__dirname + '/public/index.html');
  // response.redirect(307, process.env.FRONTEND_URL)
})

app.get('/hola', function (request, response) {
  response.send(`Hola mundo`)
})

app.get('/hola/:name', function (request, response) {
  const name = request.params.name;
  response.send(`Hola ${name}`)
})

app.get('/json', function (request, response) {
  response.send({
    name: 'Jahir',
    lastName: 'Fiquitiva',
    inClass: true,
  })
})

app.get('*', function (request, response) {
  // ejecutar algo
  response.send('404 | Página no encontrada');
})

app.listen(port, function () {
  console.log(chalk.green(`El servidor está listo en el puerto: ${port}!`))
}) // 3000 // 0000~25000