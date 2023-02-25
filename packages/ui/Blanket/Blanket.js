import React from 'react'
import { css } from '@stitches/react'
import { useSpring, animated } from 'react-spring'
import cx from 'classnames'

const Blanket = () => {
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 100 },
  })
  return (
    <animated.div
      style={props}
      className={cx('ui-blanket', styles().toString())}
    />
  )
}

export default Blanket

const styles = css({
  position: 'fixed',
  zIndex: 9999,
  top: 0,
  left: 0,
  width: '100%',
  height: ' 100%',
  background: 'rgba(0, 0, 0, 0.22)',
})
