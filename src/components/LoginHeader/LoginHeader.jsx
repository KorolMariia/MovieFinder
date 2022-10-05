import './LoginHeader.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import ButtonLogOut from '../Buttons/ButtonLogOut/ButtonLogOut';

function LoginHeader() {
  const { userName } = useSelector((state) => state);

  return (
    <div className="login-header">
      <h3>Hello, {userName} </h3>
      <ButtonLogOut />
    </div>
  );
}

export default LoginHeader;
