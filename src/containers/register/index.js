import React, { Fragment } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Button from '../../components/button'

import classes from './style.m.scss'

const Register = ({ config }) => {
  const renderInputs = config.formInputs.map((item, idx) => {
    return (
      <div className={classes['main__section-right__form__content']} key={idx}>
        <input
          type={item.inputType}
          id={item.inputId}
          name={item.inputName}
          className={classes['main__section-right__form__input']}
        />
        <label
          htmlFor="fName"
          className={classes['main__section-right__form__label']}
        >
          {item.label}
        </label>
      </div>
    )
  })
  return (
    <main className={classes['main']}>
      <section className={classes['main__section-left']}>
        <div className={classes['main__section-left__content']}>
          <div className={classes['main__section-left__content__heading']}>
            {config.sectionLeftHeading}
          </div>
          <div className={classes['main__section-left__content__text']}>
            {config.sectionLeftText}
          </div>
        </div>
      </section>
      <section className={classes['main__section-right']}>
        <form className={classes['main__section-right__form']}>
          {renderInputs}
          <Button
            btnText={config.buttonText}
            buttonStyle={{ width: '100%', marginBottom: '15px' }}
          />
        </form>
      </section>
      <div className={classes['main__shadow-div']}></div>
    </main>
  )
}

export default Register
