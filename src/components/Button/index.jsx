import React from 'react'
import cx from 'classnames'
import styles from './button.module.css'

const Button = ({ children, className, ...props }) => (
  <button type="submit" className={cx(styles.button, className)} {...props}>
    {children}
  </button>
)

export { Button }
