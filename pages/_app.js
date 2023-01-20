import Head from "next/head";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Career Vyas- The Perfect Guide</title>
        <meta name="google-site-verification" content="aW-3HTlrNOCU0JrumTViUW1OT4CbnvuNdkWMBtpQD14" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Career vyas Careervyas guidance mentorship mentoring platform students school colleges helping online educational education field knowledge exploring options opportunities profiles courses"
        />
        <link rel="icon" href="/favicon.ico" />
        
        <style>
          @import
          url(&apos;https://fonts.googleapis.com/css2?family=Sen&display=swap&apos;);
        </style>
      </Head>
      {/* <!-- Google tag (gtag.js) --> */}
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
