import React from 'react'

import './panel.css'

const Panel = ({ children, id }) => {
  return (
    <div id={id} className={'panel'}>
      {children}
    </div>
  )
}

export default Panel
