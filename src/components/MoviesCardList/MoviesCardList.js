import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

const MoviesCardList = () => {
  const { pathname } = useLocation();
  return (
    <section className='cards'>
      <div className='cards__block'>
        <ul className='cards__list'>
          <MoviesCard />
        </ul>
        <button className={`cards__more-button ${(pathname === '/saved-movies') && 'cards__more-button_disabled'}`} type='button'>
          Ещё
        </button>
      </div>
    </section>
  )
}

export default MoviesCardList;