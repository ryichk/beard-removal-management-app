import 'tailwindcss/tailwind.css';
import { Amplify } from 'aws-amplify';
import type { AppProps } from 'next/app';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
