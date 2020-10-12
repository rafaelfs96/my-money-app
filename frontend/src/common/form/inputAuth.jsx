import React from 'react'
import If from '../operator/If'

export default ({ hide, type, placeholder, readOnly, icon }) => {
  return (
    <If test={ !hide }>
      <div className='form-group has-feedback'>
        <input type={type}
          className='form-control'
          placeholder={placeholder}
          readOnly={readOnly}
        />
        <span className={`glyphicon glyphocon-${icon} form-control-feedback`}></span>
      </div>
    </If>
  )
}