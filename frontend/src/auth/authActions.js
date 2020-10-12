import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import urls from '../utils/consts'
import { TOKEN_VALIDATED, USER_FETCHED } from '../utils/actionNames'

function submit(values, url) {
  return dispatch => {
    axios.post(url, values)
      .then(res => dispatch([
        { type: USER_FETCHED, payload: res.data }
      ]))
      .catch(err => {
        console.log(err)
        // const errors = err.response.data.errors
        // for (const key in errors) {
        //   let error = errors[key].message
        //   toastr.error('Erro', error)
        // }
      })
  }
}

export function login(values) {
  return submit(values, `${urls.OAPI_URL}/login`)
}

export function signup(values) {
  return submit(values, `${urls.OAPI_URL}/signup`)
}

export function logout() {
  return { type: TOKEN_VALIDATED, payload: false }
}

export function validateToken(token) {
  return dispatch => {
    if (token) {
      axios.post(`${urls.OAPI_URL}/validateToken`, { token })
        .then(resp => dispatch({ type: TOKEN_VALIDATED, payload: resp.data.valid }))
        .catch(err => dispatch({ type: TOKEN_VALIDATED, payload: false}))
    } else dispatch({ type: TOKEN_VALIDATED, payload: false })
  }
}