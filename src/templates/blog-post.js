import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import styled from 'styled-components';

import { rhythm, scale } from '../utils/typography'

const PostTitle = styled.h1`
  margin-bottom: ${rhythm(0.5)};
`;

const PostTime = styled.h4`
  margin: 0 0 ${rhythm(1.5)};
`;

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`;

const BottomNavLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div>
        <Helmet title={`${post.frontmatter.seoTitle || post.frontmatter.title} | ${siteTitle}`} />
        <PostTitle>{post.frontmatter.title}</PostTitle>
        <PostTime>
          <time>{post.frontmatter.date}</time>
        </PostTime>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Divider />

        <BottomNavLinks>
          {previous && (
            <li>
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </BottomNavLinks>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        seoTitle
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
