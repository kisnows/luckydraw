const express = require('express')
const app = express()
const router = express.Router()
const port = 81
app.use('/', function(req, res, next) {
  console.log(req.url)
  next()
})
app.use('/', router)

router.get('/api/members', (req, res) => {
  const members = require('./parseExcel.js')
  console.log(members)
  res.json(members)
})

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
