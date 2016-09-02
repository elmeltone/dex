const express = require('express');
const app = express();

app.get('/', function(req, res) {
    var result = 'App is running'
    response.send(result);
});

const port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);
