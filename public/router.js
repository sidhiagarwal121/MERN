const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('hello world')
})
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})
// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })
var router = express.Router();
router.get('/login', function(req, res, next) {
  res.render('login');
});
module.exports = router;
router.post("/login",(req,res)=>{
console.log("login ")
})
var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');