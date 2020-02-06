import React from 'react'
import cx from 'classnames'
import styles from './banner.module.css'

const Banner = () => (
  <section id="home" className={cx(styles.container)}>
    <div className={cx(styles.content)}>
      <h1 className={cx(styles.logo)}>ТОО "Energy Link"</h1>
      <p className={cx(styles.description)}>
        <span>Промышленная Автоматика</span>
        <span>Системы Управления</span>
        <span>Прикладное программирование</span>
      </p>
    </div>
  </section>
)

export { Banner }
