const { HealthClient } = require('@dozerjs/node');

const client = new HealthClient({
  authToken: process.env.MASTER_TOKEN,
});

const stream = client.healthWatch();

stream.on('data', (status) => {
  console.log('status:', status);
});

stream.on('error', (error) => {
  console.log(error);
  stream.cancel();
});
