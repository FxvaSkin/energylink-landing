import React from 'react'
import cx from 'classnames'
import styles from './input.module.css'

const Input = ({ name, label, className, ...props }) => {
  if (!name) throw new Error('Param `name` is required')
  return (
    <div className={cx(styles.container)}>
      <input
        type="text"
        id={name}
        className={cx(styles.input, className)}
        placeholder="_"
        {...props}
      />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
    </div>
  )
}

export { Input }
