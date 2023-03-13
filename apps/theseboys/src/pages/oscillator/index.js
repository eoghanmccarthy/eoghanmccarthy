import React from 'react'

import { Main } from 'components'
import { Master } from 'features/master'
import Oscillator from 'features/oscillator'

const Page = () => {
  return (
    <Main id={'studio'}>
      <Master volume={0} bpm={120} />
      <Oscillator />
    </Main>
  )
}

export default Page
