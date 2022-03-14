import 'tailwindcss/tailwind.css';
import { Amplify } from 'aws-amplify';
import type { AppProps } from 'next/app';

import awsconfig from '../aws-exports';

if (typeof window !== 'undefined') {
  const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/),
  );
  const [localRedirectSignIn, productionRedirectSignIn] = awsconfig.oauth.redirectSignIn.split(',');

  const [localRedirectSignOut, productionRedirectSignOut] =
    awsconfig.oauth.redirectSignOut.split(',');

  const updatedAwsConfig = {
    ...awsconfig,
    oauth: {
      ...awsconfig.oauth,
      redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
      redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
    },
  };

  Amplify.configure(updatedAwsConfig);
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
