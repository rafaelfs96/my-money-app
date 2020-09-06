import React, {useEffect} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSummary } from './dashboardActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

function Dashboard(props) {
  useEffect(() => {
    props.getSummary()
  }, [])

  const { credit, debt } = props.summary
  return (
    <React.Fragment>
      <ContentHeader title='Dashboard' small='Versao 1.0'/>
      <Content>
        <Row>
          <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos' />
          <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Débitos' />
          <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Valor Consolidado' />
        </Row>
      </Content>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  summary: state.dashboard.summary
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getSummary
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
