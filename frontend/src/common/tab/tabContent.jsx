import React from 'react'

// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import If from '../operator/If'

function TabContent({tab, id, children}) {
  const isSelected = tab.selected === id
  const isVisible = tab.visible[id]
  return (
    <If test={ isVisible }>
      <div id={ id } className={`tab-pane ${ isSelected ? 'active' : '' }`}>
        { children }
      </div>
    </If>
  )
}

const mapStateToProps = state => ({tab: state.tab})

export default connect(mapStateToProps)(TabContent)