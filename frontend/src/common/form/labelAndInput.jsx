import React from 'react'
import Grid from '../layout/grid'

export default ({cols, name, label, input, placeholder, readOnly, type}) => {
  return (
    <Grid cols={ cols }>
      <div className='form-group'>
        <label htmlFor={ name }>{ label }</label>
        <input { ...input } className='form-control'
          placeholder={ placeholder }
          readOnly={ readOnly } type={ type } />
      </div>
    </Grid>
  )
}
