import React, {useEffect, useState} from 'react'

import axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

const base_url = 'http://localhost:3003/api/'

export default function Dashboard({}) {
  const [{credit, debt}, setSummary] = useState({credit: 0, debt: 0})

  useEffect(() => {
    axios.get(`${base_url}/billing/summary`).then(resp => {
      const { credit, debt } = resp.data
      setSummary({ credit, debt })
    })
  }, [])

  return (
    <React.Fragment>
      <ContentHeader title='Dashboard' small='Versao 2.0'/>
      <Content>
        <Row>
          <ValueBox cols='12 4' color='green' icon='bank'
            value={`R$ ${ credit }`} text='Total de Créditos' />
          <ValueBox cols='12 4' color='red' icon='credit-card'
            value={`R$ ${ debt }`} text='Total de Débitos' />
          <ValueBox cols='12 4' color='blue' icon='money'
            value={`R$ ${ credit - debt }`} text='Valor Consolidado' />
        </Row>
      </Content>
    </React.Fragment>
  )
}
