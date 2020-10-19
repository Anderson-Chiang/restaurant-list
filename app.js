const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const Restaurant = require('./models/restaurant')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const port = 3000


//Set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// Set static file
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(routes)

app.get('/search', (req, res) => {
  // console.log('req.query', req.query)
  const keyword = req.query.keyword
  Restaurant.find()
    .lean()
    .then((restaurants) => {
      return restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(keyword) ||
        restaurant.name_en.toLowerCase().includes(keyword) ||
        restaurant.category.toLowerCase().includes(keyword)
      )
    })
    .then((restaurants) => res.render('index', { restaurants, keyword }))
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
