import React, { useState } from 'react';import './FormRegistration.scss';
import { useForm } from 'react-hook-form';
import { saveUserName } from '../../store/reducer/moviesSlice';
import { useDispatch } from 'react-redux';
import ButtonRegistration from '../Buttons/ButtonRegistration/ButtonRegistration';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function FormRegistration() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(saveUserName(data.username));
  };
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };

  return (
    <div className="registrarion_box">
      <h2 className="registrarion_box-title">Sign Up for Free</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user_box">
          <input
            {...register('firstname', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            className="user_box-input"
            type="text"
            placeholder="Gwen"
          />
          <label className="user_box-label">First Name</label>
          {errors.firstname?.type === 'required' && (
            <p className="error">This field is required</p>
          )}
          {errors?.firstname?.type === 'pattern' && (
            <p className="error">Alphabetical characters only</p>
          )}
        </div>
        <div className="user_box">
          <input
            {...register('lastname', {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            className="user_box-input"
            type="text"
            placeholder="Meyers"
          />
          <label className="user_box-label">Last Name</label>
          {errors.lastname?.type === 'required' && (
            <p className="error">This field is required</p>
          )}
          {errors?.lastname?.type === 'pattern' && (
            <p className="error">Alphabetical characters only</p>
          )}
        </div>
        <div className="user_box">
          <input
            {...register('username', {
              required: true,
              pattern: /^[a-z][a-zA-Z\d_\.]*$/g,
            })}
            className="user_box-input"
            type="text"
            placeholder="Gven_Meyers"
          />
          <label className="user_box-label">Userame</label>
          {errors.username?.type === 'required' && (
            <p className="error">This field is required</p>
          )}
          {errors?.username?.type === 'pattern' && (
            <p className="error-long">
              The username is guilty of small letters <br /> and consists of
              only letters, numbers,
              <br />
              special characters: . or _
            </p>
          )}
        </div>
        <div className="user_box">
          <input
            {...register('email', { required: true })}
            className="user_box-input"
            type="email"
            placeholder="example@example.com"
          />
          <label className="user_box-label">Email</label>
          {errors.email?.type === 'required' && (
            <p className="error">This field is required</p>
          )}
        </div>
        <div className="user_box">
          <input
            {...register('password', { required: true })}
            className="user_box-input"
            type={passwordType}
            onChange={(event) => setPassword(event.target.value)}
          />
          <VisibilityIcon onClick={togglePassword} className="eye" />
          <label className="user_box-label">Password</label>
          {errors.password?.type === 'required' && (
            <p className="error">This field is required</p>
          )}
        </div>
        <div className="user_box">
          <input
            {...register('confirmpassword', {
              required: true,
              validate: (confirmPassword) => password === confirmPassword,
            })}
            className="user_box-input"
            type={passwordType}
          />
          <label className="user_box-label">Confirm password</label>
          {errors.confirmpassword?.type === 'required' && (
            <p className="error">This field is required</p>
          )}
          {errors.confirmpassword?.type === 'validate' && (
            <p className="error">Your passwords don't match</p>
          )}
        </div>
        <div className="user_box">
          <input
            {...register('dateofbirth', { required: true })}
            className="user_box-input"
            type="date"
          />
          <label className="user_box-label">Date of birth</label>
          {errors.dateofbirth?.type === 'required' && (
            <p className="error">This field is required</p>
          )}
        </div>
        <div className="user_box">
          <div className="user_box-input">
            <input
              type="radio"
              id="male"
              name="gender"
              {...register('sex', { required: true })}
            />
            <label htmlFor="male" className="radio">
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              {...register('sex', { required: true })}
            />
            <label htmlFor="female" className="radio">
              Female
            </label>
            <input
              type="radio"
              id="other"
              name="gender"
              {...register('sex', { required: true })}
            />
            <label htmlFor="other" className="radio">
              Other
            </label>
          </div>
          <label className="user_box-label">Sex</label>
          {errors.sex?.type === 'required' && (
            <p className="error">This field is required</p>
          )}
        </div>
        <ButtonRegistration />
      </form>
    </div>
  );
}
