const mongoose = require('mongoose');

const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbUrl = process.env.DB_URL;

const mongoUrl = `mongodb+srv://${dbUsername}:${dbPassword}@${dbUrl}/misiontic`;

mongoose.set('runValidators', true);

const db = mongoose.connect(mongoUrl, {}, (error) => {
  if (error) {
    console.log('Error conectando a mongo');
  } else {
    console.log('Conectado a mongo');
  }
});

module.exports = db;
