import React from 'react'
import PropTypes from 'prop-types'

export const Sidebar = ({ children, style = {} }) => (
  <aside style={style} className={'me__sidebar'}>
    {children}
  </aside>
)

Sidebar.propTypes = {
  style: PropTypes.object,
}
