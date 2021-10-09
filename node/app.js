require('dotenv').config();
const chalk = require('chalk');
const express = require('express');
const cors = require('cors');

require('./driver/mongo-connection');

const tasksRouter = require('./routes/tasks-routes');

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

// routes // controllers // models

app.use('/api/tasks', tasksRouter);

app.get('*', (request, response) => {
  return response.send('Not found!');
});

app.listen(port, function () {
  console.log(chalk.green(`El servidor está listo en el puerto: ${port}!`));
}); // 3000 // 0000~25000
