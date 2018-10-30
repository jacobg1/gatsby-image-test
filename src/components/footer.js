import React from 'react'
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const Container = styled.div `
        width: 100%;
        height: 150px;
        ${'' /* background-color: greenyellow; */}
    `

const Name = styled.p `
        font-size: 15px;
        color: red;
        float: left;
    `;
const FooterImage = styled(props => <Img {...props} />)`
  width: 100px;
  height: auto;
  float: right;
`;
const Footer = ({ data }) => (

    <Container>
      <Name>
        {data.site.siteMetadata.title}
      </Name>
      {/* <FooterImage className="test"/> */}
    <FooterImage fixed={data.placeholderImage.childImageSharp.fixed}/>
    <FooterImage fluid={data.placeholderImageTwo.childImageSharp.fluid}/>
    <FooterImage sizes = {data.placeholderImageThree.childImageSharp.sizes}/>

    </Container>

)
export default props => (
    <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        },
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fixed(width: 125, height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        },
        placeholderImageTwo: file(relativePath: { eq: "gatsby-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        placeholderImageThree: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp{
              sizes(
                traceSVG: {
                  turnPolicy: TURNPOLICY_MINORITY
                  blackOnWhite: false
                  color: "#ffe3ed"
                }
                toFormat: WEBP
                
              ) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
        }
      }
    `}
    render={data => <Footer data={data} {...props} />}
  />
)


// const Image2 = ({ className, children }) => (
    
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//           childImageSharp {
//             fluid(maxWidth: 1000) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         },
//         site: {
//           siteMetadata {
//             title
//           }
//         }
//       },
      
//     `}
//     render={
//         data => <Img className={className} fluid={data.placeholderImage.childImageSharp.fluid} {...children} {...props}/> } 
//   />
// )

// export default Footer
// export default props => (
//   <StaticQuery
//     query={graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => <Footer data={data} {...props} />}
//   />
// )

