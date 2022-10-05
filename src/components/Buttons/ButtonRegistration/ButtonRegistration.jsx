import React from 'react';
import './ButtonRegistration.scss';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function ButtonRegistration({ errors }) {
  const navigate = useNavigate();
  const key = uuidv4();
  function navigateToMovies() {
    navigate('/movies');
  }

  return (
      <button type="submit" className="button-registration">Get Started</button>
  );
};

