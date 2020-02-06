import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import styles from './header.module.css'

import { Menu, Item } from 'components'

const Header = ({ siteTitle, items }) => (
  <header className={cx(styles.header)}>
    <div className={cx(styles.headerContent)}>
      <h1 className={cx(styles.logo)}>
        <Link to="#home" className={styles.logoLink}>
          <svg
            className={cx(styles.logoIcon)}
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            fill="none"
            shape-rendering="geometricPrecision"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          <span>Energy Link</span>
        </Link>
      </h1>
      <Menu>
        {items.map(item => (
          <Item key={item.key}>
            <Link to={item.to}>{item.title}</Link>
          </Item>
        ))}
      </Menu>
    </div>
  </header>
)

export { Header }
