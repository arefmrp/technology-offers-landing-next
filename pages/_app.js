import 'bootstrap/dist/css/bootstrap.rtl.css'
import '@popperjs/core'

import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (<div>
    <Head>
      <title>technology-offers</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    </Head>
    <Component {...pageProps} />
  </div>)
}

export default MyApp
