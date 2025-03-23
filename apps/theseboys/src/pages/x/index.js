// import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
// import * as Tone from 'tone';
//
// function StepSequencer() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [steps, setSteps] = useState(new Array(16).fill(false).map(() => new Array(4).fill(false)));
//   const [synths, setSynths] = useState([]);
//
//   const currentStepIndex = useRef(0);
//
//   useEffect(() => {
//     const synths = [
//       new Tone.Synth().toDestination(),
//       new Tone.Synth().toDestination(),
//       new Tone.MetalSynth().toDestination(),
//       new Tone.PluckSynth().toDestination(),
//     ];
//     setSynths(synths);
//     return () => {
//       synths.forEach(synth => synth.dispose());
//     };
//   }, []);
//
//   const handleStepClick = useCallback((trackIndex, stepIndex) => {
//     setSteps(prevSteps => {
//       const newSteps = [...prevSteps];
//       newSteps[trackIndex][stepIndex] = !newSteps[trackIndex][stepIndex];
//       return newSteps;
//     });
//   }, []);
//
//   const getTrackSequence = useCallback((trackIndex, synth) => {
//     return new Tone.Sequence((time, step) => {
//       if (steps[trackIndex][step]) {
//         synth.triggerAttackRelease('C4', '8n', time);
//       }
//     }, new Array(16).fill(0).map((_, i) => i), '16n').start(0);
//   }, [steps]);
//
//   const sequences = useMemo(() => {
//     if (synths.length) {
//       return synths.map((synth, index) => {
//         return {
//           synth,
//           sequence: getTrackSequence(index, synth),
//           steps: steps.map(track => track[index]),
//         };
//       });
//     }
//   }, [synths, steps, getTrackSequence]);
//
//   const playPause = useCallback(async () => {
//     if (isPlaying) {
//       Tone.Transport.stop();
//       Tone.Transport.position = 0;
//     } else {
//       if (Tone.getContext().state !== 'running') {
//         await Tone.start()
//       }
//       Tone.Transport.start();
//     }
//     setIsPlaying((prev) => !prev);
//   }, [isPlaying, setIsPlaying]);
//
//   useEffect(() => {
//     const loop = new Tone.Loop((time) => {
//       sequences.forEach(({ synth, sequence, steps }) => {
//         if (steps[currentStepIndex.current]) {
//           synth.triggerAttackRelease('C4', '8n', time);
//         }
//         sequence.at(currentStepIndex.current, steps[currentStepIndex.current]);
//       });
//       currentStepIndex.current = (currentStepIndex.current + 1) % 16;
//     }, '16n').start(0);
//     return () => {
//       loop.stop(0);
//     };
//   }, [sequences]);
//
//   return (
//       <div>
//         {steps.map((track, trackIndex) => (
//             <div key={trackIndex}>
//               {track.map((step, stepIndex) => (
//                   <div
//                       key={`${trackIndex}-${stepIndex}`}
//                       style={{
//                         display: 'inline-block',
//                         width: 20,
//                         height: 20,
//                         border: '1px solid black',
//                         background: step ? 'black' : 'white',
//                       }}
//                       onClick={() => handleStepClick(trackIndex, stepIndex)}
//                   />
//               ))}
//             </div>
//         ))}
//         <button onClick={playPause}>play/pause</button>
//       </div>
//   );
// }
//
// export default StepSequencer;

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import * as Tone from 'tone';

function StepSequencer() {
    const [isPlaying, setIsPlaying] = useState(false);
  const [steps, setSteps] = useState(new Array(16).fill(false).map(() => new Array(4).fill(false)));
  const [synths, setSynths] = useState([]);

  useEffect(() => {
    const synths = [
      new Tone.Synth().toDestination(),
      new Tone.Synth().toDestination(),
      new Tone.MetalSynth().toDestination(),
      new Tone.PluckSynth().toDestination(),
    ];
    setSynths(synths);
    return () => {
      synths.forEach(synth => synth.dispose());
    };
  }, []);

  const handleStepClick = useCallback((trackIndex, stepIndex) => {
    setSteps(prevSteps => {
      const newSteps = [...prevSteps];
      newSteps[trackIndex][stepIndex] = !newSteps[trackIndex][stepIndex];
      return newSteps;
    });
  }, []);

  const loops = useMemo(() => {
    if (synths.length) {
      return synths.map((synth, index) => {
        return new Tone.Sequence((time, step) => {
          if (steps[index][step]) {
            synth.triggerAttackRelease('C4', '8n', time);
          }
        }, new Array(16).fill(0).map((_, i) => i), '16n').start(0);
      });
    }
  }, [synths, steps]);

  useEffect(() => {
    return () => {
      if (loops?.length) {
        loops.forEach(loop => loop.stop(0));
      }
    };
  }, [loops]);

    const playPause = useCallback(async () => {
    if (isPlaying) {
      Tone.Transport.stop();
      Tone.Transport.bpm.value = 120;
      Tone.Transport.position = 0;
    } else {
      if (Tone.getContext().state !== 'running') {
        await Tone.start()
      }
      Tone.Transport.start();
    }
    setIsPlaying((prev) => !prev);
  }, [isPlaying, setIsPlaying]);

  return (
      <div>
        {steps.map((track, trackIndex) => (
            <div key={trackIndex}>
              {track.map((step, stepIndex) => (
                  <div
                      key={`${trackIndex}-${stepIndex}`}
                      style={{
                        display: 'inline-block',
                        width: 20,
                        height: 20,
                        border: '1px solid black',
                        background: step ? 'black' : 'white',
                      }}
                      onClick={() => handleStepClick(trackIndex, stepIndex)}
                  />
              ))}
            </div>
        ))}
        <button onClick={playPause}>play/pause</button>
      </div>
  );
}

export default StepSequencer;


