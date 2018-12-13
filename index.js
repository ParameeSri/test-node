/* โหลด express มาใช้งาน */
const app = require('express')()

var port = process.env.PORT || 7000

/* routing */
app.get('/', (req, res) => {
  res.send('<h1>Hello Node.js</h1>')
})

app.get('/index', (req, res) => {
  res.send('<h1>This is index page</h1>')
})

/* สั่งให้ server ทำการรัน web server ด้วย port ที่เรากำหนด */
app.listen(port, () => {
  console.log(`Starting node.js on port ${port}`)
})