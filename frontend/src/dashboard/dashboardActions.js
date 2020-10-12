import axios from 'axios'
import { BILLING_SUMMARY_FETCHED } from '../utils/actionNames'

import urls from '../utils/consts'

export function getSummary() {
  const request = axios.get(`${urls.API_URL}/billing/summary`)
  return {
    type: BILLING_SUMMARY_FETCHED,
    payload: request
  }
}