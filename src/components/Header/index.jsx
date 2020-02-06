import React from 'react'
import cx from 'classnames'
import styles from './header.module.css'

const Header = ({ as: As = 'h1', children, className, ...props }) => {
  return (
    <As className={cx(styles.header, className)} {...props}>
      {children}
    </As>
  )
}

export { Header }
