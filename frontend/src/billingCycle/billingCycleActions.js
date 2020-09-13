import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'

import { showTabs, selectTab } from '../common/tab/tabActions'

import { BILLING_CYCLES_FETCHED } from '../utils/actionNames'

const BASE_URL = 'http://localhost:3003/api'
const initial_values = { credits: [{}], debts: [{}] }

export function getList() {
  const request = axios.get(`${BASE_URL}/billing`)
  return {
    type: BILLING_CYCLES_FETCHED,
    payload: request
  }
}

export function create(values) {
  return submit(values, 'post')
}

export function update(values) {
  return submit(values, 'put')
}

export function remove(values) {
  return submit(values, 'delete')
}

function submit(values, method) {
  return dispatch => {
    const id = values._id ? values._id : ''
    axios[method](`${BASE_URL}/billing/${id}`, values)
      .then(res => {
        toastr.success('Sucesso', 'Operacao Realizada com Sucesso')
        dispatch(init())
      })
      .catch(err => {
        const errors = err.response.data.errors
        for (const key in errors) {
          let error = errors[key].message
          toastr.error('Erro', error)
        }
      })
  }
}

export function showTab(billingCycle, tab) {
  return [
    showTabs(tab),
    selectTab(tab),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    initialize('billingCycleForm', initial_values)
  ]
}
