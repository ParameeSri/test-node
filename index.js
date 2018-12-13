/* โหลด express มาใช้งาน */
const app = require('express')()
const bodyParser = require('body-parser')

/* data-test */
const users = require('./data-test/users')

var port = process.env.PORT || 7000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

/* routing */
app.get('/', (req, res) => {
  res.send('<h1>Hello Node.js</h1>')
})

app.get('/index', (req, res) => {
  res.send('<h1>This is index page</h1>')
})

/* Routing test-data */
app.get('/user', (req, res) => {
  res.json(users.findAll())
})

app.get('/user/:id', (req, res) => {
  let id = req.params.id
  res.json(users.findById(id))
})

app.post('/newuser', function (req, res) {
  let json = req.body
  console.log(' json ==> ', json.name)
  res.send(`Add new ${json.name} Completed!`)
})

/* สั่งให้ server ทำการรัน web server ด้วย port ที่เรากำหนด */
app.listen(port, () => {
  console.log(`Starting node.js on port ${port}`)
})