import React from 'react'
import get from 'lodash/get'

import Header from '../components/Header'
import { rhythm, scale } from '../utils/typography'

const stylesHeader = {
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: rhythm(30),
  padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)}`,
};

class Template extends React.Component {
  render() {
    const { children } = this.props
    const githubUrl = get(this, 'props.data.site.siteMetadata.githubUrl')
    const twitterUrl = get(this, 'props.data.site.siteMetadata.twitterUrl')

    return (
      <div style={stylesHeader}>
        <Header githubUrl={githubUrl} twitterUrl={twitterUrl} />
        {children()}
      </div>
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