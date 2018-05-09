import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'

// if (location.pathname === rootPath) {
//     header = (
//       <h1
//         style={{
//           ...scale(1.5),
//           marginBottom: rhythm(1.5),
//           marginTop: 0,
//         }}
//       >
//         <Link
//           style={{
//             boxShadow: 'none',
//             textDecoration: 'none',
//             color: 'inherit',
//           }}
//           to={'/'}
//         >
//           Gatsby Starter Blog
//         </Link>
//       </h1>
//     )
//   } else {
//     header = (
//       <h3
//         style={{
//           fontFamily: 'Montserrat, sans-serif',
//           marginTop: 0,
//           marginBottom: rhythm(-1),
//         }}
//       >
//         <Link
//           style={{
//             boxShadow: 'none',
//             textDecoration: 'none',
//             color: 'inherit',
//           }}
//           to={'/'}
//         >
//           Gatsby Starter Blog
//         </Link>
//       </h3>
//     )
//   }

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
  },
  link: {
    textDecoration: 'none',
    boxShadow: 'none',
  },
  navItem: {
    fontSize: rhythm(1),
    lineHeight: rhythm(4 / 3),
  },
  list: {
    listStyleType: 'none',
    margin: 0,
  },
  listItem: {
    display: 'inline-block',
    margin: 0,
    marginLeft: rhythm(1 / 2),
  },
}

const Header = () => (
  <nav style={styles.root}>
    <h1 style={styles.title}>
      <Link style={styles.link} to={'/'}>leimon.io</Link>
    </h1>
    <ul style={styles.list}>
      <li style={styles.listItem}>
        <Link style={styles.link} to={'/'}>Index</Link>
      </li>
      <li style={styles.listItem}>
        <Link style={styles.link} to={'/about'}>About</Link>
      </li>
    </ul>
  </nav>
)

export default Header;