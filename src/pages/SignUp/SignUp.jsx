import './SignUp.scss';
import React from 'react';
import FormRegistration from '../../components/FormRegistration/FormRegistration';
import ButtonBackToMain from '../../components/Buttons/ButtonBackToMain/ButtonBackToMain';

function SignUp() {
  return (
    <div className="signup_wrapper">
      <ButtonBackToMain/>
      <FormRegistration />
    </div>
  );
}

export default SignUp;
