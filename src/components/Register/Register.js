import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import useFormWithValidation from '../../utils/FormWithValidation';
import React, { useState } from 'react';

const Register = ({ currentError, handleRegister, isLoading } ) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    handleRegister(values.username, values.email, values.password);
  }
  return (
    <AuthForm
      currentError={currentError}
      onSubmit={handleSubmit}
      isLoading={isLoading }
      isValid={isValid}
      title='Добро пожаловать!'
      formName='register'
      button='Зарегистрироваться'
      rout='signin'
      textLink='Войти'
      questionAuth='Уже зарегистрированы?'>
      
      <label htmlFor="name" className="auth-form__label">Имя
        <input
          className="auth-form__input"
          value={ values.username || '' }
          required
          id="name"
          name="username"
          type="text"
          onChange={handleChange} 
          minLength="3"
          maxLength="40"
          placeholder="Ваше имя" 
          pattern='^[a-zA-ZА-Яа-яЁё\s\-]+$' />
        <span className='form__error'>{errors.username}</span>
      </label>     
      
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
          placeholder="Введите email" />
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
          minLength="6"
          maxLength="20"
          placeholder='Введите пароль' />
        <span className='form__error'>{errors.password}</span>
      </label>

    </AuthForm> 
  )
}

export default Register;