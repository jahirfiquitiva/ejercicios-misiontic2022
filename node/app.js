require('dotenv').config();
const chalk = require('chalk');
const express = require('express');

require('./driver/mongo-connection');

const tasksRouter = require('./routes/tasks-routes');

const port = process.env.PORT;
const app = express();

app.use(express.json());

// routes // controllers // models

app.use('/api/tasks', tasksRouter);

app.listen(port, function () {
  console.log(chalk.green(`El servidor está listo en el puerto: ${port}!`))
}) // 3000 // 0000~25000