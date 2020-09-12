import React from 'react'

// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operator/If'

function TabContent(props) {
  const isSelected = props.tab.selected === props.id
  const isVisible = props.tab.visible[props.id]
  return (
    <If test={isVisible}>
      <div id={props.id} className={`tab-pane ${isSelected ? 'active' : ''}`}>
        {props.children}
      </div>
    </If>
  )
}

const mapStateToProps = state => ({tab: state.tab})

export default connect(mapStateToProps)(TabContent)