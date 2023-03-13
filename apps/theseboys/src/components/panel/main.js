import React from 'react'

const PanelMain = ({ children, id }) => {
  return (
    <div id={id} className={'panel-main'}>
      {children}
    </div>
  )
}

export default PanelMain
