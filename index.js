const app = require('./src/app.js');

const APP_PORT = process.env.PORT || 4000;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(APP_PORT, () => {
  console.log(`App is listening on port ${APP_PORT}`);
});
