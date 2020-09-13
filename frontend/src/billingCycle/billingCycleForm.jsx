import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from './billingCycleActions'

import LabelAndInput from '../common/form/labelAndInput'
import Button from '../common/template/button'

import Summary from './summary'
import ItemList from './itemList'

function BillingCycleForm({handleSubmit, readOnly, credits, debts, submitClass, submitLabel, init}) {
  const calculateSummary = () => {
    const sum = (t, v) => t + v
    return {
      creditsSum: credits.map(c => +c.value || 0).reduce(sum),
      debtsSum: debts.map(d => +d.value || 0).reduce(sum)
    }
  }

  const { creditsSum, debtsSum } = calculateSummary()

  return (
    <form onSubmit={ handleSubmit } >
      <div className='box-body'>
        <Field name='name' component={ LabelAndInput } readOnly={ readOnly }
          label='Nome' cols='12 4' placeholder='Informe o nome' />
        <Field name='month' component={ LabelAndInput } readOnly={ readOnly }
          type='number' label='Mes' cols='12 4' placeholder='Informe o mes' />
        <Field name='year' component={ LabelAndInput } readOnly={ readOnly }
          type='number' label='Ano' cols='12 4' placeholder='Informe o ano' />

        <Summary credit={ creditsSum } debt={ debtsSum }/>
        <ItemList field='credits' legend='Créditos' cols='12 6' list={ credits } readOnly={ readOnly } />
        <ItemList field='debts' legend='Débitos' cols='12 6' list={ debts } readOnly={ readOnly } showStatus={ true } />
      </div>
      <div className='box-footer'>
        <Button type='submit' btnStyle={ submitClass } label={ submitLabel } />
        <Button type='button' btnStyle='default' label='Cancelar' click={ init } />
      </div>
    </form>
  )
}

const BillingCycleFormDecorated = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({ credits: selector(state, 'credits'), debts: selector(state, 'debts') })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleFormDecorated)