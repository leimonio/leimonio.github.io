import React from 'react'

import Header from '../components/Header'
import { rhythm, scale } from '../utils/typography'

const stylesHeader = {
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: rhythm(24),
  padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)}`,
};

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div style={stylesHeader}>
        <Header />
        {children()}
      </div>
    )
  }
}

export default Template
