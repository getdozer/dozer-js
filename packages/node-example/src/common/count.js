require('dotenv');
const { CommonClient } = require('@dozerjs/node');
const client = new CommonClient({
  authToken: process.env.MASTER_TOKEN,
});

client.count('produce')
  .then((count) => {
    console.log('produce:', count);
  })
  .catch((error) => {
    console.error(error);
  });

client.count('stock')
  .then((count) => {
    console.log('count:', count);
  })
  .catch((error) => {
    console.error(error);
  });
