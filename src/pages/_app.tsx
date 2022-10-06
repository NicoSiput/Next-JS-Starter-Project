import { AppProps } from 'next/app';
import Layout from '@layouts/index';

// NOTE list your css here
import '@styles/global.css';

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
