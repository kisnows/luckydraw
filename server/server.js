const express = require('express')
const app = express()
const router = express.Router()
const port = 80
app.use('/', router)

router.get('members', (req, res) => {
  const members = require('./parseExcel.js')
  res.json(members)
})

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
