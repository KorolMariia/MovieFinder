import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

function ButtonLogin() {
  const navigate = useNavigate();

  function navigateToLogin() {
    navigate('/login');
  }
  return (
    <Button
      nameOfClass="button button-main"
      value="Login"
      onClick={() => navigateToLogin()}
    />
  );
}

export default ButtonLogin;
