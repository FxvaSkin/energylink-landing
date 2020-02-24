import React from 'react'
import cx from 'classnames'
import styles from './input.module.css'

import { IMaskInput } from 'react-imask'

const Input = ({ name, label, onClick, className, ...props }) => {
  if (!name) throw new Error('Param `name` is required')
  return (
    <div className={cx(styles.container)}>
      <IMaskInput
        id={name}
        name={name}
        type="text"
        className={cx(styles.input, className)}
        placeholder=" "
        autoComplete="off"
        onClick={onClick}
        {...props}
      />
      <label htmlFor={name} onClick={onClick} className={styles.label}>
        {label}
      </label>
    </div>
  )
}

export { Input }
