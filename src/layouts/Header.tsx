// import Link from 'next/link';
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface User {
  username: string;
  attributes: {
    email: string;
    email_verified: boolean;
    identities: string;
    sub: string;
  };
  preferredMFA: string;
  userDataKey: string;
}

export const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState<null | User>(null);

  const handleSignOut = () => {
    Auth.signOut()
      .then(() => setUser(null))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const isSignin = () => {
      Auth.currentAuthenticatedUser()
        .then((currentUser) => {
          setUser(currentUser);
        })
        .catch((error) => {
          if (error) {
            router.push('/login');
          }
        });
    };
    isSignin();
  }, []);

  return (
    <>
      <div className='flex'>
        <h1 className='text-xl font-bold w-full'>脱毛管理アプリ</h1>
        {/* <div className='flex justify-end w-full'>
          <Link href='/contract'>
            <a className='link link-secondary m-1'>契約内容</a>
          </Link>
          <Link href='/progress'>
            <a className='link link-secondary m-1'>経過観測</a>
          </Link>
        </div> */}
        {user ? (
          <p>{user.attributes.email}</p>
        ) : (
          <button className='btn btn-sm btn-link' onClick={() => handleSignOut()}>
            Sign Out
          </button>
        )}
      </div>
      <hr className='mt-5' />
    </>
  );
};
