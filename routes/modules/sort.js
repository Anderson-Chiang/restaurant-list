const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/AtoZ', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'asc' })
    .then(restaurants => {res.render('index', { restaurants })})
    .catch(error => console.error(error))
})

router.get('/ZtoA', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'desc' })
    .then(restaurants => { res.render('index', { restaurants }) })
    .catch(error => console.error(error))
})

router.get('/category', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'asc' })
    .then(restaurants => { res.render('index', { restaurants }) })
    .catch(error => console.error(error))
})

router.get('/location', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'asc' })
    .then(restaurants => { res.render('index', { restaurants }) })
    .catch(error => console.error(error))
})

module.exports = router