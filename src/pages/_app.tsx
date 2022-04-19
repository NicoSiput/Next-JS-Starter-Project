import App, { AppProps } from 'next/app';
import Layout from '@layouts/index';
import Head from 'next/head';

// NOTE list your css here
import '@styles/global.css';

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default MyApp;
