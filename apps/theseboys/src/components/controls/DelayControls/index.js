import React, { memo } from 'react'

import {
  WET_STEP,
  WET_DECIMALS,
  WET_MIN,
  WET_MAX,
} from '../../../utils/constants'
import { SliderControl } from '../../controllers'

const DelayControls = memo(({ trackId, node }) => {
  if (!trackId || !node) return null

  return (
    <SliderControl
      id={`${trackId}-delay--wet`}
      label={'DEL'}
      step={WET_STEP}
      min={WET_MIN}
      max={WET_MAX}
      toFixed={WET_DECIMALS}
      initialValue={node.get().wet ?? 0}
      onChange={(val) => node.set({ wet: val })}
    />
  )
})

export default DelayControls
