import React, { useEffect, useState } from 'react'
import { MonoSynth, Transport, Sequence, getContext, start, Destination } from 'tone'

import { newArray } from 'utils'

const pattern = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
]

const notes = ['C#4', 'D#4', 'F#4', 'G#4', 'A#4', 'C#5', 'D#5', 'F#5'].reverse()

const synth = new MonoSynth().toDestination()

const Page = () => {
  const [playState, setPlayState] = useState(Transport.state)
  const noteInterval = `16n`
  const noteIndices = newArray(16)

  useEffect(() => {
    const loop = new Sequence(
      (time, col) => {
        pattern.map((row, noteIndex) => {
          if (row[col]) {
            synth.triggerAttackRelease(notes[noteIndex], '8n', time)
          }
        })
      },
      noteIndices,
      noteInterval
    ).start(0)
    return () => loop.dispose()
  }, [])

  const play = async () => {
    if (getContext().state !== 'running') {
      await start()
    }
    Transport.start()
    setPlayState(Transport.state)
  }

  const stop = () => {
    Transport.stop()
    setPlayState(Transport.state)
  }

  return (
    <div>
      <button
        onClick={() => {
          playState === 'started' ? stop() : play()
        }}
      >
        {playState}
      </button>
    </div>
  )
}

export default Page
