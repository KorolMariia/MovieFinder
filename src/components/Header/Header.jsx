import './Header.scss';
import React from 'react';
import NavBar from '../NavBar/NavBar';
import LoginHeader from '../LoginHeader/LoginHeader';

export default function Header() {
  return (
    <div className="header_wrapper">
      <img className="logo" src="/backgroundImage/logo.png" alt="Logo" />
      <NavBar />
      <LoginHeader />
    </div>
  );
}
