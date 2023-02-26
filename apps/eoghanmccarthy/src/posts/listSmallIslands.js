import React from 'react'

const data = [
  { name: 'enoshima', coords: '35.3011552,139.4766161,12z' },
  { name: 'great barrier island', coords: '-36.1991389,175.2885867,12z' },
  { name: `Île-d'Arz`, coords: '47.5856929,-2.8106753,12z' },
  { name: 'iriomote-jima', coords: '24.3465531,123.7309762,12z' },
  { name: 'valentia island', coords: '51.907885,-10.3916423,12z' },
]

const Post = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {data.map(({ name, coords }, i) => {
        return (
          <a
            key={i}
            style={{
              wordBreak: 'break-all',
              textTransform: 'lowercase',
            }}
            href={`https://www.google.com/maps/@${coords}`}
            target={'_blank'}
          >
            {name}
          </a>
        )
      })}
    </div>
  )
}

export default Post
