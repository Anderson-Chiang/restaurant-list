const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const Restaurant = require('./models/restaurant')


const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

//Set template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// Set static file
app.use(express.static('public'))

app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})


// app.get('/search', (req, res) => {
//   // console.log('req.query', req.query)
//   const keyword = req.query.keyword
//   const restaurants = restaurantList.results.filter(restaurant => {
//     return restaurant.name.toLocaleLowerCase().includes(keyword.toLowerCase())
//   })
//   res.render('index', { restaurants: restaurants, keyword: keyword })
// })

app.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`)
})
