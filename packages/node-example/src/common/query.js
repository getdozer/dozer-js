const { CommonClient, Order } = require('@dozerjs/node');

const client = new CommonClient({
  authToken: process.env.MASTER_TOKEN,
});

client.query('produce', { limit: 5, orderBy: { datetime: Order.DESC } })
  .then(([_, records]) => {
    console.log('produce:', JSON.stringify(records));
  })
  .catch((error) => {
    console.error(error);
  });

client.query('stock', { limit: 5 })
  .then(([_, records]) => {
    console.log('stock:', JSON.stringify(records));
  })
  .catch((error) => {
    console.error(error);
  });

