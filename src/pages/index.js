import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

const styles = {
  row: {
    display:'flex',
    alignItems: 'center'
  },
  sectionYear: {
    marginTop: rhythm(1.5),
    marginBottom: 0,
  },
  date: {
    color: '#aaabd3',
    margin: `0 ${rhythm(1/2)} 0 0`,
  },
  title: {
    margin: 0,
    lineHeight: rhythm(1.5),
  },
  titleLink: {
    boxShadow: 'none',
    color: '#56445d',
    lineHeight: rhythm(1.5),
  }
};

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    
    return (
      <div>
        <Helmet title={siteTitle} />
        <h3 style={styles.sectionYear}>{posts[0].node.frontmatter.year}<span> ¬</span></h3>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          
          return (
            <article style={styles.row} key={node.fields.slug}>
              <time style={styles.date}>{node.frontmatter.date}</time>
              <h4 style={styles.title}>
                <Link style={styles.titleLink} to={node.fields.slug}>
                  {title}
                </Link>
              </h4>
            </article>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            year: date(formatString: "YYYY")
            date(formatString: "MMMM DD")
            title
          }
        }
      }
    }
  }
`
