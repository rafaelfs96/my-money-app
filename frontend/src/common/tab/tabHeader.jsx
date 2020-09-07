import React, { useEffect } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectTab } from './tabActions'

import If from '../operator/If'

function TabHeader(props) {
  const isSelected = props.tab.selected === props.target
  const isVisible = props.tab.visible[props.target]
  return (
    <If test={isVisible}>
      <li className={isSelected ? 'active' : ''}>
        <a href='#'
          data-toggle='tab'
          data-target={props.target}
          onClick={() => props.selectTab(props.target)}>
          <i className={`fa fa-${props.icon}`}></i> {props.label}
        </a>
      </li>
    </If>
  )
}

const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)