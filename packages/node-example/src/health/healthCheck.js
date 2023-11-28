require('dotenv').config();
const { HealthClient } = require('@dozerjs/node');

const client = new HealthClient();

client.healthCheck()
  .then((status) => {
    console.log('status:', status);
  })
  .catch((error) => {
    console.error(error);
  });
