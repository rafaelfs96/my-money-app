import React from 'react'

export default ({type, btnStyle, click, label}) => {
  return (
    <button type={ type } className={`btn btn-${btnStyle}`} onClick={ click }>
      { label }
    </button>
  )
}