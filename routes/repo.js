const express = require('express')
const router = express.Router()
const { repos, categories, numericals, links, dates, booleans } = require('../controllers/repos')
router.get('/repos', repos)
router.get('/categories', categories)
router.get('/numericals', numericals)
router.get('/links', links)
router.get('/dates', dates)
router.get('/booleans', booleans)
module.exports = router
