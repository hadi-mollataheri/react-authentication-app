import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  // loginWithRedirect starts the authentication process
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return !isAuthenticated && (
    <button
      onClick={() => loginWithRedirect()}
      className='border border-black p-1 rounded-md m-1 bg-green-500'
    >
      Log In
    </button>
  );
}

export default LoginButton;
