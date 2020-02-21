import React, { useState } from 'react'
import cx from 'classnames'
import styles from './callback.module.css'

import { Card } from 'components/Card'
import { Header } from 'components/Header'
import { Input } from 'components/Input'
import { Button } from 'components/Button'

const CallbackForm = ({ className, ...props }) => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleChangeName = event => {
    const { value } = event.currentTarget
    setName(value)
  }
  const handleChangePhoneNumber = event => {
    const { value } = event.currentTarget
    setPhoneNumber(value)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const response = await fetch('/.netlify/functions/send', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ name, phoneNumber }),
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card className={cx(className, styles.card)} {...props}>
      <Header as="h3">Форма обратной связи</Header>
      <p>Оставьте свой номер телефона и мы вам перезвоним</p>
      <form onSubmit={handleSubmit} className={cx(styles.form)}>
        <Input
          name="name"
          label="Ваше имя"
          onChange={handleChangeName}
          value={name}
        />
        <Input
          name="phoneNumber"
          label="Номер телефона"
          required
          onChange={handleChangePhoneNumber}
          value={phoneNumber}
        />
        <Button type="submit" className={styles.button}>
          Позвоните мне
        </Button>
      </form>
    </Card>
  )
}

export { CallbackForm }
