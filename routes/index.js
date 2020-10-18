const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const search = require('./modules/search')


router.use('/', home)
router.use('/restaurants', restaurants) //導向相關頁面
router.use('/search', search)


module.exports = router