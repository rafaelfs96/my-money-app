import React from 'react'

export default ({type, btnStyle, click, icon}) => {
  return (
    <button type={ type } className={`btn btn-${btnStyle}`} onClick={ click }>
      <i className={`fa fa-${icon}`}></i>
    </button>
  )
}
