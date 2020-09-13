import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabActions'

import If from '../operator/If'

function TabHeader({tab, target, icon, label, selectTab}) {
  const isSelected = tab.selected === target
  const isVisible = tab.visible[target]
  return (
    <If test={ isVisible }>
      <li className={isSelected ? 'active' : ''}>
        <a href='#'
          data-toggle='tab'
          data-target={ target }
          onClick={ () => selectTab(target) }>
          <i className={`fa fa-${icon}`}></i> { label }
        </a>
      </li>
    </If>
  )
}

const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)