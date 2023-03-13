import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'

import { useEventListener, useSound } from 'hooks'

import { channelTypes, instrumentTypes, notesTypes, stepsTypes } from 'utils/types'

import { Panel, PanelMain, Track } from 'components'
import { ControlHandler } from 'components/controls'
import EnvelopeControls from 'components/controls/EnvelopeControls'
import TrackControls from 'components/trackControls'
import { TrackEffects, EffectsGroup } from 'components/trackEffects'
import StepSequencer from 'features/stepSequencer'

const StudioTrack = memo(
  forwardRef(
    ({ index, trackId, channel, instrument, notes, stepCount, steps, effects, controls }, ref) => {
      const sound = useSound(channel, instrument, effects)

      useEventListener((e) => {
        if (parseInt(e.key) === index + 1) {
          if (e.shiftKey) {
            // const steps = document.querySelectorAll(`.t00${e.key}-step`);
            // if (!e.altKey) {
            //   steps.forEach(step => step.setAttribute('value', 'on'));
            // } else {
            //   steps.forEach(step => step.setAttribute('value', 'off'));
            // }
          } else {
            document.querySelector(`#${trackId}`)?.scrollIntoView()
            //document.querySelector(`#${trackId}-sample`)?.focus();
          }
        }
      })

      console.log('track render')

      return (
        <Panel>
          <PanelMain>
            <Track trackId={trackId}>
              <TrackControls trackId={trackId} trackNumber={index + 1} channel={sound.channel} />
              <StepSequencer
                trackId={trackId}
                notes={notes}
                stepCount={stepCount}
                steps={steps}
                onStep={sound.trigger}
              />
              <TrackEffects trackId={trackId}>
                {Object.entries(controls ?? {}).map(([group, value], i) => {
                  return (
                    <EffectsGroup key={i} span={value.span} title={group}>
                      {value.effects.map((name, i) => {
                        const node = sound.effects.find((effect) => effect.name === name)
                        if (node) {
                          return (
                            <ControlHandler key={i} trackId={trackId} name={name} node={node} />
                          )
                        } else {
                          return null
                        }
                      })}
                    </EffectsGroup>
                  )
                })}
                <EffectsGroup span={'17 / span 4'} title={'envelope'}>
                  <EnvelopeControls
                    trackId={trackId}
                    initialValue={sound.synth?.envelope?.get()}
                    onChange={(val) => sound.synth.envelope.set(val)}
                  />
                </EffectsGroup>
              </TrackEffects>
            </Track>
          </PanelMain>
        </Panel>
      )
    }
  )
)

export default StudioTrack

StudioTrack.propTypes = {
  trackId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  instrument: instrumentTypes,
  stepCount: PropTypes.number.isRequired,
  channel: channelTypes,
  notes: notesTypes,
  steps: stepsTypes,
  effects: PropTypes.object.isRequired,
  controls: PropTypes.object.isRequired,
}
