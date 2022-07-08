import React, { memo, useRef, forwardRef, createRef } from "react";
import PropTypes from "prop-types";
import { Midi as ToneMidi } from "@tonejs/midi";

import "./styles.css";

import {
  channelTypes,
  instrumentTypes,
  notesTypes,
  stepsTypes,
} from "../../utils/types";

// simple chromatic scale, doubles in bpm every 4 notes (at ticks 0, 384, 768)
const midi = {
  header: {
    keySignatures: [],
    meta: [],
    name: "\u0000",
    ppq: 96,
    tempos: [
      {
        ticks: 0,
        bpm: 80,
      },
      {
        ticks: 384,
        bpm: 160,
      },
      {
        ticks: 768,
        bpm: 320,
      },
    ],
    timeSignatures: [
      {
        ticks: 0,
        timeSignature: [4, 4],
        measures: 0,
      },
      {
        ticks: 0,
        timeSignature: [4, 4],
        measures: 0,
      },
    ],
  },
  tracks: [
    {
      channel: 0,
      controlChanges: {},
      pitchBends: [],
      instrument: {
        family: "piano",
        number: 0,
        name: "acoustic grand piano",
      },
      name: "\u0000",
      notes: [
        {
          duration: 0.5,
          durationTicks: 96,
          midi: 60,
          name: "C4",
          ticks: 0,
          time: 0,
          velocity: 0.7874015748031497,
        },
        {
          duration: 0.5,
          durationTicks: 96,
          midi: 61,
          name: "C#4",
          ticks: 96,
          time: 0.5,
          velocity: 0.7874015748031497,
        },
        {
          duration: 0.5,
          durationTicks: 96,
          midi: 62,
          name: "D4",
          ticks: 192,
          time: 1,
          velocity: 0.7874015748031497,
        },
        {
          duration: 0.5,
          durationTicks: 96,
          midi: 63,
          name: "D#4",
          ticks: 288,
          time: 1.5,
          velocity: 0.7874015748031497,
        },
        {
          duration: 0.5,
          durationTicks: 96,
          midi: 64,
          name: "E4",
          ticks: 384,
          time: 2,
          velocity: 0.7874015748031497,
        },
        {
          duration: 0.5,
          durationTicks: 96,
          midi: 65,
          name: "F4",
          ticks: 480,
          time: 2.5,
          velocity: 0.7874015748031497,
        },
        {
          duration: 0.5,
          durationTicks: 96,
          midi: 66,
          name: "F#4",
          ticks: 576,
          time: 3,
          velocity: 0.7874015748031497,
        },
        {
          duration: 0.5,
          durationTicks: 96,
          midi: 67,
          name: "G4",
          ticks: 672,
          time: 3.5,
          velocity: 0.7874015748031497,
        },
        {
          duration: 0.5,
          durationTicks: 96,
          midi: 68,
          name: "G#4",
          ticks: 768,
          time: 4,
          velocity: 0.7480314960629921,
        },
        {
          duration: 0.5,
          durationTicks: 96,
          midi: 69,
          name: "A4",
          ticks: 864,
          time: 4.5,
          velocity: 0.7480314960629921,
        },
        {
          duration: 0.5,
          durationTicks: 96,
          midi: 70,
          name: "A#4",
          ticks: 960,
          time: 5,
          velocity: 0.7480314960629921,
        },
        {
          duration: 0.5,
          durationTicks: 96,
          midi: 71,
          name: "B4",
          ticks: 1056,
          time: 5.5,
          velocity: 0.7480314960629921,
        },
      ],
      endOfTrackTicks: 1152,
    },
  ],
};

const Midi = memo(
  forwardRef(({}, ref) => {
    const tracksRef = useRef(new ToneMidi());
    //
    return <div id={"midi"}>midi</div>;
  })
);

export default Midi;

Midi.propTypes = {
  trackId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  instrument: instrumentTypes,
  stepCount: PropTypes.number.isRequired,
  channel: channelTypes,
  notes: notesTypes,
  steps: stepsTypes,
  effects: PropTypes.object.isRequired,
  controls: PropTypes.object.isRequired,
};
