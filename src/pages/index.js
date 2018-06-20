import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components';

import { rhythm } from '../utils/typography'

const Row = styled.article`
  display: flex;
  align-items: center;
`;

const Date = styled.time`
  margin: 0 ${rhythm(1 / 2)} 0 0;
`;

const Year = styled.h3`
  margin-top: ${rhythm(1.5)};
  margin-bottom: 0;
`;

const Title = styled.h4`
  margin: 0;
  line-height: ${rhythm(1.5)};
`;

const TitleLink = styled(Link)`
  line-height: ${rhythm(1.5)};
  box-shadow: 'none';
`;

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
                <Year>
                  {node.frontmatter.year}
                  <span> ¬</span>
                </Year>
              )}
              <Row key={node.fields.slug}>
                <Date>{node.frontmatter.date}.</Date>
                <Title>
                  <TitleLink to={node.fields.slug}>
                    {title}
                  </TitleLink>
                </Title>
              </Row>
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
