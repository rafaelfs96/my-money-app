const express = require('express')

module.exports = function(server) {
  //* URL Base for api routes
  const router = express.Router()
  server.use('/api', router)

  //* Registering Routes
  const billingCycleService = require('../api/billingCycle/BillingCycleService')
  billingCycleService.register(router, '/billing')
}
