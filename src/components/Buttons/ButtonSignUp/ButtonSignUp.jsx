import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

function ButtonSignUp() {
  const navigate = useNavigate();

  function navigateToSignUp() {
    navigate('/signup');
  }
  return (
    <Button
      nameOfClass="button button-main"
      value="Sign Up"
      onClick={() => navigateToSignUp()}
    />
  );
}

export default ButtonSignUp;
