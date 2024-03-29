import React, { memo } from 'react'

import { FREQUENCY_MIN, FREQUENCY_MAX } from '../../../utils/constants'
import { SliderControl } from '../../controllers'

const FilterControls = memo(({ trackId, node }) => {
  if (!trackId || !node) return null

  return (
    <SliderControl
      id={`${trackId}-filter--frequency`}
      label={'FRQ'}
      step={10}
      min={FREQUENCY_MIN}
      max={FREQUENCY_MAX}
      initialValue={node.get().frequency ?? 1000}
      onChange={(val, time = 0.0) => node.frequency.rampTo(val, time)}
    />
  )
})

export default FilterControls
