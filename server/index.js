const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000

const routerApi = require('./routerApi');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//serve up static files
app.use(express.static(path.resolve(__dirname, '..', 'client/build')));


app.use( (err, req, res, next)  => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.use('/api/', routerApi);

// handle every other route with index.html, which will contain
// a script tag to our application's JavaScript file(s).
app.get('*', (request, response)  => {
  response.sendFile(path.resolve(__dirname, '..', 'client/build', 'index.html'))
});

app.listen(PORT, () => {
  console.log("on port " + PORT);
});
