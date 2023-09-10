import './Movies.css';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { moviesApi } from '../../utils/MoviesApi';
import { shortFilmDuration } from '../../utils/constants';
import apiTranslator from '../../utils/utilsApi';

const Movies = () => {
  const [allMovies, setAllMovies] = useState(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const localSearchMovies = JSON.parse(localStorage.getItem('localMovies')) || [];
  const localSearchKeyWord = localStorage.getItem('localKeyWord') || '';
  const ckboxIsShort = JSON.parse(localStorage.getItem('checkboxIsShort')) || false;
  
  const [localMovies, setLocalMovies] = useState(localSearchMovies);
  const [localKeyWord, setLocalKeyWord] = useState(localSearchKeyWord);
  const [checkboxIsShort, setCheckboxIsShort] = useState(ckboxIsShort);

  useEffect(() => {
    localStorage.setItem('localMovies', JSON.stringify(localMovies));
    localStorage.setItem('localKeyWord', localKeyWord);
    localStorage.setItem('checkboxIsShort', checkboxIsShort);
  }, [localMovies, localKeyWord, checkboxIsShort]);

  useEffect(() => {
    if (allMovies) {
      const moviesFilter = filterKeyMovies(allMovies, localKeyWord, checkboxIsShort);
      setLocalMovies(moviesFilter);
    }
  },[allMovies, localKeyWord, checkboxIsShort])

  const getSearchMovies = () => {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((allMovies) => {
        allMovies = allMovies.map(apiTranslator);
        setAllMovies(allMovies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false)
      });
  }
  const filterKeyMovies = (localAllMovies, keyword, isShortMovies) => {
    // console.log('localAllMovies=', localAllMovies, ' keyword=', keyword, 'isShortMovies=',isShortMovies);
    const filterMovies = localAllMovies.filter((movie) => {
      return (
        (movie.nameRU || '').toLowerCase().trim().includes(keyword.toLowerCase().trim()) ||
        (movie.nameEN || '').toLowerCase().trim().includes(keyword.toLowerCase().trim())
      );
    })
    // console.log(filterMovies)
    if (isShortMovies) {
      return filterMovies.filter((movie) => movie.duration <= shortFilmDuration);
    }
    return filterMovies;
  }
  
  const handleCheckboxClick = (checked) => {
    // localStorage.setItem('checkboxIsShort', checked);
    setCheckboxIsShort(checked);
    getSearchMovies();
    // getSearchMovies(isKeyWord, checked);
  };

  const handleSearchMovies = (word) => {
    localStorage.setItem('localKeyWord', word);
    setLocalKeyWord(word);
    getSearchMovies();
    // getSearchMovies(word, isShortMovies);
  };

  return(
    <main>
      <SearchForm
        isLoading={isLoading}
        handleSearchMovies={handleSearchMovies}
        handleCheckboxClick={handleCheckboxClick}
      />
      {isLoading
        ? <Preloader />
        :
          (errorMessage !== '') 
            ? <span className='movies__error'>{errorMessage}</span>
            : <MoviesCardList searchMovies={localMovies}/>
      } 
    </main>
  )
}

export default Movies;
