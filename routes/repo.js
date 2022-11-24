const express = require('express')
const router = express.Router()
const { repos } = require('../controllers/repos')
router.get('/repos', repos)
module.exports = router
