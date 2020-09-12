import React, { useEffect } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList } from './billingCycleActions'

function BillingCycleList(props) {
  useEffect(() => {
    props.getList()
  }, [])

  const renderRows = () => {
    const list = props.billing.list || []
    return list.map(bc => (
      <tr key={ bc._id }>
        <td>{ bc.name }</td>
        <td>{ bc.month }</td>
        <td>{ bc.year }</td>
      </tr>
    ))
  }
  
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Mes</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody>
          { renderRows() }
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({ billing: state.billing })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)