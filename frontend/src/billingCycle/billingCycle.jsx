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

import BillingCycleList from '../billingCycle/billingCycleList'
import BillingCycleForm from '../billingCycle/billingCycleForm'

import { selectTab, showTabs } from '../common/tab/tabActions'
import { create } from './billingCycleActions'

function BillingCycle (props) {
  useEffect(() => {
    props.selectTab('tabList')
    props.showTabs('tabList', 'tabCreate')
  }, [props])

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
              <BillingCycleList />
            </TabContent>
            <TabContent id='tabCreate'>
              <BillingCycleForm onSubmit={ props.create } />
            </TabContent>
            <TabContent id='tabUpdate'>
              <h1>Alterar</h1>
            </TabContent>
            <TabContent id='tabDelete'>
              <h1>Excluir</h1>
            </TabContent>
          </TabsContent>
        </Tabs>
      </Content>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  selectTab, showTabs, create
}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)
