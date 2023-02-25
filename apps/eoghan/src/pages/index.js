import React from 'react'
import { Button, Dialog, useDialogsContext } from '@eoghanmccarthy/ui'
import './styles.css'

import Bio from '../components/bio'
import AnimatedLogo from '../components/animatedLogo'

const Home = () => {
  const dialog = useDialogsContext()

  return (
    <main className={'me__page page__index'}>
      <AnimatedLogo />
      <Button
        size={60}
        shape={'circle'}
        className={'toggle-bio'}
        onClick={() =>
          dialog.open(
            <Dialog id={'bio-dialog'}>
              <Bio />
            </Dialog>
          )
        }
      >
        <span />
        <span />
      </Button>
    </main>
  )
}

export default Home
