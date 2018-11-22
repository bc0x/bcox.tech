import App, { Container } from 'next/app';
import Layout from '../layouts/Layout'
import 'bulma/css/bulma.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;