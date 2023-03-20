import React, {
  Fragment,
  useRef,
  createRef,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from 'react'
import { useImmer } from 'use-immer'
import { Transport, Destination, Meter, UserMedia, Sequence, Draw } from 'tone'

import './index.css'

import { newArray } from 'utils'
import { SCALE_A_MINOR, TRACK_DEFAULT } from 'utils/constants'

import { sounds } from '../../sounds'

import { Main, Panel, PanelMain } from 'components'
import { Master } from 'features/master'
import Midi from 'features/midi'
import StudioTrack from 'features/studioTrack'

const song = {
  t001: { sound: 'kick01', steps: [[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]] },
  t002: { sound: 'kick02', steps: [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]] },
  t003: { sound: 'snare01' },
  t004: { sound: 'snare02' },
  t005: {
    sound: 'HAT01',
    steps: [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
  },
  t006: { sound: 'HAT02' },
  t007: {
    sound: 'poly01',
    notes: SCALE_A_MINOR.slice(0, 6),
    steps: [
      [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    ],
  },
}

const columns = 16
const rows = 4
const subdivision = `8n`

const Studio = () => {
  const tracks = Object.entries(song)
  const tracksRef = useRef(tracks.map(() => createRef()))

  const started = useRef(true)
  const [highlighted, setHighlighted] = useImmer(-1)

  const matrixRef = useRef(
      newArray(columns).map(() => {
        return newArray(rows).map(() => false)
      })
  )

  const [matrix, setMatrix] = useImmer(
    newArray(columns).map(() => {
      return newArray(rows).map(() => false)
    })
  )

  const tick = useCallback(
    (time, index) => {
      Draw.schedule(() => {
        if (started.current) {
          setHighlighted(index)
        }
      }, time)
      matrix[index].forEach((value, row) => {
        console.log(value, row)
        console.log("ref",matrixRef.current[index][row])
        if (value) {
          row = rows - row - 1
          console.log(time, row)
          // playSound(time, row) // row is instrument index
          // window.dispatchEvent(
          //   new CustomEvent('trigger', {
          //     detail: {
          //       time,
          //       row,
          //     },
          //     composed: true,
          //   })
          // )
        }
      })
    },
    [matrix]
  )

  useEffect(() => {
    const sequencer = new Sequence(tick, newArray(columns), subdivision).start(0)
  }, [tick])

  const updateCell = (column, row) => {
    setMatrix((draft) => {
      draft[column][row] = !draft[column][row]
    })

    matrixRef.current[column][row] = !matrixRef.current[column][row]
  }

  const onMouseOver = (e, column, row) => {
    if (e.buttons) {
      updateCell(column, row)
    }
  }

  return (
    <Fragment>
      <Main id={'studio'}>
        <section id={'globals'} style={{ position: 'sticky', top: '32px', alignSelf: 'start' }}>
          <Master volume={0} bpm={120} />
          <Midi />
        </section>
        <section id={'tracks'} style={{ alignSelf: 'start' }}>
          <Panel>
            <PanelMain></PanelMain>
          </Panel>
          <div style={{ display: 'flex' }}>
            {matrix.map((column, x) => {
              return (
                <div
                  className="column"
                  data-highlighted={x === highlighted}
                  style={{ backgroundColor: x === highlighted ? 'red' : 'white' }}
                >
                  {column.map((cell, y) => {
                    return (
                      <button
                        onMouseOver={(e) => onMouseOver(e, x, y)}
                        onMouseDown={(e) => onMouseOver(e, x, y)}
                        className="cell"
                        data-filled={cell}
                        style={{
                          aspectRatio: 1,
                          width: '50px',
                          backgroundColor: cell ? 'blue' : 'transparent',
                        }}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>

          {tracks.map(([trackId, { sound, ...config }], i) => {
            const track = sounds[sound]

            if (track) {
              const props = {
                key: trackId,
                ref: tracksRef.current[i],
                index: i,
                trackId,
                ...TRACK_DEFAULT,
                ...track,
                ...config,
              }

              switch (track.type) {
                case 'kick':
                  // case 'hat':
                  // case 'poly':
                  // case 'snare':
                  return <StudioTrack {...props} />
                default:
                  return null
              }
            } else {
              return null
            }
          })}
        </section>
      </Main>
    </Fragment>
  )
}

export default Studio
