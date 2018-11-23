let PHASE_PRODUCTION_SERVER;

try {
  ({ PHASE_PRODUCTION_SERVER } = require('next-server/constants'));
} catch (error) {
  ({ PHASE_PRODUCTION_SERVER } = require('next/constants'));
}

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      /* production only config */
    }
  }
  const withCss = require('@zeit/next-css')
  const withSass = require('@zeit/next-sass')
  const withMDX = require('@zeit/next-mdx')({
    extension: /\.mdx?$/
  })
  return withCss(withSass(withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
    cssModules: false
  })))
}