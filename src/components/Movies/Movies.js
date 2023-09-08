import './Movies.css';
import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { moviesApi } from '../../utils/MoviesApi';
import { shortFilmDuration } from '../../utils/constants';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchMovies, setSearchMovies] = useState([]);
  const [isKeyWord, setIsKeyWord] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    const localSearchMovies = JSON.parse(localStorage.getItem('localMovies')) || [];
    const localSearchKeyWord = localStorage.getItem('localKeyWord') || '';
    // const checkboxIsShort = JSON.parse(localStorage.getItem('checkboxIsShort')) || false;
    

    if (localSearchMovies && localSearchKeyWord) {
      // console.log(JSON.parse(localSearchMovies));
      setSearchMovies(localSearchMovies);
      setIsKeyWord(localSearchKeyWord);
      // setIsShortMovies(true);
    }
  },[]);

  const getSearchMovies = (keyWord, isShortMovies) => {
    const storageAllMovies = JSON.parse(localStorage.getItem('localAllMovies')) || [];
    if (!storageAllMovies.length) {
      console.log(keyWord, isShortMovies);
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((localAllMovies) => {
          // console.log(localAllMovies);
          // localStorage.setItem('localAllMovies', JSON.stringify(localAllMovies));
          const filterSearchMovies = keyWord
            ? filterKeyMovies(localAllMovies, keyWord, isShortMovies)
            : [];
          setSearchMovies(filterSearchMovies);
          localStorage.setItem('localAllMovies', JSON.stringify(filterSearchMovies));
          // (!filterSearchMovies)
            //Здесь написать обработчик ошибки
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false)
        });
    } else {
      const filterSearchMovies = keyWord
        ? filterKeyMovies(storageAllMovies, keyWord, isShortMovies)
        : [];
        setSearchMovies(filterSearchMovies);
        localStorage.setItem('localAllMovies', JSON.stringify(filterSearchMovies));
        // (!filterSearchMovies)
          //Здесь написать обработчик ошибки
    }
  };
  
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
    setIsShortMovies(checked);
    getSearchMovies(isKeyWord, checked);
    // console.log(checked)
  };

  const handleSearchMovies = (word) => {
    localStorage.setItem('localKeyWord', word);
    setIsKeyWord(word);
    getSearchMovies(word, isShortMovies);
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
            : <MoviesCardList searchMovies={searchMovies}/>
      } 
    </main>
  )
}

export default Movies;
