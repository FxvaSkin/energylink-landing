import React from 'react'
import cx from 'classnames'
import styles from './callback.module.css'

import { Card } from 'components/Card'
import { Header } from 'components/Header'
import { Input } from 'components/Input'
import { Button } from 'components/Button'

const CallbackForm = ({ className, ...props }) => {
  const handleSubmit = async event => {
    event.preventDefault()

    const response = await fetch('http://localhost:34567/send')
    const data = await response.json()

    console.log(data)
  }
  return (
    <Card className={cx(className, styles.card)} {...props}>
      <Header as="h3">Форма обратной связи</Header>
      <p>Оставьте свой номер телефона и мы вам перезвоним</p>
      <form onSubmit={handleSubmit} className={cx(styles.form)}>
        <Input name="name" label="Ваше имя" />
        <Input name="phone" label="Номер телефона" required />
        <Button type="submit" className={styles.button}>
          Позвоните мне
        </Button>
      </form>
    </Card>
  )
}

export { CallbackForm }
