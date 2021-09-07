import React from 'react'
import PropTypes from 'prop-types'

import classes from './style.m.scss'

const Button = ({ btnText, buttonStyle, handleClick }) => {
  return (
    <button
      className={classes['button']}
      style={buttonStyle}
      onClick={handleClick}
    >
      {btnText}
    </button>
  )
}

Button.defaultProps = {
  btnText: 'Submit',
}

Button.propTypes = {
  btnText: PropTypes.string,
  buttonStyle: PropTypes.object,
}
export default Button
