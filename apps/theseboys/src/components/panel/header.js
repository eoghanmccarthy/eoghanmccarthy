import React from 'react'

const PanelHeader = ({ children, id }) => {
  return (
    <div id={id} className={'panel-header'}>
      {children}
    </div>
  )
}

export default PanelHeader
