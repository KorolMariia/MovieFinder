import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

export default function ButtonLogOut() {
  const navigate = useNavigate();

  function navigateToLogin() {
    navigate('/login');
  }

  return (
    <Button
      nameOfClass="button button_logout"
      value="LogOut"
      onClick={() => {
        navigateToLogin();
        localStorage.removeItem('AUTH_TOKEN');
      }}
    />
  );
}
