import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useState, useEffect, useContext } from 'react';
import { shortFilmDuration } from '../../utils/constants';

const SavedMovies = () => {
  const { savedMovies } = useContext(CurrentUserContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [isKeyWord, setIsKeyWord] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);

  useEffect(() => {
    setSearchMovies(savedMovies);
    getSearchMovies(isKeyWord, isShortMovies);
    (savedMovies)
      ? setErrorMessage('')
      : setErrorMessage('Нет сохраненных филльмов');
  }, [savedMovies]);

  const getSearchMovies = (searchWord, isShortMovies) => {
    const filterSearchMovies = filterKeyMovies(savedMovies, searchWord, isShortMovies);
    filterSearchMovies.length === 0
      ? setErrorMessage('Ничего не найдено')
      : setErrorMessage('');
    savedMovies.length === 0
      ? setErrorMessage('Нет сохраненных филльмов')
      : setErrorMessage('');
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
      />
      {
        (errorMessage !== '') 
            ? <span className='movies__error'>{errorMessage}</span>
            : <MoviesCardList searchMovies={searchMovies}/>
      }
    </main>
  )
}

export default SavedMovies;
