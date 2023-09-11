import { Link } from 'react-router-dom';
import './AuthForm.css';
import logo from '../../images/logo.svg';

function AuthForm({ currentError, onSubmit, isLoading, isValid, title, formName, children, button, rout, textLink, questionAuth }) {
  return (
    <section className="auth-form">
      <div className="auth-form__container">
        <Link to='/' className='auth-form__logo-link'>
          <img src={logo} alt='Логотип' className='auth-form__logo' />
        </Link>
        <h1 className='auth-form__title'>{title}</h1>
      </div>
      <form className='form' name={`form-${formName}`} onSubmit={onSubmit}>
        <div className={`form__wraper-${formName}`}>
          {children}
        </div>
        <span className='auth-form__error'>{currentError}</span>
        <button className={`form__button ${!isValid && 'form__button_disabled'}`}  type="submit" disabled={!isValid}> {button} </button>
      </form>
      <p className='auth-form__question'>{questionAuth}
        <Link to={`/${rout}`} className='auth-form__link'>{textLink}</Link>
      </p>
    </section>
  )
}

export default AuthForm;
