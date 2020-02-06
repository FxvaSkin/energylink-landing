import React from 'react'
import cx from 'classnames'
import styles from './footer.module.css'

const Footer = () => (
  <footer className={cx(styles.footer)}>
    <div className={styles.content}>
      <p className={styles.copyright}>
        © 2014–{new Date().getFullYear()}, ТОО «Energy Link», официальный сайт
      </p>
      <span className={styles.gatsby}>
        Сделано на{' '}
        <a href="https://www.gatsbyjs.org" className={styles.link}>
          Gatsby
        </a>
        <span>🖤</span>
      </span>
    </div>
  </footer>
)

export { Footer }
