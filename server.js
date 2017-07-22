// server.js
// where your node app starts

// init project
const express = require('express'),
  useragent = require('express-useragent'),
  multer  = require('multer')
const app = express(), 
      upload = multer({ dest: 'uploads/' })


// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.post('/', upload.single('upload'), (req, res) => {
  const size = req.file.size
  res.json({size})
})

// listen for requests :)
var listener = app.listen(process.env.PORT, () =>
  console.log('Your app is listening on port ' + listener.address().port)
)
