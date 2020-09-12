import React from 'react'
import { Route, Redirect, HashRouter, Switch } from 'react-router-dom'

import Dashboard from '../dashboard/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default props => {
  return (
    <Switch>
      <Route exact path='/' component={ Dashboard } />
      <Route path='/billingCycles' component={ BillingCycle } />
      <Redirect from='*' to='/' />
    </Switch>
  )
}
