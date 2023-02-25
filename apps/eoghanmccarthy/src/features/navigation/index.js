import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dialog } from '@eoghanmccarthy/ui'

import styles from './styles.scss'

import * as IconButtons from 'components/iconButtons'

const data = [
  {
    route: '/posts',
    label: 'posts',
  },
]

const NavigationModal = ({ close }) => {
  return (
    <Dialog id={'global-navigation-modal'} close={close}>
      <nav>
        {data.map(({ label, route }) => {
          return (
            <NavLink key={route} tabIndex={'0'} to={route}>
              {label}
            </NavLink>
          )
        })}
      </nav>
      <IconButtons.Close onClick={close} />
    </Dialog>
  )
}

export default NavigationModal
