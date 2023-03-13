import * as React from 'react'
import PropTypes from 'prop-types'
import FocusLock from 'react-focus-lock'
import { css } from '@stitches/react'
import { useSpring, animated, config } from 'react-spring'
import cx from 'classnames'

import DialogBackground from './DialogBackground'

const Dialog = ({ children, className, style = {}, size = 'md', close, ...rest }) => {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(+70px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.stiff,
  })

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      close()
    }
  }

  return (
    <FocusLock returnFocus>
      <DialogBackground close={close}>
        <animated.div
          tabIndex={'-1'}
          style={{ ...style, ...props }}
          className={cx('ui-dialog', className, styles({ size }).toString())}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={handleKeyDown}
          {...rest}
        >
          {children}
        </animated.div>
      </DialogBackground>
    </FocusLock>
  )
}

export default Dialog

Dialog.propTypes = {
  close: PropTypes.func,
}

const styles = css({
  position: 'relative',
  width: '100%',
  maxWidth: ' 720px',
  maxHeight: 'calc(100vh - 140px)',
  padding: '0 30px',
  background: 'transparent',
  overflowY: 'auto',
  overflowX: 'hidden',
  '&:focus': {
    outline: 'none',
  },
  '&::-webkit-scrollbar': {
    display: 'none',
    width: 0,
    background: 'transparent',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  variants: {
    size: {
      lg: {
        maxWidth: '1040px',
      },
    },
  },
})
