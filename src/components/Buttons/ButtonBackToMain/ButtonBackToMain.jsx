import React from 'react';
import './ButtonBackToMain.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

export default function ButtonBackToMain() {
  const navigate = useNavigate();

  function navigateBackToMain() {
    navigate('/');
  }
  return (
    <Button
      nameOfClass="button button_backtomain"
      value="Go Back"
      onClick={() => navigateBackToMain()}
    />
  );
}

