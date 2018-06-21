const express = require('express')
const app = express()
const bcrypt = require('bcrypt-nodejs')
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'))



// global.hash = bcrypt.hash("talkstoofast1", null, null, function(err, hash) {
//     console.log(hash);
// });


app.post('/signin', (req, res) => {
  var a = JSON.parse(req.body);
  const passwordStatus = () => bcrypt.compare(a.password, '$2a$10$Ud9Pv/DLjabnQ7uMlUvQDOhC9ICphcH.BNjVFMQchQDh6hCyj8HFW', function(err, res) {
    console.log('first guess', res)
    return res;
 });
 if (passwordStatus === true) {
     res.json('success');
 } else {
     res.status(400).json('error logging in');
 }
})



app.listen(3000, () => console.log('App listening on port 3000!'))