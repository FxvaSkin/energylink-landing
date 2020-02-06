import React from 'react'
import { SEO } from 'components'
import { Layout } from 'containers/Layout'
import { Banner } from 'containers/Banner'
import { About } from 'containers/About'
import { Contacts } from 'containers/Contacts'
import { Portfolio } from 'containers/Portfolio'
import { UsedIn } from 'containers/UsedIn'

import { useMatchPosition } from 'hooks/useMatchPosition'

const IndexPage = () => {
  useMatchPosition()
  return (
    <Layout>
      <SEO title="Energy Link" />
      <Banner />
      <About />
      <UsedIn />
      <Portfolio />
      <Contacts />
    </Layout>
  )
}

export default IndexPage
