import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = () => {
  return(
    <main>
      <SearchForm />
      <MoviesCardList />
    </main>
  )
}

export default SavedMovies;
