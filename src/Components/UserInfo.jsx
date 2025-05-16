import React, { useContext } from 'react';
import GlobalStateContext from '../context/GlobalStateContext';

const UserInfo = () => {
  const { user, login } = useContext(GlobalStateContext);

  return (
    <div>
      {user ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <>
          <p>Please log in.</p>
          <button onClick={() => login('Vinee')}>Log In as Vinee</button>
        </>
      )}
    </div>
  );
};

export default UserInfo;
