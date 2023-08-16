import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import React, { useState } from 'react';

const Register = ({ handleRegister, isLoading, isValid } ) => {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    handleRegister(formValue.name, formValue.email,formValue.password);
  }

  return (
    <AuthForm
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
          value={ formValue.name || '' }
          required
          id="name"
          name="name"
          type="text"
          onChange={handleChange} 
          minLength="3"
          maxLength="40"
          placeholder="Ваше имя" />
      </label>     
      
      <label htmlFor="email" className="auth-form__label">E-mail
        <input
          className="auth-form__input"
          value={ formValue.email || '' }
          required
          id="email"
          name="email"
          type="email"
          onChange={handleChange} 
          minLength="8"
          maxLength="40"
          placeholder="Введите email" />
      </label>
      
      <label htmlFor="password" className="auth-form__label" >Пароль
        <input
          className="auth-form__input"
          value={ formValue.password || '' }
          required
          id="password"
          name="password"
          type="password"
          onChange={handleChange} 
          minLength="6"
          maxLength="20"
          placeholder='Введите пароль' />
      </label>

    </AuthForm> 
  )
}

export default Register;