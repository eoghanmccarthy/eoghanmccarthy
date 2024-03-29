//https://howtomakeelectronicmusic.com/eq-frequency-chart-for-electronic-music/#prettyPhoto/0/
//https://blog.landr.com/eq-kick-and-bass/
//https://github.com/Tonejs/Tone.js/issues/416

import { STEPS_DEFAULT } from '../utils/constants'

const sound = { notes: [], steps: STEPS_DEFAULT }

export const tracks = {
  HAT01: {
    id: 'HAT01',
    type: 'hat',
    name: '',
    ...sound,
    instrument: {
      synth: 'NoiseSynth',
      options: {
        volume: -8,
        noise: {
          type: 'white',
          playbackRate: 5,
        },
        envelope: {
          attack: 0.001,
          decay: 0.222,
          sustain: 0.26,
          release: 0.188,
        },
      },
    },
    effects: new Map([
      [
        'Filter',
        {
          Q: 1,
          detune: 0,
          frequency: 11600,
          gain: 0,
          rolloff: -48,
          type: 'bandpass',
        },
      ],
      [
        'EQ3',
        {
          low: -60,
          mid: 0,
          high: -6,
          lowFrequency: 6000,
          highFrequency: 12000,
        },
      ],
    ]),
    controls: {
      equaliser: { span: '1 / span 5', effects: ['EQ3'] },
      filter: { span: '6 / span 1', effects: ['Filter'] },
    },
  },
  HAT02: {
    id: 'HAT02',
    type: 'hat',
    name: '',
    ...sound,
    instrument: {
      synth: 'NoiseSynth',
      options: {
        volume: -8,
        noise: {
          type: 'white',
          playbackRate: 5,
        },
        envelope: {
          attack: 0.001,
          decay: 0.3,
          sustain: 0.002,
          release: 0.32,
        },
      },
    },
    effects: new Map([
      [
        'Filter',
        {
          Q: 1,
          detune: 0,
          frequency: 3700,
          gain: 0,
          rolloff: -48,
          type: 'bandpass',
        },
      ],
      ['Reverb', { decay: 4, preDelay: 0.2, wet: 0.28 }],
      [
        'EQ3',
        {
          low: -60,
          mid: 0,
          high: -6,
          lowFrequency: 9000,
          highFrequency: 16000,
        },
      ],
    ]),
    controls: {
      equaliser: { span: '1 / span 5', effects: ['EQ3'] },
      filter: { span: '6 / span 1', effects: ['Filter'] },
    },
  },
}
