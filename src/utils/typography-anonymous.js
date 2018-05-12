import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const theme = {
  title: 'Anonymous',
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 5 / 2,
  googleFonts: [
    {
      name: 'Anonymous Pro',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  headerFontFamily: ['Anonymous Pro', 'Georgia', 'serif'],
  bodyFontFamily: ['Anonymous Pro', 'Georgia', 'serif'],
  bodyColor: 'hsla(0,0%,0%,0.9)',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: {
      fontFamily: ['Anonymous Pro', 'sans-serif'].join(','),
      fontSize: rhythm(1.5),
    },
    h3: {
      fontSize: rhythm(0.75),
    },
    time: {
      color: '#aaabd3',
      fontWeight: 400,
    },
    blockquote: {
      ...scale(1 / 5),
      color: gray(41),
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: rhythm(-1),
      borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    ul: {
      listStyle: 'disc',
    },
    'ul,ol': {
      marginLeft: 0,
    },
    [MOBILE_MEDIA_QUERY]: {
      'ul,ol': {
        marginLeft: rhythm(1),
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(2),
    },
    h6: {
      fontStyle: 'italic',
    },
    a: {
      color: '#56445d',
      textDecoration: 'none',
    },
    'a:hover,a:active': {
      boxShadow: '0 1px 0 0 currentColor',
    },
    'mark,ins': {
      background: '#007acc',
      color: 'white',
      padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
      textDecoration: 'none',
    },
  }),
}

export default theme