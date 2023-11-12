const { AuthClient } = require('@dozerjs/node');

const client = new AuthClient({
  authToken: process.env.MASTER_TOKEN,
});

client.getAuthToken(JSON.stringify({
  Custom: {
    airports_count: {
      $filter: {},
    },
  }
}))
  .then((token) => {
    console.log('token:', token);
  })
  .catch((error) => {
    console.error(error);
  });
