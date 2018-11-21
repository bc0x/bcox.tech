import Menu from '../components/Menu'
import Head from 'next/head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <>
    <Head>
      <title>bcox.tech</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    </Head>
    <Menu />
    {props.children}
  </>
)

export default Layout