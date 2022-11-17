import Layout from "../components/header/Layout";
import "../styles/css/globals.css";

function MyApp({ Component, pageProps }) {
  return (
     <Layout>
      <Component {...pageProps} />
     </Layout>
  );
}

export default MyApp;