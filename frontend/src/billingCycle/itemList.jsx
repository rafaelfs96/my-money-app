import React from 'react'

import Grid from '../common/layout/grid'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'

import If from '../common/operator/If'

import Input from '../common/form/input'
import IconButton from '../common/template/iconButton'

function ItemList({readOnly, field, list, showStatus, arrayInsert, arrayRemove, cols, legend}) {
  const add = (index, item = {}) => {
    if(readOnly) return false
    arrayInsert('billingCycleForm', `${ field }`, index, item)
  }

  const remove = index => {
    if(readOnly || list.length <= 1) return false
    arrayRemove('billingCycleForm', `${ field }`, index)
  }

  const renderRows = () => {
    list = list || []
    return list.map((item, index) => (
      <tr key={ index }>
        <td>
          <Field name={`${ field }[${ index }].name`} component={ Input } 
            placeholder='Informe o nome' readOnly={ readOnly } />
        </td>
        <td>
          <Field name={`${ field }[${ index }].value`} component={ Input } 
            placeholder='Informe o valor' readOnly={ readOnly } />
        </td>
        <If test={ showStatus }>
          <td>
            <Field name={`${ field }[${ index }].status`} component={ Input }
            placeholder='Informe o Status' readOnly={ readOnly }  />
          </td>
        </If>
        <td>
          <IconButton type='button' btnStyle='success' icon='plus' click={ () => add(index + 1) }/>
          <IconButton type='button' btnStyle='warning' icon='clone' click={ () => add(index + 1, item) }/>
          <IconButton type='button' btnStyle='danger' icon='trash-o' click={ () => remove(index) }/>
        </td>
      </tr>
    ))
  }

  return (
    <Grid cols={ cols }>
      <fieldset>
        <legend>{ legend }</legend>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <If test={ showStatus }>
                <th>Status</th>
              </If>
              <th className='table-actions'>Acoes</th>
            </tr>
          </thead>
          <tbody>
            { renderRows() }
          </tbody>
        </table>
      </fieldset>
    </Grid>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)

export default connect(null, mapDispatchToProps)(ItemList)