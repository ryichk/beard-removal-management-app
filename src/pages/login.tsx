import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth, Hub } from 'aws-amplify';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Login: NextPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          setUser(data);
          break;
        case 'signOut':
          setUser(null);
          break;
      }
    });

    Auth.currentAuthenticatedUser()
      .then((currentUser) => setUser(currentUser))
      .catch(() => console.log('Not signed in.'));

    return unsubscribe;
  });

  return (
    <div>
      <button
        onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}
      >
        Open Google
      </button>
    </div>
  );
};

export default Login;
