const express = require('express')
const router = express.Router()
const cl = require('../modules/controller/zhenfu')

/* GET users listing. */
router.get('/customers', cl.getItems)
router.post('/customer/info', cl.addInfo)

module.exports = router;
