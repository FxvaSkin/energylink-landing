import React from 'react'
import cx from 'classnames'
import styles from './card.module.css'

const Card = ({
  hoverable = false,
  image,
  alt,
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
      {image && (
        <header className={cx(styles.header)}>
          <img src={image} className={styles.image} alt={alt} />
        </header>
      )}
      <main className={cx(styles.main)}>{children}</main>
      {footer && footer}
    </article>
  )
}

export { Card }
