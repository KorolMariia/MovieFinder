import React from 'react';
import './Login.scss';
import FormLogin from '../../components/FormLogin/FormLogin';
import ButtonBackToMain from '../../components/Buttons/ButtonBackToMain/ButtonBackToMain';

function Login() {
  return (
    <>
      
      <div className="login_wrapper">
        <ButtonBackToMain/>
        <FormLogin />
      </div>
    </>
  );
}

export default Login;
