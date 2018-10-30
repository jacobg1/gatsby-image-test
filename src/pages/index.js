import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

import Layout from '../components/layout'
import Image from '../components/image'
import Img from 'gatsby-image'

 const StyledImage = styled(Img)`
  max-width: 300px;
 `
const IndexPage = (props) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <StyledImage fluid={props.data.imageOne.childImageSharp.fluid} />

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage


export const pageQuery = graphql `
  query {
    imageOne: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`