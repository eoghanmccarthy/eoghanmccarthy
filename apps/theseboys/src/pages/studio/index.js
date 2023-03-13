import React, { Fragment, useRef, createRef, useState, useMemo, useEffect } from 'react'
import { Transport, Destination, Meter, UserMedia } from 'tone'

import './index.css'

import { SCALE_A_MINOR, TRACK_DEFAULT } from '../../utils/constants'

import { sounds } from '../../sounds'

import { Main, Panel, PanelMain } from 'components'
import { Master } from 'features/master'
import Midi from 'features/midi'
import StudioTrack from 'features/studioTrack'

const song = {
  t001: { sound: 'kick01' },
  t002: { sound: 'kick02' },
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

const Studio = () => {
  const tracks = Object.entries(song)
  const tracksRef = useRef(tracks.map(() => createRef()))

  const micRef = useRef(new UserMedia({ volume: 0 }))
  const selectedDevice = useRef()

  // useEffect(() => {
  //   const meter = new Meter();
  //   micRef.current.connect(meter).chain(Destination);
  //   console.log(micRef.current.get());
  //   console.log(micRef.current.state);
  //   //console.log(micRef.current.enumerateDevices());
  //   navigator.mediaDevices.enumerateDevices().then(devices => {
  //     // print the device labels
  //     console.log(devices.map(device => device));
  //     selectedDevice.current = devices[0].groupId;
  //   });
  //
  //   micRef.current
  //     .open()
  //     .then(() => {
  //       // promise resolves when input is available
  //       console.log('mic open');
  //       // print the incoming mic levels in decibels
  //       setInterval(() => console.log(meter.getValue()), 100);
  //     })
  //     .catch(e => {
  //       // promise is rejected when the user doesn't have or allow mic access
  //       console.log('mic not open');
  //     });
  //   return () => micRef.current.close();
  // }, []);

  return (
    <Fragment>
      <Main id={'studio'}>
        <section id={'globals'} style={{ position: 'sticky', top: '32px', alignSelf: 'start' }}>
          <Master volume={0} bpm={120} />
          <Midi />
        </section>
        <section id={'tracks'}>
          <Panel>
            <PanelMain></PanelMain>
          </Panel>
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
                case 'hat':
                case 'poly':
                case 'snare':
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
