import React from 'react'
import { Link } from 'gatsby'
import cx from 'classnames'
import styles from './header.module.css'

import { Menu, Item } from 'components/Nav'

import { usePageOnTop } from 'hooks/usePageOnTop'

const Header = ({ items }) => {
  const isPageOnTop = usePageOnTop(15)

  return (
    <header className={cx(styles.header, isPageOnTop && styles.onTop)}>
      <div className={cx(styles.headerContent)}>
        <h1 className={cx(styles.logo)}>
          <Link
            to="#home"
            className={cx(styles.logoLink, isPageOnTop && styles.onTop)}
          >
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
            <Item
              key={item.key}
              className={cx(styles.item, isPageOnTop && styles.onTop)}
            >
              <Link to={item.to}>{item.title}</Link>
            </Item>
          ))}
        </Menu>
      </div>
    </header>
  )
}

export { Header }
