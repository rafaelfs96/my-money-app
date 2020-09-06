import React from 'react'
import { Route, Redirect, HashRouter } from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

export default props => {
  return (
    <HashRouter>
      <Route exact path='/' component={ Dashboard } />
      <Route path='/billingCycles' component={ BillingCycle } />
      <Redirect from='*' to='/' />
    </HashRouter>
  )
}