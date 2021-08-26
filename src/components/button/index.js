import React from 'react'
import PropTypes from 'prop-types'

import classes from './style.scss'

const Button = ({ btnText, buttonStyle }) => {
  return (
    <button className={classes['button']} style={buttonStyle}>
      {btnText}
    </button>
  )
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,
}
export default Button
