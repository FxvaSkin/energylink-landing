import React from 'react'
import styles from './contacts.module.css'
import { useStaticQuery } from 'gatsby'

import { CallbackForm } from 'containers/CallbackForm'

import { Section } from 'components/Section'
import { Header } from 'components/Header'

const MailIcon = props => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
    shape-rendering="geometricPrecision"
    {...props}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
)

const PhoneIcon = props => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
    shape-rendering="geometricPrecision"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
)

const Contacts = () => {
  const data = useStaticQuery(graphql`
    query ContactsQuery {
      site {
        siteMetadata {
          emails
          phoneNumbers
        }
      }
    }
  `)

  const { phoneNumbers, emails } = data.site.siteMetadata

  return (
    <Section id="contacts" contentClassName={styles.section}>
      <div>
        <Header as="h2">Контакты</Header>
        <p>У вас есть вопросы?</p>
        <p>Вы можете связаться с нами</p>

        {emails?.map(email => (
          <a href={`mailto:${email}`} className={styles.link}>
            <MailIcon className={styles.icon} />
            <span>{email}</span>
          </a>
        ))}
        {phoneNumbers?.map(phone => (
          <a href={`tel:${phone}`} className={styles.link}>
            <PhoneIcon className={styles.icon} />
            <span>{phone}</span>
          </a>
        ))}
      </div>

      <CallbackForm className={styles.callback} />
    </Section>
  )
}
export { Contacts }
