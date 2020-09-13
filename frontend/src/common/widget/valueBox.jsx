import React from 'react'

import Grid from '../layout/grid'

function ValueBox({cols, color, value, text, icon}) {
  return (
    <Grid cols={ cols }>
      <div className={`small-box bg-${ color }`}>
        <div className='inner'>
          <h3>{ value }</h3>
          <p>{ text }</p>
        </div>
        <div className='icon'>
          <i className={`fa fa-${ icon }`}></i>
        </div>
      </div>
    </Grid>
  )
}

export default ValueBox