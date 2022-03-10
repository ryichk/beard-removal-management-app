import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth } from 'aws-amplify';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Login: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((currentUser) => {
        if (currentUser) {
          router.push('/');
        }
      })
      .catch(() => {
        console.log('Not signed in.');
      });
  });

  return (
    <div>
      <div className='card max-w-sm m-auto'>
        <div className='card-body'>
          <h2 className='card-title'>Sign In</h2>
          <button
            className='btn btn-accent'
            onClick={() =>
              Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
            }
          >
            Google SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
