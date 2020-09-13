import React, { useEffect } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showTab } from './billingCycleActions'

import IconButton from '../common/template/iconButton'

function BillingCycleList({getList, showTab, billing}) {
  useEffect(() => { getList() }, [getList])

  const renderRows = () => {
    const list = billing.list || []
    return list.map(bc => (
      <tr key={ bc._id }>
        <td>{ bc.name }</td>
        <td>{ bc.month }</td>
        <td>{ bc.year }</td>
        <td>
          <IconButton type='button' btnStyle='warning' icon='pencil' click={() => showTab(bc, 'tabUpdate')} />
          <IconButton type='button' btnStyle='danger' icon='trash-o' click={() => showTab(bc, 'tabDelete')} />
        </td>
      </tr>
    ))
  }
  
  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Mes</th>
            <th>Ano</th>
            <th className='table-actions'>Acoes</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showTab }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)