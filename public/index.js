const express = require('express')

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('Hello User');
})

app.get('/random', function(req,res) {
    res.json({status: "ok", message: "http://localhost:3000/ferret.jpg"})
})
app.listen(3000, function() {
    console.log('the server is listening...')
})