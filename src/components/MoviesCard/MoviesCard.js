import './MoviesCard.css';
import React, { useState, useContext, useEffect }  from 'react';
import { useLocation } from 'react-router-dom';
import { mainApi } from '../../utils/MainApi';
import classNames from 'classnames';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { imagesUrl } from '../../utils/utilsApi'

const MoviesCard = ({ movie, saveState }) => {
  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(saveState.isSaved);
  const { nameRU, trailerLink, image, duration } = movie;

  const handleSaveClick = () => {
    return isSaved
      ? deleteMovieClick()
      : saveMovieClick()
  }

  const getTimeFromDuration = (time) =>{
    const hours = Math.trunc(time / 60);
    const minutes = time % 60;
    return `${hours}ч ${minutes}м`;
  }

  const buttonLikeClass = classNames('card__button-like', {
    'card__button-like_delete': pathname === '/saved-movies',
    'card__button-like_selected': (pathname === '/movies') && isSaved
  });

  const saveMovieClick = () => {
    // console.log('save movie = ', movie)
    setIsLoading(true);
    mainApi
      .addSaveMovie(movie)
      .then((dataMovies) => {
        // console.log(dataMovies);
        setSavedMovies([...savedMovies, dataMovies.movie]);
        setIsSaved(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const deleteMovieClick = () => {
    setIsLoading(true);
    // console.log('delete ', 'saveState.id = ', saveState.id);
    mainApi
      .deleteSaveMovie(saveState.id)
      .then(() => {
        setSavedMovies(savedMovies.filter((dataMovies) => {console.log(dataMovies._id);
          return !(dataMovies._id === saveState.id);
        }));
        setIsSaved(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <li className='card__item'>
        <a className='card__link' href={trailerLink} target='blank'>
          <img
            className='card__img'
            src={image}
            alt={nameRU}
          />
        </a>
        <div className='card__wrapper'>
          <div className="card__content">
            <p className='card__title'>{nameRU}</p>
            <button
              className={buttonLikeClass}
              type='button'
              onClick={handleSaveClick}
              disabled={isLoading}
            />
          </div>
          <p className='card__duration'>{getTimeFromDuration(duration)}</p>
        </div>
      </li>
    </>
    
  )
}

export default MoviesCard