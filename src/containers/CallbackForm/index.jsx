import React from 'react'
import cx from 'classnames'
import styles from './callback.module.css'

import { Card } from 'components/Card'
import { Header } from 'components/Header'
import { Input } from 'components/Input'
import { Button } from 'components/Button'

const CallbackForm = ({ className, ...props }) => {
  const handleSubmit = event => {
    event.preventDefault()
    console.log('call back me please!11')
  }
  return (
    <Card className={cx(className, styles.card)} {...props}>
      <Header as="h3">Форма обратной связи</Header>
      <p>Оставьте свой номер телефона и мы вам перезвоним</p>
      <form onSubmit={handleSubmit} className={cx(styles.form)}>
        <Input name="kek" label="Ваше имя" />
        <Input name="shrek" label="Номер телефона" />
        <Button type="submit" className={styles.button}>
          Позвоните мне
        </Button>
      </form>
    </Card>
  )
}

export { CallbackForm }
