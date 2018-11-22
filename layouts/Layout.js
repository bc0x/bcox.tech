import Menu from '../components/Menu'
import Head from 'next/head'

const Layout = (props) => (
  <>
    <Head>
      <title>bcox.tech</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="icon" href="./../static/favicon.ico" type="image/x-icon" />
    </Head>
    <Menu />
    {props.children}
  </>
)

export default Layout