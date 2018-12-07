import App, { Container } from "next/app";
import Layout from "../layouts/Layout";
import "./../styles.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faStackOverflow,
  faLinkedinIn,
  faCreativeCommons,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
import { faHandPeace, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

library.add(
  faGithub,
  faHandPeace,
  faHeart,
  faStackOverflow,
  faLinkedinIn,
  faCreativeCommons,
  faTwitterSquare,
  faAngleDoubleDown
);

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <Layout route={router.route}>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
