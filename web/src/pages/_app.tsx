import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppContextProvider } from '../context/authentication';
import { Amplify } from 'aws-amplify';
import { cognito } from '../utils/aws-exports';
import { Modal, Navbar } from '../components';

Amplify.configure({ ...cognito });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Modal />
      <Navbar />
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
