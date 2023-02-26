import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../Slices/loginSlice';

function Login() {
  const loginObj = useSelector((state) => state.login);
  const dispatch = useDispatch();
  return (
    <>
      {loginObj.status ? <p>You are logged in</p> : <p>Please Login</p>}
      {loginObj.status ? (
        <button onClick={() => dispatch(logout())}>Log Out</button>
      ) : (
        <button onClick={() => dispatch(login())}>Log In</button>
      )}
    </>
  );
}

export default Login;
