import { SCALE_A_MINOR, STEPS_DEFAULT } from '../utils/constants'

const sound = {
  notes: SCALE_A_MINOR.slice(0, 6),
  get steps() {
    let arr = []
    for (let i = 0; i < this.notes.length; i++) {
      arr.push(...STEPS_DEFAULT)
    }
    return arr
  },
}

export const tracks = {
  poly01: {
    id: 'poly01',
    type: 'poly',
    channel: {
      pan: 0.4,
      volume: 4,
      mute: false,
    },
    stepCount: 16,
    ...sound,
    instrument: {
      synth: 'PolySynth',
      options: {
        maxPolyphony: 6, // number of notes
        volume: -10,
        envelope: {
          attack: 0.01,
          decay: 0.2,
          sustain: 0.3,
          release: 1.6,
        },
        voice0: {
          oscillator: {
            type: 'triangle4',
          },
          volume: -30,
          envelope: {
            attack: 0.005,
            release: 0.05,
            sustain: 1,
          },
        },
        voice1: {
          volume: -10,
          envelope: {
            attack: 0.005,
            release: 0.05,
            sustain: 1,
          },
        },
      },
    },
    effects: new Map([
      ['Reverb', { decay: 4, preDelay: 0.2, wet: 0.08 }],
      [
        'EQ3',
        {
          low: 0,
          mid: -10,
          high: 4,
          lowFrequency: 1320,
          highFrequency: 5380,
        },
      ],
      [
        'Distortion',
        {
          distortion: 0.6,
          oversample: '4x',
          wet: 0.72,
        },
      ],
      [
        'Phaser',
        {
          frequency: 15,
          octaves: 5,
          stages: 10,
          Q: 10,
          baseFrequency: 100,
          wet: 0.0,
        },
      ],
      ['Gate', { threshold: -40, smoothing: 0.2 }],
      ['Limiter', { threshold: 0 }],
    ]),
    controls: {
      eq3: { span: '1 / span 5', effects: ['EQ3'] },
      effects: {
        span: '6 / span 2',
        effects: ['Distortion', 'Reverb'],
      },
      phaser: { span: '8 / span 3', effects: ['Phaser'] },
    },
  },
}
