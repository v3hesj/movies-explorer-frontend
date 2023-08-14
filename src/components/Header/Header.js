
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Burger from '../Burger/Burger';
import classNames from 'classnames';

const Header = ({ loggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { pathname } = useLocation();

  const headerClass = classNames('header', {
    'header_theme_log': pathname === '/',
  });

  return(
    <header className={headerClass}>
      <div className='header__block'>
        {loggedIn
          ? 
            <div className='header__movies'>
              <Link to='/' className='header__logo-link'>
                <img src={logo} alt='Логотип' className='header__logo' />
              </Link>
              <Burger
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
              <Navigation 
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            </div>
          :
          <nav className='header__nav'>
            <Link to='/' className='header__logo-link'>
             <img src={logo} alt='Логотип' className='header__logo' />
            </Link>
            <div className='header__register-links'>
              <Link to='/signup' className='header__register-link'>
                Регистрация
              </Link>
              <Link to='/signin' className='header__login-link'>
                Войти
              </Link>
            </div>
          </nav>
        }
      </div>
    </header>
  )
}

export default Header;