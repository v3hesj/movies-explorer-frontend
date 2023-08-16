import { Link, useLocation } from "react-router-dom";
import './Navigation.css';
import acc from '../../images/acc.svg';
import classNames from 'classnames';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const handleCloseClick = () => setIsMenuOpen(!isMenuOpen);
  const { pathname } = useLocation();

  return (
    <div className={`navigation ${isMenuOpen && 'navigation__open'}`}>
      <nav className='navigation__block'>
        <div className='navigation__links'>
          <Link to='/' className={`navigation__link navigation__link_visible ${(pathname === '/') && 'navigation__link_active'}`} onClick={handleCloseClick}>
            Главная
          </Link>
          <Link to='/movies' className={`navigation__link ${(pathname === '/movies') && 'navigation__link_active'}`} onClick={handleCloseClick}>
            Фильмы
          </Link>
          <Link to='/saved-movies' className={`navigation__link ${(pathname === '/saved-movies') && 'navigation__link_active'}`} onClick={handleCloseClick}>
            Сохранённые фильмы
          </Link>
        </div>
        <Link to='/profile' className='navigation__to-profile' onClick={handleCloseClick}>
          Аккаунт
          <img src={acc} alt='Логотип' className='navigation__acc' />
        </Link>
      </nav>
    </div>
  )
}

export default Navigation;