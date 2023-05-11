const express = require('express');
const { login, dashboard } = require('../controllers/main');
const authenticationMiddleware = require('../middleware/auth');
const router = express.Router();
router.post('/login',login);
router.get('/dashboard',authenticationMiddleware,dashboard);
module.exports = router;