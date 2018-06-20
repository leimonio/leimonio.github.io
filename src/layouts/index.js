import React from 'react'
import get from 'lodash/get'

import Header from '../components/Header'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components';

const PageContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(30)};
  padding: 0 ${rhythm(3 / 4)} ${rhythm(1.5)};
`;

class Template extends React.Component {
  render() {
    const { children } = this.props
    const githubUrl = get(this, 'props.data.site.siteMetadata.githubUrl')
    const twitterUrl = get(this, 'props.data.site.siteMetadata.twitterUrl')

    return (
      <PageContent>
        <Header githubUrl={githubUrl} twitterUrl={twitterUrl} />
        {children()}
      </PageContent>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        twitterUrl
        githubUrl
      }
    }
  }
`
