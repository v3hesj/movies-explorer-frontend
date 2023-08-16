import AuthForm from '../AuthForm/AuthForm';
import React, { useState } from 'react';

const Login = ({ handleLogin, isLoading, isValid } ) => {
  const [formValue, setFormValue] = useState({
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

    handleLogin(formValue.email,formValue.password);
  }

  return (
    <AuthForm
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
          value={ formValue.email || '' }
          required
          id="email"
          name="email"
          type="email"
          onChange={handleChange} 
          minLength="8"
          maxLength="40"
          placeholder='pochta@yandex.ru' />
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
          minLength="6" maxLength="20" />
      </label>

    </AuthForm> 
  )
}

export default Login;