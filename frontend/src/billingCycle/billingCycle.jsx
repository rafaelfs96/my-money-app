import React, { useEffect } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'

import List from '../billingCycle/billingCycleList'
import Form from '../billingCycle/billingCycleForm'

import { create, update, remove, init } from './billingCycleActions'

function BillingCycle ({init, create, update, remove}) {
  useEffect(() => { init() }, [init])

  return (
    <React.Fragment>
      <ContentHeader title='Ciclos de pagamento' small='Cadastro' />
      <Content>
        <Tabs>
          <TabsHeader>
            <TabHeader label='Listar' icon='bars' target='tabList'/>
            <TabHeader label='Incluir' icon='plus' target='tabCreate'/>
            <TabHeader label='Alterar' icon='pencil' target='tabUpdate'/>
            <TabHeader label='Excluir' icon='trash-o' target='tabDelete'/>
          </TabsHeader>
          <TabsContent>
            <TabContent id='tabList'>
              <List />
            </TabContent>
            <TabContent id='tabCreate'>
              <Form onSubmit={ create } submitLabel='Incluir' submitClass='primary' />
            </TabContent>
            <TabContent id='tabUpdate'>
              <Form onSubmit={ update } submitLabel='Alterar' submitClass='info' />
            </TabContent>
            <TabContent id='tabDelete'>
              <Form onSubmit={ remove } submitLabel='Excluir' submitClass='danger' readOnly={ true } />
            </TabContent>
          </TabsContent>
        </Tabs>
      </Content>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ create, update, remove, init }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)
