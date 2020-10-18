const express = require('express')
const auth = require('./auth')

module.exports = function(server) {
  //* Protected Api
  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  protectedApi.use(auth)

  const billingCycleService = require('../api/billingCycle/BillingCycleService')
  billingCycleService.register(protectedApi, '/billing')


  //* Open Api
  const openApi = express.Router()
  server.use('/oapi', openApi)

  const { login, signup, validateToken } = require('../api/user/authService')
  openApi.post('/login', login)
  openApi.post('/signup', signup)
  openApi.post('/validateToken', validateToken)
}
