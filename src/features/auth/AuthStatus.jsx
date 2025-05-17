import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './authSlice';

const AuthStatus = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handleLogin = () => {
    const fakeUser = { name: 'John Doe', email: 'john@example.com' };
    dispatch(login(fakeUser));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h2>Redux Auth Example</h2>
      {isAuthenticated ? (
        <>
          <p>Welcome, {user.name}!</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default AuthStatus;
