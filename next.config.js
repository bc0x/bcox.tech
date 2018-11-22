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
  const withCSS = require('@zeit/next-css')
  const withMDX = require("@zeit/next-mdx")({
    extension: /\.mdx?$/
  })

  return withCSS(withMDX({
    pageExtensions: ["js", "md", "mdx"]
  }))
}