const express = require('express');
const bodyParser = require('body-parser');
// create express app
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/imgs', express.static('imgs'));
app.get('/inicio', function(req, res){
    res.sendFile('index.html',
    {
        root: __dirname
    });
});
app.get('/contactenos', (req, res) => {
  res.send('Hello contactenos')
});
// Require unidad routes
const unidadRoutes = require('./src/Routers/unidadrouters')
// using as middleware
app.use('/api/v1/unidad', unidadRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
