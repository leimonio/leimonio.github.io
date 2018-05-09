import Typography from 'typography'
import Anonymous from './dist/src/utils/typography-anonymous'

Anonymous.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
  },
})

const typography = new Typography(Anonymous)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
