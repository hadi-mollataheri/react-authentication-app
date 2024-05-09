import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();
  return isAuthenticated && (
    <button
      onClick={() => logout()}
      className='border border-black p-1 rounded-md m-1 bg-red-500'
    >
      Log out
    </button>
  );
}

export default LogoutButton;
