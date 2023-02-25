import React from 'react'
import { useTrail, animated, config } from 'react-spring'

const Gallery = ({ list, onClick }) => {
  const trail = useTrail(list.length, {
    config: { ...config.gentle },
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    delay: 250,
  })

  return (
    <div className={'gallery'}>
      {trail.map(({ y, ...rest }, i) => {
        const { type, src, label } = list[i]
        return (
          <animated.figure
            key={i}
            style={{
              ...rest,
              transform: y.interpolate((y) => `translateY(${y}%)`),
            }}
            onClick={() => onClick(i)}
          >
            {type === 'image' ? (
              <img width="780" loading={'lazy'} src={src} title={label} />
            ) : type === 'video' ? (
              <video width="780" src={src} controls autoPlay />
            ) : null}
          </animated.figure>
        )
      })}
    </div>
  )
}

export default Gallery
