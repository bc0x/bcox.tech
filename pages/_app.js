import App, { Container } from "next/app";
import Layout from "../layouts/Layout";
import "./../styles.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faStackOverflow,
  faLinkedinIn,
  faCreativeCommons,
} from "@fortawesome/free-brands-svg-icons";
import { faHandPeace, faHeart } from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

library.add(
  faGithub,
  faHandPeace,
  faHeart,
  faStackOverflow,
  faLinkedinIn,
  faCreativeCommons
);

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
