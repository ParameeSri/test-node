/* โหลด express มาใช้งาน */
const app = require('express')()
const bodyParser = require('body-parser')

/* data-test */
const users = require('./data-test/users')

var port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

/* routing */
app.get('/', (req, res) => {
  res.send(`<h1>Secret...</h1>
  <body>
    <a href="http://localhost:4000/restart?name=chantakan">จันทกานต์ พระชัย restart</a>
    <br/>
    <br/>
    <a href="http://localhost:4000/restart?name=todsaporn">ทศพร มณีรัตน์ restart</a>
    <br/>
    <br/>
    <a href="http://localhost:4000/restart?name=jirapa">จิราภา ฉิมอ่วม restart</a>
    <br/>
    <br/>
    <a href="http://localhost:4000/restart?name=tinakorn">ทินกร ปงคำลือ restart</a>
    <br/>
    <br/>
    <a href="http://localhost:4000/restart?name=kanuengnich">คนึงนิจ สมศรี restart</a>
  </body>
  `)
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

app.get('/restart', async(req, res) => {
  // let id = req.params.id
  const rest = await restartApp(req.query.name)
  res.json({ stutus: true, message: 'success', data: JSON.stringify(rest) })
})

async function restartApp(name) {
  console.log('name', name)
  const fetch = require('axios')
  let appId = ''
  if (name === 'chantakan') {
    appId = '8913aa65-05ca-40bf-8ddf-f1064a17c418'
  } else if (name === 'todsaporn') {
    appId = '371cb9b0-50ec-4911-9083-e5f9402ecb19'
  } else if (name === 'jirapa') {
    appId = '21322552-7dd6-48d8-b614-dc0c550ed14c'
  } else if (name === 'tinakorn') {
    appId = 'a5cd0a42-abe8-47fe-a0ee-488cf7e4090e'
  } else if (name === 'kanuengnich') {
    appId = 'ade989f0-3c69-4f80-8c94-31f1ceedffc4'
  }
  // const appId = '3d854991-b6f3-4997-98b3-45d3e5241232'; // Replace with your app's ID
  const authToken = 'dop_v1_23d02edf1b43cae992daf45588507307b217e4889fd2da3f872089853b9e3168'; // Replace with your DigitalOcean API token

  const restartUrl = `https://api.digitalocean.com/v2/apps/${appId}/deployments`;
  
  const response = await fetch(restartUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ force_build: false }), // Set force_build to true if you want to rebuild on restart
  });
  
  if (response.status === 200) {
    console.log('App restart triggered successfully!');
  } else {
    // const errorData = await response && JSON.stringify(response)
    console.log('response', response)
    console.error('Failed to trigger app restart:');
  }
}

/* สั่งให้ server ทำการรัน web server ด้วย port ที่เรากำหนด */
app.listen(port, () => {
  console.log(`Starting node.js on port ${port}`)
})