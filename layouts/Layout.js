import Menu from "../components/Menu";
import Head from "next/head";
import Footer from "../components/Footer";

const Layout = props => (
  <>
    <Head>
      <title>bcox.tech</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="./../static/favicon.ico" type="image/x-icon" />
    </Head>
    <Menu {...props} />
    {props.children}
    <Footer />
  </>
);

export default Layout;
