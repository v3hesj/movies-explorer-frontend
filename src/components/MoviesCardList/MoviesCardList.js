import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect , useContext } from 'react';
import { useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { sizeWindow, rowCard, rowCardMore } from '../../utils/constants';

const MoviesCardList = ({ searchMovies }) => {
  const { savedMovies } = useContext(CurrentUserContext);
  const { pathname } = useLocation();

  const [windowWidth, setWindowWidth] = useState(window.clientWidth);
  const [isButtonMore, setIsButtonMore] = useState(false);
  const [listMoviesPart, setListMoviesPart] = useState(0);
  const [listMoviesPartMore, setListMoviesPartMore] = useState(0);

  useEffect (() => {
    window.addEventListener('resize', () => {
      setTimeout(() => setWindowWidth(window.clientWidth), 1000);
    })

    switch(windowWidth) {
      case (windowWidth > sizeWindow.desk):
        setListMoviesPart(rowCard.desk);
        setListMoviesPartMore(rowCardMore.desk);
        break;
      case (windowWidth <= sizeWindow.desk && windowWidth > sizeWindow.tab):
        setListMoviesPart(rowCard.tab);
        setListMoviesPartMore(rowCardMore.tab);
        break;
      case (windowWidth <= sizeWindow.tab && windowWidth > sizeWindow.mobile):
        setListMoviesPart(rowCard.mobile);
        setListMoviesPartMore(rowCardMore.mobile);
        break;
      default: 
        setListMoviesPart(rowCard.mobile);
        setListMoviesPartMore(rowCardMore.mobile);
    }

    return () =>
      window.removeEventListener('resize', () => {
        setTimeout(() => setWindowWidth(window.clientWidth), 1000);
      });
  },[searchMovies.length, windowWidth]);

  useEffect (() => {
    switch(pathname) {
      case '/movies':
        searchMovies.length > listMoviesPart ? setIsButtonMore(true) : setIsButtonMore(false);
        break;
      case '/saved-movies':
        setIsButtonMore(false);
        break;
      default: setIsButtonMore(false);
    }
  }, [pathname, listMoviesPart, searchMovies.length])
  
  function handleButtonClickMore() {
    setListMoviesPart(listMoviesPart + listMoviesPartMore);
  }

  const renderCards = () => {
    if (pathname === '/movies') {
      return searchMovies.length 
        ? searchMovies
          .slice(0, listMoviesPart)
          .map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              saveState={checkSaveStatus(movie)}
            />
          ))
        : '';
    }
    else {
      return searchMovies.length 
        ? searchMovies
          .map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              saveState={{ isSaved: true, id: movie.id }}
            />
          ))
        : '';
    }
  }

  const checkSaveStatus = (movie) => {
    const selectMovie = savedMovies.find((film) => film.movieId === movie.id);
    // console.log('selectMovie=',selectMovie);
    return selectMovie
      ? { isSaved: true, id: selectMovie._id }
      : { isSaved: false, id: '' }
  };

  return (
    <section className='cards'>
      <div className='cards__block'>
        <ul className='cards__list'>
          {renderCards()}
        </ul>
        {isButtonMore &&
          (<button 
            className={`cards__more-button ${(pathname === '/saved-movies') && 'cards__more-button_disabled'}`}
            type='button'
            onClick={handleButtonClickMore}>
            Ещё
          </button>
        )}
      </div>
    </section>
  )
}

export default MoviesCardList;