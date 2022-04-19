import Head from 'next/head';
import Header from '@parts/Header';
import Footer from '@parts/Footer';

const Default = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Popbox Asia Team" />
        <title>PopBox - Box And Beyond</title>

        {/* NOTE list all your meta tag here */}
      </Head>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
export default Default;
