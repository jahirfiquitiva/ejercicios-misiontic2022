const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://misiontic:123misiontic456@esp-cluster.2rtyp.mongodb.net/misiontic';

mongoose.set('runValidators', true);

const db = mongoose.connect(mongoUrl, {}, (error) => {
  if (error) {
    console.log('Error conectando a mongo');
  } else {
    console.log('Conectado a mongo');
  }
});

module.exports = db;
