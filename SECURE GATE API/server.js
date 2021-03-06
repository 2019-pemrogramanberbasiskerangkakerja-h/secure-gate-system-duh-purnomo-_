var express = require('express'),
    app = express(),
    port = process.env.PORT || 3003,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/web');
app.use('/',routes);

app.listen(port);
console.log('Learn Node JS With Kiddy, RESTful API server started on: ' + port);
