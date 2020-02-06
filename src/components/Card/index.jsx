import React from 'react'
import cx from 'classnames'
import styles from './card.module.css'
import Image from '../image'

const Card = ({
  hoverable = false,
  imageData,
  children,
  className,
  footer = true,
  ...props
}) => {
  return (
    <article
      className={cx(styles.card, hoverable && styles.hoverable, className)}
      {...props}
    >
      {imageData && (
        <header className={cx(styles.header)}>
          <Image data={imageData} />
        </header>
      )}
      <main className={cx(styles.main)}>{children}</main>
      {footer && footer}
    </article>
  )
}

export { Card }
