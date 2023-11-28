require('dotenv').config();
const { CommonClient } = require('@dozerjs/node');

const client = new CommonClient({
  authToken: process.env.MASTER_TOKEN,
});

client.getFields('produce')
  .then((fields) => {
    console.log('produce:', JSON.stringify(fields));
  })
  .catch((error) => {
    console.error(error);
  });

client.getFields('stock')
  .then((fields) => {
    console.log('stock:', JSON.stringify(fields));
  })
  .catch((error) => {
    console.error(error);
  });

