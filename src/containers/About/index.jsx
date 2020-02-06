import React from 'react'
import cx from 'classnames'
import styles from './about.module.css'
import { Section } from 'components/Section'
import { Header } from 'components/Header'

const ListItem = ({ className, ...props }) => (
  <li className={cx(styles.listItem, className)} {...props} />
)

const About = () => (
  <Section id="about">
    <Header as="h2">Основные виды деятельности</Header>
    Разработка и внедрение систем автоматики технологических процессов (ПЛК,
    средства HMI, SCADA, Преобразователи частоты, датчики, полевые шины и сети).
    <ul>
      <ListItem>Разработка алгоритмов управления</ListItem>
      <ListItem>Подбор оборудования автоматизации</ListItem>
      <ListItem>Программирование контроллеров и операторских панелей</ListItem>
      <ListItem>Разработка систем SCADA (Диспетчеризация)</ListItem>
      <ListItem>
        Ремонт и восстановление, модернизация систем автоматики промышленного
        оборудования
      </ListItem>
    </ul>
    Замена устаревшего и неисправного оборудования и ПО (ПЛК, HMI, SCADA, ПЧ)
    Восстановление, конвертирование, модернизация прикладных программ ПЛК, HMI и
    SCADA, настройка преобразователей частоты.
  </Section>
)

export { About }
