import React from 'react';
import './ButtonBack.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

function ButtonBack() {
  const navigate = useNavigate();

  function navigateBack() {
    navigate('/movies');
  }
  return (
    <Button
      nameOfClass="button button_back"
      value="Go Back"
      onClick={() => navigateBack()}
    />
  );
}

export default ButtonBack;
