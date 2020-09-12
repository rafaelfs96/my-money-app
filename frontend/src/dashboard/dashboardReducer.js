import { BILLING_SUMMARY_FETCHED } from '../utils/actionNames'

const initialState = {
  summary: {
    credit: 0,
    debt: 0
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case BILLING_SUMMARY_FETCHED:
      return { ...state, summary: action.payload.data }

    default: 
      return state
  }
}