import React from 'react'
import Img from 'gatsby-image'

const Image = ({ data }) => {
  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      draggable={false}
    />
  )
}

export default Image
