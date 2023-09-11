import AuthForm from '../AuthForm/AuthForm';
import useFormWithValidation from '../../utils/FormWithValidation';
import React, { useState } from 'react';

const Login = ({ currentError, handleLogin, isLoading } ) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleLogin(values.email, values.password);
  }

  return (
    <AuthForm
      currentError={currentError}
      onSubmit={handleSubmit}
      isLoading={isLoading }
      isValid={isValid}
      title='Рады видеть!'
      formName='login'
      button='Войти'
      rout='signup'
      textLink='Регистрация'
      questionAuth='Ещё не зарегистрированы?'>
      
      <label htmlFor="email" className="auth-form__label">E-mail
        <input
          className="auth-form__input"
          value={ values.email || '' }
          required
          id="email"
          name="email"
          type="email"
          onChange={handleChange} 
          minLength="8"
          maxLength="40"
          placeholder='pochta@yandex.ru' />
        <span className='form__error'>{errors.email}</span>
      </label>
      
      <label htmlFor="password" className="auth-form__label" >Пароль
        <input
          className="auth-form__input"
          value={ values.password || '' }
          required
          id="password"
          name="password"
          type="password"
          onChange={handleChange} 
          minLength="6" maxLength="20" />
        <span className='form__error'>{errors.password}</span>
      </label>

    </AuthForm> 
  )
}

export default Login;