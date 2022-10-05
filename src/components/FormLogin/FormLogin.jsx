import React from 'react';
import './FormLogin.scss';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonSignIn from '../Buttons/ButtonSignIn/ButtonSignIn';
import { saveUserName } from '../../store/reducer/moviesSlice';

function FormLogin() {
  const dispatch = useDispatch();
  const key = uuidv4();
  const navigate = useNavigate();

  function navigateToMovies() {
    navigate('/movies');
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    navigateToMovies();
    localStorage.setItem('AUTH_TOKEN', `${key}`);
}

  return (
    <div className="login_box">
      <h2 className="login_box-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user_box">
          <input 
            className="user_box-input" 
            type="text"
            required
            onChange={(event) => dispatch(saveUserName(event.target.value))}
          />
          <label className="user_box-label">Username</label>
        </div>
        <div className="user_box">
          <input
            className="user_box-input"
            type="password"
            required
          />
          <label className="user_box-label">Password</label>
        </div>
        <ButtonSignIn />
      </form>
    </div>
  );
}

export default FormLogin;
