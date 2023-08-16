import './Burger.css';

const Burger = ({ isMenuOpen, setIsMenuOpen }) => {
  const BurgerClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <button className={`header__burger ${isMenuOpen && 'header__burger_active'}`} onClick={BurgerClick} type="button">
      <span className="header__burger-line"/>
    </button>
  )
}

export default Burger;
