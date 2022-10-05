import './Main.scss';
import React from 'react';
import ButtonLogin from '../../components/Buttons/ButtonLogin/ButtonLogin';
import ButtonSignUp from '../../components/Buttons/ButtonSignUp/ButtonSignUp';

function Main() {
  return (
    <div className="main_wrapper">
      <div className="main_wrapper-button">
        <ButtonLogin />
        <ButtonSignUp />
      </div>
    </div>
  );
}

export default Main;
