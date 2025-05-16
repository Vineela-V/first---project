import React, { useContext } from 'react';
import GlobalStateContext from '../context/GlobalStateContext';

const UserInfo = () => {
  const { user, login, logout } = useContext(GlobalStateContext);

  return (
    <div>
      {user ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={() => login('Vinee')}>Login as Vinee</button>
        </>
      )}
    </div>
  );
};

export default UserInfo;
