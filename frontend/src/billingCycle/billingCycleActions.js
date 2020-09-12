import axios from 'axios'
import { BILLING_CYCLES_FETCHED } from '../utils/actionNames'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
  const request = axios.get(`${BASE_URL}/billing`)
  return {
    type: BILLING_CYCLES_FETCHED,
    payload: request
  }
}

export function create(values) {
  console.log(values)
  axios.post(`${BASE_URL}/billing`, values)
  return {
    type: 'TYPE'
  }
}
