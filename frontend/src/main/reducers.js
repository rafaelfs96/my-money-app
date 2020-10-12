import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import dashboardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tab/tabReducer'
import billingCycleReducer from '../billingCycle/billingCycleReducer'
import authReducer from '../auth/authReducer'

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  tab: tabReducer,
  billing: billingCycleReducer,
  auth: authReducer,
  form: formReducer,
  toastr: toastrReducer
})

export default rootReducer