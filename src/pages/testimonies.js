import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Sidenote from '../components/Sidenote'


export default ({ data: { site } }) => {
  
  return (
    <Layout site={site} >
        <Container>   
            
            <h1>Testimonies</h1>
            <Sidenote>
              <p>Richard has done an amazing job throughout his time at OUA trying to support product teams across the business. He juggles switching between consumer and customer experiences really well and trying to provide enough coverage for all of us. It is a great testament to his capabilities. I also really value the viewpoint that Richard can bring to the table on many other items - from how we might want to structure an experiment through to running that experiment.</p>
              <em>— Annabelle Parsons, Product manager at Open Universities Australia</em>
            </Sidenote> 
            <Sidenote>
              <p>I really like working with Richard - his direct, honest and blunt approach works with me as we have strong and real conversations, even if we don't always agree. The willingness to have these conversations is really superb and something more people at OUA need to get comfortable doing.</p>
              <em>— Annabelle Parsons, Product manager at Open Universities Australia</em>
            </Sidenote> 
            <Sidenote>
              <p>Richard helped guide the process of discovery, design and experimentation. Throughout, Richard is always a staunch advocate for the customer. I find Richard to be a great help in making sense of where our priorities should be, and how we can achieve our business goals while never (well, mostly never) compromising our principles. Developing new concepts and thinking big with Richard is unfailingly an inspiring and invigorating activity.</p>
              <em>— Asha Ioculari, Product manager at Open Universities Australia</em>
            </Sidenote> 
            <Sidenote>
              <p>Richard has been a great asset to helping me with the UX research this year. Richard has a great focus on customers and what they need. He has been so gracious in picking up the scattered threads, ideas and half baked thoughts and making them into actual research, prototypes and user concepts. Richard continuously improving on ideas and discussing new ways to solve a problem. He has helped me re-think the Student Management concept and how the data exchange and student experiences tie together.</p>
              <em>— Claire Helme, Product manager at Open Universities Australia</em>
            </Sidenote> 
            <Sidenote>
              <p>Richard has worked so hard this year between all the teams. Thanks Rich! As hard as it has been it has also been great to have you connect the dots between ideas and product teams.</p>
              <em>— Claire Helme, Product manager at Open Universities Australia</em>
            </Sidenote> 
            <Sidenote>
              <p>Richard played a pivotal role in helping develop and build the FTSX conversational journeys. He organised all our student interviews, participated in them and asked valuable questions which we may not have thought of otherwise. His insight into the customer is sharp and considered. It was great having along side us.</p>
              <em>— Lyndon Summers, Product manager at Open Universities Australia</em>
            </Sidenote> 
            <Sidenote>
              <p>As friendly as he is intelligent, Richard always has a way of coming up with great solutions for any UX problem. An excellent collaborator, I would consider Richard a prized asset within any creative team.</p>
              <em>— Samuel Ladlow, Creative Director at Tangent</em>
            </Sidenote> 
            <Sidenote>
              <p>Richard is an extremely versatile designer and project manager. He has the skills to work on a wide range of design technologies. It is rare to find a person who can combine creative flair, innovative design and technical understanding. He is always cool under pressure and understands his customer.</p>
              <em>— Steve Hart, Owner at RTSoftware</em>
            </Sidenote> 
            <Sidenote>
              <p>Richard is a cool headed, hard working, versatile designer and project manager. I've never worked with someone so adept at remaining cool under pressure. While we worked together at RT Software, Richard was the go-to man in times of trouble, probably because he was both conscientious and versatile. He was always cognisant of trending design as well as technology and was able to manage multiple, large scale projects at once while remaining friendly and fun to work with. He's sorely missed</p>
              <em>— Sebastian Hickey, 3D Designer at RTSoftware</em>
            </Sidenote> 
        </Container>
          <hr />
    </Layout>
  )
}

export const latestArticle = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    latestArticle: allMdx(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            title
            slug
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")

            slug
          }
        }
      }
    }
  }
`
