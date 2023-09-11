import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useState, useEffect, useContext } from 'react';
import { shortFilmDuration } from '../../utils/constants';
import {SearchMessageErr} from '../../utils/error'

const SavedMovies = () => {
  const { savedMovies } = useContext(CurrentUserContext);
  const [currentError, setCurrentError] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [isKeyWord, setIsKeyWord] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);

  // console.log(savedMovies);
  useEffect(() => {
    setSearchMovies(savedMovies);
    getSearchMovies(isKeyWord, isShortMovies);
    (savedMovies.length === 0)
      ? setCurrentError(SearchMessageErr.NOT_SAVED)
      : setCurrentError('');
  }, [savedMovies]);

  const getSearchMovies = (searchWord, isShortMovies) => {
    const filterSearchMovies = filterKeyMovies(savedMovies, searchWord, isShortMovies);
    filterSearchMovies.length === 0
      ? setCurrentError(SearchMessageErr.NOT_FOUND)
      : setCurrentError('');
    savedMovies.length === 0
      ? setCurrentError(SearchMessageErr.NOT_SAVED)
      : setCurrentError('');
      setSearchMovies(filterSearchMovies);
  };

  const filterKeyMovies = (allMovies, searchWord, isShortMovies) => {
    const filterMovies = allMovies.filter((movie) => {
      return (
        (movie.nameRU || '').toLowerCase().trim().includes(searchWord.toLowerCase().trim()) ||
        (movie.nameEN || '').toLowerCase().trim().includes(searchWord.toLowerCase().trim()) 
      );
    })
    if (isShortMovies) {
      return filterMovies.filter((movie) => movie.duration <= shortFilmDuration);
    }
    return filterMovies;
  }
  
  const handleCheckboxClick = (checked) => {
    setIsShortMovies(checked);
    getSearchMovies(isKeyWord, checked);
  };

  const handleSearchMovies = (word) => {
    setIsKeyWord(word);
    getSearchMovies(word, isShortMovies);
  };

  return(
    <main>
      <SearchForm
        handleSearchMovies={handleSearchMovies}
        handleCheckboxClick={handleCheckboxClick}
        searchErr={setCurrentError}
      />
      {
        (currentError !== '') 
            ? <span className='movies__error'>{currentError}</span>
            : <MoviesCardList searchMovies={searchMovies}/>
      }
    </main>
  )
}

export default SavedMovies;
