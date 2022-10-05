import './Error.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

function Error({ errors }) {
  return (
    <>
      <Header />
      <div className="error_wrapper">
        <h1 className="error_title">Something went wrong...</h1>
        <h3 className="error_title">{errors}</h3>
      </div>
    </>
  );
}

export default Error;

Error.propTypes = {
  errors: PropTypes.string,
};
