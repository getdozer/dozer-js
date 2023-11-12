const { CommonClient } = require('@dozerjs/node');

const client = new CommonClient({
  authToken: process.env.MASTER_TOKEN,
});

client.getEndpoints()
  .then((endpoints) => {
    console.log('endpoint list:', JSON.stringify(endpoints));
  })
  .catch((error) => {
    console.error(error);
  });
