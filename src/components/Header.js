import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'
import GithubIcon from '../../public/github.svg';
import TwitterIcon from '../../public/twitter.svg';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: rhythm(1),
    marginBottom: rhythm(1),
    paddingBottom: rhythm(1 / 2),
    borderBottom: '1px solid #ededed',
  },
  title: {
    fontSize: '16px',
    lineHeight: rhythm(4 / 3),
    margin: 0,
    fontWeight: 400,
  },
  navItem: {
    fontSize: rhythm(1),
    lineHeight: rhythm(4 / 3),
  },
  list: {
    listStyleType: 'none',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
  },
  listItem: {
    display: 'inline-block',
    margin: 0,
    marginLeft: rhythm(1 / 2),
  },
  socialIcon: {
    height: rhythm(0.8),
    opacity: 0.4,
    display: 'flex',
    alignSelf: 'center',
  }
}

const Header = () => (
  <nav style={styles.root}>
    <h1 style={styles.title}>
      <Link to={'/'}>leimon.io</Link>
    </h1>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        <Link to={'/'}>Index</Link>
      </li>
      <li style={styles.listItem}>
        <Link to={'/about'}>About</Link>
      </li>
      <li style={styles.listItem}>
        <a href="" target="_blank">
          <img style={styles.socialIcon} src={GithubIcon} alt="github" />
        </a>
      </li>
      <li style={styles.listItem}>
        <a href="" target="_blank">
          <img style={styles.socialIcon} src={TwitterIcon} alt="twitter" />
        </a>
      </li>
    </ul>
  </nav>
)

export default Header;