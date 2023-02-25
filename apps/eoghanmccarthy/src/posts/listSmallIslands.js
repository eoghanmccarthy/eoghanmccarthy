import React from 'react'

const data = [
  { name: 'iriomote-jima', coords: '24.3465531,123.7309762,12z' },
  { name: 'iriomote-jima', coords: '24.3465531,123.7309762,12z' },
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
