import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm } from '../utils/typography'

const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  sectionYear: {
    marginTop: rhythm(1.5),
    marginBottom: 0,
  },
  date: {
    margin: `0 ${rhythm(1 / 2)} 0 0`,
  },
  title: {
    margin: 0,
    lineHeight: rhythm(1.5),
  },
  titleLink: {
    lineHeight: rhythm(1.5),
    boxShadow: 'none',
  },
}

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
      .filter(post => get(post, 'node.frontmatter.isArticle'))
      .reduce((posts, curPost) => {
        curPost.isFirstOfYear = posts.filter(post => (
          post.node.frontmatter.year === curPost.node.frontmatter.year
        )).length === 0;
        return [...posts, curPost];
      }, []);

    return (
      <div>
        <Helmet title={`Home | ${siteTitle}`} />
        {posts.map(({ node, isFirstOfYear }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div>
              {isFirstOfYear && (
                <h3 style={styles.sectionYear}>
                  {node.frontmatter.year}
                  <span> ¬</span>
                </h3>
              )}
              <article style={styles.row} key={node.fields.slug}>
                <time style={styles.date}>{node.frontmatter.date}.</time>
                <h4 style={styles.title}>
                  <Link style={styles.titleLink} to={node.fields.slug}>
                    {title}
                  </Link>
                </h4>
              </article>
            </div>
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
            isArticle
          }
        }
      }
    }
  }
`
